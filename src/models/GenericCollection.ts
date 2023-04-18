export class GenericCollection<T> {
  items: T[];
  
  constructor(jsonString: string) {
    this.items = JSON.parse(jsonString);
  }
}