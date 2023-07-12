import Actions from "../components/Actions";
import { sprintf } from "sprintf-js";

const projectTab = '//*[@resource-id="android:id/list"]//*[@text="%s"]';

export default class MenuScreen {
  constructor() {
    this.actions = new Actions();
  }

  async openProject({ projectDetails }) {
    await this.actions.click(sprintf(projectTab, projectDetails.projectName));
  }
}
