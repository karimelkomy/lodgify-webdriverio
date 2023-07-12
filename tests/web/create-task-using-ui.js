import { projectDetails } from "../../data/projectDetails";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import ProjectPage from "../../pages/ProjectPage";
import TasksApi from "../../apis/TasksApi";

describe("Todoist Tests", () => {
  it("Validate create task using UI", async () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const projectPage = new ProjectPage();

    await browser.url("https://todoist.com/");

    await homePage.openLoginPage();

    await loginPage.login();

    await projectPage.openProject({ projectDetails });

    await projectPage.createTask({ projectDetails });

    const response = await TasksApi.getTasks();

    const containsTask = response.some(
      task => task.content === projectDetails.taskName
    );

    await expect(containsTask).toBeTruthy();
  });
});
