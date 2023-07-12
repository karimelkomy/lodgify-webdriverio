import Actions from "../components/Actions";
import LeftMenuSidebar from "../components/LeftMenuSidebar";

export default class AppPage {
  constructor() {
    this.actions = new Actions();
    this.leftMenuSidebar = new LeftMenuSidebar();
  }

  async validateProject({ projectDetails }) {
    await this.leftMenuSidebar.validateProjectName({ projectDetails });
  }
}
