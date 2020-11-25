export interface EntityBase {
  id: string;
  label: string;
}

export class Entity implements EntityBase {

  id: string;
  label: string;
  url: string;

  constructor(_id: string, _label: string, _url?: string) {
    this.id = _id;
    this.label = _label;
    this.url = _url;
  }

  static createEntity(value: Partial<EntityBase>) {
    const entity = new Entity(value?.id, value?.label);

    return entity;
  }

}
