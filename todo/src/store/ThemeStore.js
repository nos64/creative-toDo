import { makeAutoObservable } from 'mobx';

class ThemeStore {
  theme = 'light';

  constructor() {
    makeAutoObservable(this);
  }

  handlerToggleTheme() {

    if (this.theme === 'dark') {
      this.theme = 'light'
    } else {
      this.theme = 'dark';
    } 
  } 

}

export default new ThemeStore();


