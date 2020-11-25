import { pantherFormConfig } from './../../panther-form-config';
import { Entity, AnnotonNodeDisplay } from './../../models/annoton';
import * as EntityDefinition from './entity-definition';
import { AnnotonNodeType } from './../../models/annoton/annoton-node';
import { each } from 'lodash';

export enum CardinalityType {
    none = 'none',
    oneToOne = 'oneToOne',
    oneToMany = 'oneToMany',
}

export interface ShapeDescription {
    id: string;
    label: string;
    node: AnnotonNodeDisplay;
    predicate: Entity;
    cardinality: CardinalityType;
}

const addCausalEdges = (edges: Entity[]): ShapeDescription[] => {
    const causalShapeDescriptions: ShapeDescription[] = [];

    each(edges, (edge: Entity) => {
        causalShapeDescriptions.push({
            id: AnnotonNodeType.GoBiologicalProcess,
            node: <AnnotonNodeDisplay>{
                type: AnnotonNodeType.GoBiologicalProcess,
                category: [EntityDefinition.GoBiologicalProcess],
                aspect: 'P',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.bp,
                isKey: true,
                relationEditable: true,
                weight: 10,
            },
            predicate: edge,
            cardinality: CardinalityType.oneToOne
        } as ShapeDescription);
    });

    return causalShapeDescriptions;
};

export const canInsertEntity = {
    [AnnotonNodeType.GoMolecularEntity]: [
        <ShapeDescription>{
            label: 'Add Part Of (Cellular Component)',
            id: AnnotonNodeType.GoCellularComponent,
            node: <AnnotonNodeDisplay>{
                type: AnnotonNodeType.GoCellularComponent,
                category: [EntityDefinition.GoCellularComponent],
                label: 'MF part of Cellular Component',
                aspect: 'C',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                weight: 10,
                isKey: true,
            },
            predicate: pantherFormConfig.edge.partOf,
            cardinality: CardinalityType.oneToOne
        },
    ],
    [AnnotonNodeType.GoMolecularFunction]: [
        <ShapeDescription>{
            label: 'Add Enabled by GP',
            id: AnnotonNodeType.GoMolecularEntity,
            node: <AnnotonNodeDisplay>{
                id: EntityDefinition.GoMolecularEntity.id,
                type: AnnotonNodeType.GoMolecularEntity,
                category: [EntityDefinition.GoMolecularEntity],
                label: 'Gene Product',
                skipEvidence: true,
                displaySection: pantherFormConfig.displaySection.gp,
                displayGroup: pantherFormConfig.displayGroup.gp,
                termRequired: true,
                weight: 2,
                isKey: true
            },
            predicate: pantherFormConfig.edge.enabledBy,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Part Of (Biological Process)',
            id: AnnotonNodeType.GoBiologicalProcess,
            node: <AnnotonNodeDisplay>{
                type: AnnotonNodeType.GoBiologicalProcess,
                category: [EntityDefinition.GoBiologicalProcess],
                label: 'MF part of Biological Process',
                aspect: 'P',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.bp,
                weight: 10,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.partOf,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Occurs In (Cellular Component)',
            id: AnnotonNodeType.GoCellularComponent,
            node: <AnnotonNodeDisplay>{
                type: AnnotonNodeType.GoCellularComponent,
                category: [EntityDefinition.GoCellularComponent],
                label: 'MF occurs in Cellular Component',
                aspect: 'C',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                weight: 20,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.occursIn,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Occurs In (Cell Type)',
            id: AnnotonNodeType.GoCellTypeEntity,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoCellTypeEntity],
                type: AnnotonNodeType.GoCellTypeEntity,
                label: 'Occurs In (Cell Type)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                isExtension: false,
                weight: 30,

            },
            predicate: pantherFormConfig.edge.occursIn,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Occurs In (Anatomy)',
            id: AnnotonNodeType.GoAnatomicalEntity,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoAnatomicalEntity],
                type: AnnotonNodeType.GoAnatomicalEntity,
                label: 'Occurs In (Anatomy)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                isExtension: true,
                weight: 40,
            },
            predicate: pantherFormConfig.edge.occursIn,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Occurs In (Organism)',
            id: AnnotonNodeType.GoOrganism,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoOrganism],
                type: AnnotonNodeType.GoOrganism,
                label: 'Part Of (Organism)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                isExtension: true,
                weight: 50,
            },
            predicate: pantherFormConfig.edge.occursIn,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Has Input (Chemical/Protein Containing Complex)',
            id: AnnotonNodeType.GoChemicalEntityHasInput,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoChemicalEntity, EntityDefinition.GoProteinContainingComplex],
                type: AnnotonNodeType.GoChemicalEntityHasInput,
                label: 'Has Input (Chemical/Protein Containing Complex)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.mf,
                isExtension: true,
                weight: 4,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.hasInput,
            cardinality: CardinalityType.oneToMany
        },
        <ShapeDescription>{
            label: 'Add Has Output (Chemical/Protein Containing Complex)',
            id: AnnotonNodeType.GoChemicalEntityHasOutput,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoChemicalEntity, EntityDefinition.GoProteinContainingComplex],
                type: AnnotonNodeType.GoChemicalEntityHasOutput,
                label: 'Has Output (Chemical/Protein Containing Complex)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.mf,
                isExtension: true,
                weight: 5,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.hasOutput,
            cardinality: CardinalityType.oneToMany
        },
        <ShapeDescription>{
            label: 'Add Happens During (Biological Phase)',
            id: AnnotonNodeType.GoBiologicalPhase,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoBiologicalPhase],
                type: AnnotonNodeType.GoBiologicalPhase,
                label: 'Happens During (Biological Phase)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.mf,
                isExtension: true,
                weight: 3,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.happensDuring,
            cardinality: CardinalityType.oneToOne
        },

        // Causal Edges
        ...addCausalEdges([
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOfOrWithin),
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOf),
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOfNegativeEffect),
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOfPositiveEffect),
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOfOrWithinPositiveEffect),
            Entity.createEntity(pantherFormConfig.edge.causallyUpstreamOfOrWithinNegativeEffect),
        ])
    ],
    [AnnotonNodeType.GoBiologicalProcess]: [
        <ShapeDescription>{
            label: 'Add Part Of (Biological Process)',
            id: AnnotonNodeType.GoBiologicalProcess,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoBiologicalProcess],
                type: AnnotonNodeType.GoBiologicalProcess,
                label: 'Part Of (Biological Process)',
                aspect: 'P',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.bp,
                isExtension: true,
                weight: 10,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.partOf,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Occurs In (Cellular Component)',
            id: AnnotonNodeType.GoCellularComponent,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoCellularComponent],
                type: AnnotonNodeType.GoCellularComponent,
                aspect: 'C',
                label: 'Occurs In Cellular Component',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.bp,
                isExtension: true,
                weight: 20
            },
            predicate: pantherFormConfig.edge.occursIn,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Has Input (Chemical/Anatomical Entity/Protein Containing Complex)',
            id: AnnotonNodeType.GoChemicalEntityHasInput,
            node: <AnnotonNodeDisplay>{
                category: [
                    EntityDefinition.GoChemicalEntity,
                    EntityDefinition.GoAnatomicalEntity,
                    EntityDefinition.GoProteinContainingComplex
                ],
                type: AnnotonNodeType.GoChemicalEntityHasInput,
                label: 'Has Input (Chemical/Anatomical Entity/Protein Containing Complex)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.bp,
                isExtension: true,
                weight: 14,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.hasInput,
            cardinality: CardinalityType.oneToMany
        },
        <ShapeDescription>{
            label: 'Add Has Output (Chemical/Anatomical Entity/Protein Containing Complex)',
            id: AnnotonNodeType.GoChemicalEntityHasInput,
            node: <AnnotonNodeDisplay>{
                category: [
                    EntityDefinition.GoChemicalEntity,
                    EntityDefinition.GoAnatomicalEntity,
                    EntityDefinition.GoProteinContainingComplex
                ],
                type: AnnotonNodeType.GoChemicalEntityHasOutput,
                label: 'Has Output (Chemical/Anatomical Entity/Protein Containing Complex)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.bp,
                isExtension: true,
                weight: 14,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.hasOutput,
            cardinality: CardinalityType.oneToMany
        },
    ],
    [AnnotonNodeType.GoCellularComponent]: [
        <ShapeDescription>{
            label: 'Add Part Of (Cellular Component)',
            id: AnnotonNodeType.GoCellularComponent,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoCellularComponent],
                type: AnnotonNodeType.GoCellularComponent,
                aspect: 'C',
                label: 'Part Of Cellular Component',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                isExtension: true,
                weight: 20,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.partOf,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Part Of (Cell Type)',
            id: AnnotonNodeType.GoCellTypeEntity,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoCellTypeEntity],
                type: AnnotonNodeType.GoCellTypeEntity,
                label: 'Part Of (Cell Type)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                isExtension: true,
                weight: 30,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.partOf,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Part Of (Anatomy)',
            id: AnnotonNodeType.GoAnatomicalEntity,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoAnatomicalEntity],
                type: AnnotonNodeType.GoAnatomicalEntity,
                label: 'Part Of (Anatomy)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                isExtension: true,
                weight: 40,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.partOf,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Part Of (Organism)',
            id: AnnotonNodeType.GoOrganism,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoOrganism],
                type: AnnotonNodeType.GoOrganism,
                label: 'Part Of (Organism)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                isExtension: true,
                weight: 50,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.partOf,
            cardinality: CardinalityType.oneToOne
        }
    ],
    [AnnotonNodeType.GoCellTypeEntity]: [
        <ShapeDescription>{
            label: 'Add Part Of (Anatomy)',
            id: AnnotonNodeType.GoAnatomicalEntity,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoAnatomicalEntity],
                type: AnnotonNodeType.GoAnatomicalEntity,
                label: 'Part Of (Anatomy)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                isExtension: true,
                weight: 40,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.partOf,
            cardinality: CardinalityType.oneToOne
        },
        <ShapeDescription>{
            label: 'Add Part Of (Organism)',
            id: AnnotonNodeType.GoOrganism,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoOrganism],
                type: AnnotonNodeType.GoOrganism,
                label: 'Part Of (Organism)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                isExtension: true,
                weight: 50,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.partOf,
            cardinality: CardinalityType.oneToOne
        }
    ],
    [AnnotonNodeType.GoAnatomicalEntity]: [
        <ShapeDescription>{
            label: 'Add Part Of (Organism)',
            id: AnnotonNodeType.GoOrganism,
            node: <AnnotonNodeDisplay>{
                category: [EntityDefinition.GoOrganism],
                type: AnnotonNodeType.GoOrganism,
                label: 'Part Of (Organism)',
                displaySection: pantherFormConfig.displaySection.fd,
                displayGroup: pantherFormConfig.displayGroup.cc,
                isExtension: true,
                weight: 50,
                showInMenu: true,
            },
            predicate: pantherFormConfig.edge.partOf,
            cardinality: CardinalityType.oneToOne
        }
    ]
};




