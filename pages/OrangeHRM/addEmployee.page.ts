import { Page, Locator } from "@playwright/test";

export class AddEmployeePage {
    readonly Page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly imageUploadInput: Locator;
    readonly saveButton: Locator;

    constructor(page: Page) {
        this.Page = page;
        this.firstNameInput = page.getByPlaceholder("First Name");
        this.lastNameInput = page.getByPlaceholder("Last Name");
        this.imageUploadInput = page.locator('input[type="file"]');
        this.saveButton = page.getByRole("button", { name: "Save" });
    }

    async fillEmployeeDetails(firstName: string, lastName: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
    }
    async uploadPhoto(photoPath: string) {
        await this.imageUploadInput.setInputFiles(photoPath);
    }

    async saveEmployee() {
        await this.saveButton.click();
    }
}