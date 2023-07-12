import { sprintf } from "sprintf-js";
import Actions from "../components/Actions";
import LeftMenuSidebar from "../components/LeftMenuSidebar";

const addTaskButton = '//button[.="Add task"]';
const taskNameInput = '//div[@aria-label="Task name"]';
const taskDescriptionInput = '//div[@aria-label="Description"]';
const addTaskSubmitButton =
  '//button[@data-testid="task-editor-submit-button"]';
const taskLabelText = '//div[@class="task_content" and text()="%s"]';

export default class ProjectPage {
  constructor() {
    this.actions = new Actions();
    this.leftMenuSidebar = new LeftMenuSidebar();
  }

  async openProject({ projectDetails }) {
    await this.leftMenuSidebar.openProject({ projectDetails });
  }

  async createTask({ projectDetails }) {
    await this.actions.click(addTaskButton);

    await this.actions.fill(taskNameInput, projectDetails.taskName);
    await this.actions.fill(
      taskDescriptionInput,
      projectDetails.taskDescription
    );
    await this.actions.click(addTaskSubmitButton);

    await this.actions.validateElementVisibility(
      sprintf(taskLabelText, projectDetails.taskName)
    );
  }
}
