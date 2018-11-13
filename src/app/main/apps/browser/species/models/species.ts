export interface Species {
    id: number;
    taxon_id: string;
    short_name: string,
    long_name: string;
    parent_id: number;
    timescale: number;
    timescaleColor: string;
    gene_count: number;
}

export class SpeciesNode {
    id: number;
    taxon_id: string;
    short_name: string;
    long_name: string;
    parent_id: number;
    timescale: number;
    timescaleColor: string;
    gene_count: number;
    level: number;
    expandable: boolean;
    children: SpeciesNode[];
}

export class SpeciesFlatNode {
    constructor(
        public id: number,
        public taxon_id: string,
        public short_name: string,
        public long_name: string,
        public parent_id: number,
        public timescale: number,
        public timescaleColor: string,
        public gene_count: number,
        public expandable: boolean,
        public level: number) { }
}
