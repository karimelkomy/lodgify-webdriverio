import "dotenv/config";
import Actions from "../components/Actions";

const emailInput = '//*[@resource-id="email"]';
const passwordInput = '//*[@resource-id="password"]';
const loginButton = '//*[@resource-id="auth_button_tag"]';

export default class LoginScreen {
  constructor() {
    this.actions = new Actions();
  }

  async login() {
    await this.actions.fill(emailInput, process.env.EMAIL);
    await this.actions.fill(passwordInput, process.env.PASSWORD);
    await this.actions.click(loginButton);
  }
}
