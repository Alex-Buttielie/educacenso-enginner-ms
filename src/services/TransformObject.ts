import { getValueFromPath, setValueAtPath } from "./Helpers";

interface Mapping {
  [newKey: string]: string;
}

export class ObjectTransformer {
  private mapping: Mapping;

  constructor(mapping: Mapping) {
    this.mapping = mapping;
  }

  public transform(obj: any): any {
    const result: any = {};

    for (const [newKey, originalKey] of Object.entries(this.mapping)) {
      const originalPath = originalKey.split(".");
      const newPath = newKey.split(".");

      const value = getValueFromPath(obj, originalPath);

      if (value != null) {
        setValueAtPath(result, newPath, value !== undefined ? value : null);
      }
    }

    console.log('Enviando para fila no rabbitmq:', result)
    return result;
  }
}
