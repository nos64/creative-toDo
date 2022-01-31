import { makeAutoObservable } from 'mobx';

class TextBtnStore {
  textBtn = 'Dark theme';

  constructor() {
    makeAutoObservable(this);
  }

  handlerToggleDescriptionBtn() {
    const THEME_MODE = {
      DARK: 'Dark theme',
      LIGHT: 'Light theme',
    };

    if (this.textBtn === THEME_MODE.LIGHT) {
      this.textBtn = THEME_MODE.DARK;
    } else {
      this.textBtn = THEME_MODE.LIGHT;
    } 
  }
}

export default new TextBtnStore();