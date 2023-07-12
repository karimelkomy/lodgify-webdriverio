import Actions from "../components/Actions";

const loginTab = '//ul[contains(@style, "navbar-item")]//a[text()="Log in"]';

export default class HomePage {
  constructor() {
    this.actions = new Actions();
  }

  async openLoginPage() {
    await this.actions.click(loginTab);
  }
}
