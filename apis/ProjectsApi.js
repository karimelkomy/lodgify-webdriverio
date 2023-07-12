import "dotenv/config";
import { TodoistApi } from "@doist/todoist-api-typescript";

export default class ProjectsApi {
  static async createProject({ projectDetails }) {
    try {
      const api = new TodoistApi(process.env.API_TOKEN);
      const response = await api.addProject({
        name: projectDetails.projectName
      });

      return response;
    } catch (error) {
      throw new Error(error);
    }
  }
}
