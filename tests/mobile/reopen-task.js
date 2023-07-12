import HomeScreen from "../../screens/HomeScreen";
import LoginScreen from "../../screens/LoginScreen";
import AppScreen from "../../screens/AppScreen";
import MenuScreen from "../../screens/MenuScreen";
import { projectDetails } from "../../data/projectDetails";
import ProjectScreen from "../../screens/ProjectScreen";
import TasksApi from "../../apis/TasksApi";

describe("Todoist Tests", () => {
  it("Validate reopen task", async () => {
    const homeScreen = new HomeScreen();
    const loginScreen = new LoginScreen();
    const appScreen = new AppScreen();
    const menuScreen = new MenuScreen();
    const projectScreen = new ProjectScreen();

    const response = await TasksApi.getTasks();
    const task = response.filter(
      task => task.content === projectDetails.taskName
    )[0];

    await homeScreen.openLoginScreen();
    await loginScreen.login();
    await appScreen.openMenuScreen();
    await menuScreen.openProject({ projectDetails });
    await projectScreen.markTaskAsCompleted({ projectDetails });

    await TasksApi.reopenTask({ taskId: task.id });

    await appScreen.openMenuScreen();
    await menuScreen.openProject({ projectDetails });
    await projectScreen.validateTask({ projectDetails });
  });
});
