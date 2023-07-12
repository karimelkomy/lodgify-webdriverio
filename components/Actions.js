export default class Actions {
  async click(element) {
    try {
      const elementFound = await this.validateElementVisibility(element);

      await elementFound.click();
    } catch (e) {
      throw new Error(`
		click failed - "${element}" element does not exist.
	    `);
    }
  }

  async fill(element, value) {
    const elementFound = await this.validateElementVisibility(element);

    await elementFound.click();
    await elementFound.clearValue();
    await elementFound.addValue(value);
  }

  async validateElementVisibility(element) {
    try {
      await $(element).waitForDisplayed();

      return await $(element);
    } catch (error) {
      const pathToScreenshot = `./screenshots/screenshot_${new Date()
        .toISOString()
        .replace(/[^\w\s]/gi, "")}.png`;

      await browser.saveScreenshot(pathToScreenshot);

      throw new Error(`${error} -  Screenshot: ${pathToScreenshot}`);
    }
  }
}
