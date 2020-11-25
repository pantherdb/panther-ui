import { Component, OnInit, Injectable, ViewChild, ViewChildren, Renderer2, ElementRef, OnDestroy } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNode } from '@angular/material/tree';
import { BehaviorSubject, Subject, Observable, of as observableOf } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Species, SpeciesNode, SpeciesFlatNode } from './../models/species'

import { PantherSearchMenuService } from '@panther.search/services/search-menu.service';
import { SpeciesService } from './../services/species.service';


@Component({
  selector: 'panther-species-tree',
  templateUrl: './species-tree.component.html',
  styleUrls: ['./species-tree.component.scss'],
})
export class SpeciesTreeComponent implements OnInit, OnDestroy {
  @ViewChild('tree') tree;
  @ViewChildren(MatTreeNode, { read: ElementRef }) treeNodes: ElementRef[];

  activeSpecies: any;
  speciesList: SpeciesNode[];

  treeControl: FlatTreeControl<SpeciesFlatNode>;
  treeFlattener: MatTreeFlattener<SpeciesNode, SpeciesFlatNode>;
  dataSource: MatTreeFlatDataSource<SpeciesNode, SpeciesFlatNode>;

  timescaleLegend: any = [];

  private _unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public pantherSearchMenuService: PantherSearchMenuService,
    private speciesService: SpeciesService,
    private renderer: Renderer2,) {

    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<SpeciesFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this.timescaleLegend = speciesService.timescaleLegend;
    console.log(this.pantherSearchMenuService.pantherTypes)
    this._unsubscribeAll = new Subject();

  }

  ngOnInit() {

    this.speciesService.onSpeciesTreeChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(speciesTree => {
        this.speciesList = speciesTree;
        //console.dir(this.speciesList);

        this.dataSource.data = this.speciesList;
        //  this.activeSpecies = this.speciesService.getActiveSpecies();
        //  this.tree.treeControl.expandAll();
        // console.log(genes)
      });

    this.speciesService.getSpeciesList();
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  selectSpecies(species) {
    this.activeSpecies = species;

    this.router.navigate([`species/genes`, {
      outlets: {
        'list': ['genes', `${species}`, 'default species']
      }
    }]);
  }

  transformer = (node: SpeciesNode, level: number) => {
    return new SpeciesFlatNode(
      node.id,
      node.taxon_id,
      node.short_name,
      node.long_name,
      node.parent_id,
      node.timescale,
      node.timescaleColor,
      node.gene_count,
      !!node.children,
      level);
  }

  private _getLevel = (node: SpeciesFlatNode) => node.level;

  private _isExpandable = (node: SpeciesFlatNode) => node.expandable;

  private _getChildren = (node: SpeciesNode): Observable<SpeciesNode[]> => observableOf(node.children);

  hasChild = (_: number, _nodeData: SpeciesFlatNode) => _nodeData.expandable;
}
