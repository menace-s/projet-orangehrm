/**
 * Génère un ID d'employé aléatoire composé uniquement de chiffres.
 * Exemple de sortie : "482910"
 */
export function generateRandomEmployeeId(): string {
    // Math.random() génère un chiffre entre 0 et 1.
    // Cette formule mathématique garantit qu'on obtient toujours un nombre entre 100000 et 999999.
    const randomNumber = Math.floor(Math.random() * 900000) + 100000;
    
    // On le convertit en chaîne de caractères (string) pour Playwright
    return randomNumber.toString();
}