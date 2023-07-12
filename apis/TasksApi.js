import "dotenv/config";
import { TodoistApi } from "@doist/todoist-api-typescript";

export default class TasksApi {
  static async getTasks() {
    try {
      const api = new TodoistApi(process.env.API_TOKEN);
      const response = await api.getTasks();

      return response;
    } catch (error) {
      throw new Error(error);
    }
  }

  static async reopenTask({ taskId }) {
    try {
      const api = new TodoistApi(process.env.API_TOKEN);
      const response = await api.reopenTask(taskId);

      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
