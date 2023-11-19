import { Task } from "./Task";

export class User {
  firstName = "";
  lastName = "";
  age = 1;
  tasks = [];

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  setAge(newAge) {
    if (isFinite(newAge) && newAge > 0 && typeof newAge === "number") {
        this.age = newAge;
    }
  }
  
  addTasks(tasks) {
    const validTasks = tasks.filter(task => task instanceof Task);
    this.tasks = this.tasks.concat(validTasks);
  }

  getTasksCount() {
    return this.tasks.length;
  }
}