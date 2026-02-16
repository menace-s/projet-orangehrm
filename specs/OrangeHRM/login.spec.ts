import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/OrangeHRM/LoginPage';
import { validUsers, invalidUsers } from '../../utils/testData';
import { CREDENTIALS } from '../../conf/credentials';

test.describe('Tests de connexion OrangeHRM', () => {
    
    let loginPage: LoginPage;
    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        // Navigation avant chaque test
        await loginPage.goto();
    });
    
    test('TC01 - Connexion avec identifiants valides', async ({ page }) => {
        await loginPage.login(CREDENTIALS.admin.username, CREDENTIALS.admin.password);
        // Attendre que l'URL change
        await page.waitForURL('**/dashboard/**');
        expect(page.url()).toContain('/web/index.php/dashboard/index');
    });
    
    test('TC02 - Connexion avec mot de passe incorrect', async ({ page }) => {
        // À compléter
        await loginPage.login(CREDENTIALS.invalidAdmin.username, CREDENTIALS.invalidAdmin.password);
        await page.waitForTimeout(1000); // Attendre un peu pour que le message d'erreur s'affiche
        expect(page.getByText('Invalid credentials')).toBeTruthy();
    });
    
});