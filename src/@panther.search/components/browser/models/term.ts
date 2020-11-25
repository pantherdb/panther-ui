export interface Term {
    id: string;
    label: string;
    parent_id: string;
    aspect: string;
}

export class TermNode {
    id: string;
    label: string;
    parent_id: string;
    aspect: string;
    level: number;
    expandable: boolean;
    children: TermNode[];
}

export class TermFlatNode {
    constructor(
        public id: string,
        public label: string,
        public parent_id: string,
        public aspect: string,
        public expandable: boolean,
        public level: number) { }
}
