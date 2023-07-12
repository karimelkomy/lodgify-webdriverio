import Actions from "../components/Actions";

const continueWithMoreOptionsButton =
  '//*[@resource-id="com.todoist:id/more_signin_options"]';
const loginWithEmailButton = '//*[@resource-id="com.todoist:id/email_login"]';

export default class HomeScreen {
  constructor() {
    this.actions = new Actions();
  }

  async openLoginScreen() {
    await this.actions.click(continueWithMoreOptionsButton);
    await this.actions.click(loginWithEmailButton);
  }
}
