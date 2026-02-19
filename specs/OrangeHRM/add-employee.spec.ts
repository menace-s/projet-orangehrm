import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/OrangeHRM/loginPage.page";
import { TopBar } from "../../pages/OrangeHRM/topBar.page";
import { SideMenuPage } from "../../pages/OrangeHRM/sideMenu.page";
import { CREDENTIALS } from "../../conf/credentials";
import { PimListPage } from "../../pages/OrangeHRM/PimListPage.page";
import { AddEmployeePage } from "../../pages/OrangeHRM/addEmployee.page";
import { Employee } from "../../utils/testData";

test.describe("Tests d'ajout d'employé OrangeHRM", () => {
  let loginPage: LoginPage;
  let topBar: TopBar;
  let sideMenu: SideMenuPage;
  let addEmployeePage: AddEmployeePage;
  let pimListPage: PimListPage;

  test.beforeEach(async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 60_000);
    loginPage = new LoginPage(page);
    sideMenu = new SideMenuPage(page);
    pimListPage = new PimListPage(page);
    addEmployeePage = new AddEmployeePage(page);
    loginPage.goto();
    await loginPage.login(
      CREDENTIALS.admin.username,
      CREDENTIALS.admin.password,
    );
    await page.waitForURL("**/dashboard/**");
    await sideMenu.navigateToPIM();
    await pimListPage.navigateToAddEmployee();
  });

  test("TC03 - Ajouter un employé avec des informations valides", async ({
    page,
  }) => {
    await addEmployeePage.fillEmployeeDetails(Employee.firstName, Employee.lastName);
    await addEmployeePage.saveEmployee();
    await page.waitForTimeout(5000);
    // verification du toast de succès
    await expect(page.getByText("Successfully Saved")).toBeVisible();
  });
  // test avec ajout de photo d'employé
  test("TC04 - Ajouter un employé avec une photo", async ({ page }) => {
    await addEmployeePage.fillEmployeeDetails(Employee.firstName, Employee.lastName);
    await addEmployeePage.uploadPhoto("data/images/photo.jpg");
    await addEmployeePage.saveEmployee();
    await page.waitForTimeout(5000);
    await expect(page.getByText("Successfully Saved")).toBeVisible();
});
});