import { taskDetails } from "../../data/taskDetails";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import InboxPage from "../../pages/InboxPage";
import TasksApi from "../../apis/TasksApi";

describe("Todoist Tests", () => {
  it("Validate create task using API", async () => {
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const inboxPage = new InboxPage();

    await browser.url("https://todoist.com/");

    await TasksApi.createTask({ taskDetails });

    await homePage.openLoginPage();

    await loginPage.login();

    await inboxPage.openInbox();
    await inboxPage.validateTask({ taskDetails });
  });
});
