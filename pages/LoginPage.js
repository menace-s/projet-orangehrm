export class LoginPage {
    constructor(page) {
        this.page = page;

        // Sélecteurs (locators) - à compléter
        this.usernameInput = page.getByRole("textbox", { name: "Username" });
        this.passwordInput = page.getByRole("textbox", { name: "Password" });
        // this.usernameInput = page.getByPlaceholder('Username');
        // this.passwordInput = page.getByPlaceholder('Password');
        this.loginButton = page.getByRole("button", { name: "Login" });
    }

    // Actions - à compléter
    async goto() {
        // Navigation vers la page de login
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        // await this.page.goto('https://mon-portfolio-aganh-kola.vercel.app/');
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
