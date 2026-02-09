import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { validUsers, invalidUsers } from '../../helpers/testData';

test.describe('Tests de connexion OrangeHRM', () => {
    
    let loginPage;
    
    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        // Navigation avant chaque test
        await loginPage.goto();
    });
    
    test('TC01 - Connexion avec identifiants valides', async ({ page }) => {
        await loginPage.login(validUsers.admin.username, validUsers.admin.password);
        // Attendre que l'URL change
        await page.waitForURL('**/dashboard/**');
        expect(page.url()).toContain('/web/index.php/dashboard/index');
    });
    
    test('TC02 - Connexion avec mot de passe incorrect', async ({ page }) => {
        // À compléter
        await loginPage.login(invalidUsers.wrongPassword.username, invalidUsers.wrongPassword.password);
        await page.waitForTimeout(1000); // Attendre un peu pour que le message d'erreur s'affiche
        expect(page.getByText('Invalid credentials')).toBeTruthy();
    });
    
});