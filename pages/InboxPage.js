import { sprintf } from "sprintf-js";
import Actions from "../components/Actions";
import LeftMenuSidebar from "../components/LeftMenuSidebar";

const taskLabelText = '//div[@class="task_content" and text()="%s"]';

export default class InboxPage {
  constructor() {
    this.actions = new Actions();
    this.leftMenuSidebar = new LeftMenuSidebar();
  }

  async openInbox() {
    await this.leftMenuSidebar.openInbox();
  }

  async validateTask({ taskDetails }) {
    await this.actions.validateElementVisibility(
      sprintf(taskLabelText, taskDetails.taskName)
    );
  }
}
