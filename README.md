# SAS Progress Console

## Présentation
**SAS Progress Console** est une application JavaScript exécutée dans la console avec Node.js. Elle permet de gérer des apprenants fictifs et leurs résultats journaliers, calculer leur progression et afficher un tableau de bord pédagogique.

## Structure du projet
```text
SAS-PROJET-FINALE/
├── README.md
├── data.js
├── function.js
├── main.js
├── package.json
├── package-lock.json
└── .gitignore
```

- `data.js` : données des apprenants.
- `function.js` : fonctions principales de l'application.
- `main.js` : menu principal et interaction avec l'utilisateur.
- `package.json` : configuration du projet.

## Structure des données
```js
{
  id: 1,
  nom: "Sara Dev",
  ville: "Nador",
  resultats: [
    {
      jour: 1,
      exercicesTermines: 18,
      totalExercices: 20,
      challengeTermine: true
    }
  ]
}
```

Un résultat contient le numéro du jour (1 à 7), le nombre d'exercices terminés, le nombre total d'exercices proposés et un booléen indiquant si le challenge est terminé.

## Fonctionnalités
- Afficher le tableau de bord
- Afficher la liste des apprenants
- Ajouter un apprenant sans accepter deux fois le même identifiant
- Consulter un apprenant par identifiant
- Ajouter ou modifier le résultat d'une journée
- Rechercher un apprenant par ID ou par nom
- Filtrer les apprenants par niveau
- Trier les apprenants par progression décroissante
- Trier les apprenants par ordre alphabétique

## Calcul de la progression
```text
Progression = (total des exercices terminés / total des exercices proposés) × 100
```

Si le total proposé est égal à `0`, la progression reste à `0` afin d'éviter une division par zéro.

| Progression | Niveau |
|---|---|
| 80 % ou plus | Solide |
| 50 % à moins de 80 % | En progression |
| Moins de 50 % | À renforcer |

Le programme calcule aussi le nombre de challenges terminés et le nombre de journées renseignées.

## Données absentes
Une journée absente du tableau `resultats` est une **journée non renseignée**. Une journée présente avec `challengeTermine: false` correspond à un **challenge non terminé**. Ces deux situations sont distinguées dans le tableau de bord.

## Validation des données
Le programme vérifie que le jour est compris entre 1 et 7, que les nombres d'exercices sont valides, que les exercices terminés ne dépassent pas le total proposé et que `challengeTermine` est un booléen. Il empêche également l'ajout de deux apprenants avec le même identifiant.

Lorsqu'un résultat existe déjà pour une journée, il est remplacé au lieu d'être dupliqué.

## Tableau de bord
Le tableau de bord affiche le nombre total d'apprenants, la progression moyenne du groupe, le nombre de profils **Solide**, **En progression** et **À renforcer**, la progression des apprenants, les journées sans résultat et les challenges non terminés.

La moyenne du groupe est calculée à partir des progressions individuelles des apprenants.

## Lancement
```bash
node main.js
```

## Scénarios de test
1. Ajouter un apprenant valide et vérifier qu'il peut être retrouvé.
2. Essayer un identifiant déjà utilisé et vérifier que l'ajout est refusé.
3. Ajouter puis modifier le résultat d'une même journée et vérifier qu'il est remplacé.
4. Tester un jour hors de 1 à 7 ou trop d'exercices terminés et vérifier que le résultat est refusé.
5. Rechercher un apprenant par identifiant ou par tout ou partie de son nom.
6. Vérifier le calcul de la progression, des challenges terminés et des journées renseignées.

## Technologies utilisées
- JavaScript
- Node.js
- ES Modules
- prompt-sync
