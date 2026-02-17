#!/bin/bash

NOM_DU_FICHIER=$1

if [ -z "$NOM_DU_FICHIER" ]; then
    echo "Erreur : Vous devez spécifier un fichier de test."
    echo "Usage : sh scripts/playwright_launch_test.bash <nom_du_fichier.spec.ts>"
    exit 1
fi

echo "======================================================="
echo "Lancement du test : $NOM_DU_FICHIER"
echo "Dossier cible : specs/OrangeHRM/"
echo "======================================================="

npx playwright test "specs/OrangeHRM/$NOM_DU_FICHIER" \
    --reporter=html \
    --headed

STATUT=$?
if [ $STATUT -eq 0 ]; then
    echo "Test réussi : $NOM_DU_FICHIER"
else
    echo "Test échoué : $NOM_DU_FICHIER"
    exit 1
fi