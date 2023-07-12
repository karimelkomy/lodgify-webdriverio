import Actions from "../components/Actions";

const menuButton = '//*[@content-desc="Menu"]';

export default class AppScreen {
  constructor() {
    this.actions = new Actions();
  }

  async openMenuScreen() {
    await this.actions.click(menuButton);
  }
}
