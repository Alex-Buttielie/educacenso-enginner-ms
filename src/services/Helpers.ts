export function getValueFromPath(obj: any, path: string[]): any {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined) ? acc[key] : undefined, obj);
  }
  
  export function setValueAtPath(obj: any, path: string[], value: any): void {
    path.slice(0, -1).reduce((acc, key, index) => {
      if (!acc[key]) {
        acc[key] = {};
      }
      return acc[key];
    }, obj)[path[path.length - 1]] = value;
  }
  