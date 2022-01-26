import { makeAutoObservable } from 'mobx';

class TodoStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask(task) {
    this.tasks.push(
      {
        text: task,
        key: Date.now().toString()
      }
      )

  }

  deleteTodo(key) {
    this.tasks = this.tasks.filter(task => task.key !== key)
  }
}

export default new TodoStore();