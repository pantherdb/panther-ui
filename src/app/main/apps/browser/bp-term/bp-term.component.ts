import { Component, OnInit, Injectable, ViewChild, ViewChildren, Renderer2, Input, ElementRef } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener, MatTreeNode } from '@angular/material/tree';
import { BehaviorSubject, Subject, Observable, of as observableOf } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


import { SelectionModel } from '@angular/cdk/collections';

import { Term, TermNode, TermFlatNode } from './../models/term'

import { PantherMenuService } from '@panther.common/services/panther-menu.service';
import { BrowserService } from './../services/browser.service';


@Component({
  selector: 'panther-bp-term',
  templateUrl: './bp-term.component.html',
  styleUrls: ['./bp-term.component.scss']
})
export class BpTermComponent implements OnInit {
  @ViewChild('tree') tree;
  @ViewChildren(MatTreeNode, { read: ElementRef }) treeNodes: ElementRef[];

  @Input('checklistSelection')
  public checklistSelection: SelectionModel<TermFlatNode>;

  activeTerm: any;
  termList: TermNode[];

  treeControl: FlatTreeControl<TermFlatNode>;
  treeFlattener: MatTreeFlattener<TermNode, TermFlatNode>;
  dataSource: MatTreeFlatDataSource<TermNode, TermFlatNode>;

  // checklistSelection = new SelectionModel<TermFlatNode>(true);

  private _unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private browserService: BrowserService,
    private renderer: Renderer2,) {

    this.treeFlattener = new MatTreeFlattener(this.transformer, this._getLevel,
      this._isExpandable, this._getChildren);
    this.treeControl = new FlatTreeControl<TermFlatNode>(this._getLevel, this._isExpandable);
    this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

    this._unsubscribeAll = new Subject();

  }

  ngOnInit() {
    this.browserService.onBpTermTreeChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(termTree => {
        this.termList = termTree;
        console.log("--", termTree)
        this.dataSource.data = this.termList;
      });

    this.browserService.getBpTermList();
  }

  selectTerm(term) {
    //do nothing for now
  }

  transformer = (node: TermNode, level: number) => {
    return new TermFlatNode(
      node.id,
      node.label,
      node.parent_id,
      node.aspect,
      !!node.children,
      level);
  }

  private _getLevel = (node: TermFlatNode) => node.level;

  private _isExpandable = (node: TermFlatNode) => node.expandable;

  private _getChildren = (node: TermNode): Observable<TermNode[]> => observableOf(node.children);

  hasChild = (_: number, _nodeData: TermFlatNode) => _nodeData.expandable;


  descendantsAllSelected(node: TermFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    return descAllSelected;
  }

  /** Whether part of the descendants are selected */
  descendantsPartiallySelected(node: TermFlatNode): boolean {
    const descendants = this.treeControl.getDescendants(node);
    const result = descendants.some(child => this.checklistSelection.isSelected(child));
    return result && !this.descendantsAllSelected(node);
  }

  /** Toggle the to-do item selection. Select/deselect all the descendants node */
  termItemSelectionToggle(node: TermFlatNode): void {
    this.checklistSelection.toggle(node);
    const descendants = this.treeControl.getDescendants(node);
    this.checklistSelection.isSelected(node)
      ? this.checklistSelection.select(...descendants)
      : this.checklistSelection.deselect(...descendants);

    // Force update for the parent
    descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    this.checkAllParentsSelection(node);
  }

  /** Toggle a leaf to-do item selection. Check all the parents to see if they changed */
  termLeafItemSelectionToggle(node: TermFlatNode): void {
    this.checklistSelection.toggle(node);
    this.checkAllParentsSelection(node);
  }

  /* Checks all the parents when a leaf node is selected/unselected */
  checkAllParentsSelection(node: TermFlatNode): void {
    let parent: TermFlatNode | null = this.getParentNode(node);
    while (parent) {
      this.checkRootNodeSelection(parent);
      parent = this.getParentNode(parent);
    }
  }

  /** Check root node checked state and change it accordingly */
  checkRootNodeSelection(node: TermFlatNode): void {
    const nodeSelected = this.checklistSelection.isSelected(node);
    const descendants = this.treeControl.getDescendants(node);
    const descAllSelected = descendants.every(child =>
      this.checklistSelection.isSelected(child)
    );
    if (nodeSelected && !descAllSelected) {
      this.checklistSelection.deselect(node);
    } else if (!nodeSelected && descAllSelected) {
      this.checklistSelection.select(node);
    }
  }

  /* Get the parent node of a node */
  getParentNode(node: TermFlatNode): TermFlatNode | null {
    const currentLevel = this._getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = this.treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = this.treeControl.dataNodes[i];

      if (this._getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
    return null;
  }
}
