import { environment } from 'environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Species, SpeciesNode, SpeciesFlatNode } from './../models/species';
import { each, find } from 'lodash';

@Injectable({
    providedIn: 'root',
})
export class SpeciesService {
    timescaleLegend: any = [
        {
            color: 'black',
            min: 0,
            max: 0.5,
            label: '0'
        },
        {
            color: 'blue',
            min: 1,
            max: 50,
            label: '1 - 50'
        }, {
            color: 'cyan',
            min: 51,
            max: 200,
            label: '51 - 200'
        }, {
            color: 'green',
            min: 201,
            max: 500,
            label: '201 - 500'
        }, {
            color: 'orange',
            min: 501,
            max: 1000,
            label: '501 - 1000'
        }, {
            color: 'purple',
            min: 1001,
            max: 2000,
            label: '1001 - 2000'
        }, {
            color: 'red',
            min: 2001,
            max: 8000,
            label: '2001+'
        }
    ];
    species: Species[];
    speciesNodes: SpeciesNode[];
    speciesDetail: any;
    activeSpecies: any;
    onSpeciesTreeChanged: BehaviorSubject<any>;
    onSpeciesDetailChanged: BehaviorSubject<any>;

    constructor(private httpClient: HttpClient) {
        this.onSpeciesTreeChanged = new BehaviorSubject([]);
        this.onSpeciesDetailChanged = new BehaviorSubject({});
        //this.activeSpecies = "LUCA";
    }

    getSpeciesList() {
        this.httpClient.get<Species[]>('api/species-list')
            .subscribe((response: Species[]) => {
                this.species = response;
                this._addSpeciesColor(this.species);
                this.speciesNodes = this._buildSpeciesTree(this.species);
                this.onSpeciesTreeChanged.next(this.speciesNodes);
            });
    }

    getActiveSpecies() {
        return this.activeSpecies;
    }

    setActiveSpecies(species: any) {
        this.activeSpecies = species;
    }

    private _buildTimescaleColor(timescale?: number): string {
        let bucket = 0;
        timescale = Number(timescale);

        if (isNaN(timescale)) {
            return this.timescaleLegend[bucket];
        }

        for (let i = 0; i < this.timescaleLegend.length; i++) {
            if (timescale < this.timescaleLegend[i].max) {
                bucket = i;
                break;
            }
        }
        return this.timescaleLegend[bucket];
    }

    private _addSpeciesColor(species: Species[]) {
        const self = this;
        each(species, function (speciesNode) {
            speciesNode.timescaleColor = self._buildTimescaleColor(speciesNode.timescale);
        });
    }

    private _buildSpeciesTree(species: Species[]): SpeciesNode[] {
        let getNestedChildren = (arr, parent_id, level) => {
            let out = []
            for (let i in arr) {
                if (arr[i].parent_id == parent_id) {
                    let children = getNestedChildren(arr, arr[i].id, level++)

                    if (children.length) {
                        arr[i].children = children
                    }
                    out.push(arr[i])
                }
            }
            return out
        }

        return getNestedChildren(species, '', 1);
    }


    private _addHeirarchyLevel(speciesNodes: Species[]) {
        each(speciesNodes, function (speciesNode) {
            let level = 0;
            let parent = speciesNode;
            while (parent) {
                parent = find(speciesNodes, { id: parent.parent_id });
                level++;
            }
            // speciesNode.level = level;
        });
    }

}
