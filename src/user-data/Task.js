export class Task {
  #description = "";

  constructor(name) {
    this.name = name;
  }

  get description() {
    return this.#description;
  }

  set description(newDescription) {
    if (typeof newDescription === "string") {
      this.#description = newDescription;
    }
  }
}