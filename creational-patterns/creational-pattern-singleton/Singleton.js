const object1 = {
  name: "Foo",
};

const object2 = {
  name: "Foo",
};

console.log("is object1 === object2", object1 === object2);

class Counter {
  constructor() {
    if (typeof Counter.instanse === "object") {
      return Counter.instanse;
    }
    this.count = 0;
    Counter.instanse = this;
    return this;
  }

  getCounter() {
    return this.count;
  }

  increaseCounter() {
    return this.count++;
  }
}

const counter1 = new Counter();
const counter2 = new Counter();
counter1.increaseCounter();
counter1.increaseCounter();
counter2.increaseCounter();
counter2.increaseCounter();
console.log("counter1 count is: ", counter1.getCounter());
console.log("counter2 count is: ", counter2.getCounter());
