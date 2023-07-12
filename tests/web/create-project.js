import ProjectsApi from "../../apis/ProjectsApi";
import { projectDetails } from "../../data/projectDetails";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import AppPage from "../../pages/AppPage";

describe("Todoist Tests", () => {
  it("Validate create project", async () => {
    await browser.url("https://todoist.com/");

    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const appPage = new AppPage();

    const response = await ProjectsApi.createProject({ projectDetails });

    await expect(response.name).toEqual(projectDetails.projectName);

    await homePage.openLoginPage();
    await loginPage.login();
    await appPage.validateProject({ projectDetails });
  });
});
