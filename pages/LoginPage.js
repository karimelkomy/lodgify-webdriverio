import Actions from "../components/Actions";

const emailInput = '//input[@type="email"]';
const passwordInput = '//input[@type="password"]';
const loginButton = '//button[.="Log in"]';

export default class LoginPage {
  constructor() {
    this.actions = new Actions();
  }

  async login() {
    await this.actions.fill(emailInput, process.env.EMAIL);
    await this.actions.fill(passwordInput, process.env.PASSWORD);
    await this.actions.click(loginButton);
  }
}
