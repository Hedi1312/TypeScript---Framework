(() => {
  // src/Attributes.ts
  var Attributes = class {
    constructor(data) {
      this.data = data;
    }
    get(propName) {
      return this.data[propName];
    }
    set(updateData) {
      Object.assign(this.data, updateData);
    }
  };

  // src/index.ts
  var attrbs = new Attributes({ id: "5", name: "john", age: 32 });
  var id = attrbs.get("id");
  var age = attrbs.get("age");
})();
