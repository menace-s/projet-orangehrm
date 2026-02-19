import { Page, Locator } from "@playwright/test";


export class SideMenuPage {

    readonly page: Page;
    readonly pimMenu: Locator;

    constructor(page: Page) {
        this.page = page;
        this.pimMenu = page.getByRole("link", { name: "PIM" });
    }

    async navigateToPIM() {
        await this.pimMenu.click();
    }
}