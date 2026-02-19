import { Page, Locator } from "@playwright/test";

export class PimListPage {

    readonly Page: Page;
    readonly addEmployeeButton: Locator;

    constructor(page: Page) {
        this.Page = page;
        this.addEmployeeButton = page.getByRole("button", { name: "Add" });
    }

    async navigateToAddEmployee() {
        await this.addEmployeeButton.click();
    }
}