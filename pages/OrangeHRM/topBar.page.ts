import { Page,Locator,expect } from "@playwright/test";

export class TopBar {

    readonly page: Page;
    readonly userdropdown: Locator;
    readonly dropdownMenu: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page){
        this.page = page;
        this.userdropdown = page.locator('.oxd-userdropdown-tab');
        this.dropdownMenu = page.locator('.oxd-dropdown-menu');
        this.logoutButton = page.getByRole('menuitem',{ name : 'Logout'})
    }

    // ouvrir le dropdown
    async openUserDropdown(){
        await this.userdropdown.click();
        await this.dropdownMenu.waitFor();
    }

    async logout(){
        await this.openUserDropdown();
        await this.logoutButton.click();
    }
}