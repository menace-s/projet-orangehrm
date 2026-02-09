# Supprimer le fichier de test exemple
rm tests/example.spec.js
```

Ou garde-le pour référence.

---

## RÉCAPITULATIF DE LA STRUCTURE

### Organisation logique
```
📦 projet-orangehrm
│
├── 📁 tests/              ← TES TESTS (ce que tu veux tester)
│   └── 📁 auth/
│       └── login.spec.js  ← Tests de connexion
│
├── 📁 pages/              ← PAGE OBJECTS (comment interagir avec les pages)
│   ├── LoginPage.js       ← Actions sur la page de login
│   └── DashboardPage.js   ← Actions sur le dashboard
│
├── 📁 helpers/            ← UTILITAIRES (données et fonctions)
│   ├── testData.js        ← Données de test (users, etc.)
│   └── utils.js           ← Fonctions utiles
│
└── ⚙️ playwright.config.js ← CONFIGURATION (paramètres globaux)
```

---

## BONNES PRATIQUES DE STRUCTURE

### ✅ À FAIRE

1. **Un dossier par fonctionnalité** dans `tests/`
```
   tests/auth/, tests/admin/, tests/pim/
```

2. **Un fichier par page** dans `pages/`
```
   LoginPage.js, DashboardPage.js, AdminPage.js
```

3. **Nommer clairement les fichiers**
```
   login.spec.js (pas test1.spec.js)
   LoginPage.js (pas page1.js)
```

4. **Séparer données et logique**
```
   Données dans helpers/testData.js
   Logique dans tests/*.spec.js
```

---

### ❌ À ÉVITER

1. **Tout mettre dans un seul fichier**
```
   ❌ all-tests.spec.js avec 500 lignes
```

2. **Mélanger tests et Page Objects**
```
   ❌ test et classe LoginPage dans le même fichier
```

3. **Hardcoder les données dans les tests**
```
   ❌ await login('Admin', 'admin123') partout
   ✅ await login(validUsers.admin.username, validUsers.admin.password)
```

4. **Ne pas organiser par fonctionnalité**
```
   ❌ test1.js, test2.js, test3.js
   ✅ auth/login.js, admin/users.js