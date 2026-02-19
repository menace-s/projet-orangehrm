import { test, expect } from "@playwright/test";
import { LoginPage } from "../../pages/OrangeHRM/loginPage.page";
import { CREDENTIALS } from "../../conf/credentials";
import { TopBar } from "../../pages/OrangeHRM/topBar.page";

test.describe("Tests de connexion OrangeHRM", () => {
  let loginPage: LoginPage;
  let topBar: TopBar;

  test.beforeEach(async ({ page }, testInfo) => {
    testInfo.setTimeout(testInfo.timeout + 30_000);
    loginPage = new LoginPage(page);
    topBar = new TopBar(page);
    // Navigation avant chaque test
    await loginPage.goto();
  });

  test("TC01 - Connexion avec identifiants valides", async ({ page }) => {
    await loginPage.login(
      CREDENTIALS.admin.username,
      CREDENTIALS.admin.password,
    );

    // Attendre que l'URL change
    await page.waitForURL("**/dashboard/**");
    expect(page.url()).toContain("/web/index.php/dashboard/index");

    //timeout pour voir le résultat
    await page.waitForTimeout(5000);
    await topBar.logout();
    await page.waitForURL("**/web/index.php/auth/login");
  });

  // test('TC02 - Connexion avec mot de passe incorrect', async ({ page }) => {
  //     // À compléter
  //     await loginPage.login(CREDENTIALS.invalidAdmin.username, CREDENTIALS.invalidAdmin.password);
  //     await page.waitForTimeout(1000); // Attendre un peu pour que le message d'erreur s'affiche
  //     expect(page.getByText('Invalid credentials')).toBeTruthy();
  // });
});
