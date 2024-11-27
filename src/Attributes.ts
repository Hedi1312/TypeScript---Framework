
export class Attributes<P extends Object> {
    
    constructor(private data: P){}

    get<K extends keyof P>(propName: K): P[K]{
        return this.data[propName];
    }


    set(updateData: Partial<P>) :void{
        Object.assign(this.data, updateData);
    }
}

