import { sprintf } from "sprintf-js";
import Actions from "./Actions";

const projectTab = '//ul[@id="projects_list"]//span[text()="%s"]';

export default class LeftMenuSidebar {
  constructor() {
    this.actions = new Actions();
  }

  async validateProjectName({ projectDetails }) {
    await this.actions.validateElementVisibility(
      sprintf(projectTab, projectDetails.projectName)
    );
  }

  async openProject({ projectDetails }) {
    await this.actions.click(sprintf(projectTab, projectDetails.projectName));
  }
}
