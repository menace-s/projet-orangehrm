export class LoginPage {
    constructor(page) {
        this.page = page;

        // Sélecteurs (locators) - à compléter
        this.usernameInput = page.getByRole("textbox", { name: "Username" });
        this.passwordInput = page.getByRole("textbox", { name: "Password" });
        this.loginButton = page.getByRole("button", { name: "Login" });
    }

    // Actions - à compléter
    async goto() {
        // Navigation vers la page de login
        await this.page.goto('/web/index.php/auth/login')
    }

    async login(username, password) {
        // Se connecter avec username et password
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    // Vérifications - à compléter
    async getErrorMessage() {
        // Récupérer le message d'erreur
    }
}
