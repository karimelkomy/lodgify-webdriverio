import Actions from "../components/Actions";
import { sprintf } from "sprintf-js";

const completeTaskCheckbox =
  '//*[@resource-id="com.todoist:id/item"][./*[@resource-id="com.todoist:id/text" and @text="%s"]]/*[@resource-id="com.todoist:id/checkmark"]';
const taskNameText =
  '//*[@resource-id="com.todoist:id/item"]/*[@resource-id="com.todoist:id/text" and @text="%s"]';

export default class ProjectScreen {
  constructor() {
    this.actions = new Actions();
  }

  async markTaskAsCompleted({ projectDetails }) {
    await this.actions.click(
      sprintf(completeTaskCheckbox, projectDetails.taskName)
    );
  }

  async validateTask({ projectDetails }) {
    await this.actions.validateElementVisibility(
      sprintf(taskNameText, projectDetails.taskName)
    );
  }
}
