# Application CRUD Students

## Description
Cette application est une interface CRUD (Create, Read, Update, Delete) pour gérer des étudiants. Elle est développée en React avec Redux et utilise `redux-thunk` pour la gestion des actions asynchrones. Un backend simulé avec `json-server` est utilisé pour interagir avec une base de données JSON.

## Structure du projet
Le projet est divisé en deux dossiers principaux :
- **frontend** : contient le code source React.
- **backend** : contient le fichier `db.json` utilisé par `json-server` pour simuler une API REST.

## Prérequis
- Node.js (version 12+)
- npm ou yarn

## Installation

1. Cloner le dépôt :
    ```bash
    git clone https://github.com/Pierre501/Crud-react-with-redux-thunk.git
    cd Crud-react-with-redux-thunk

    ```

2. Installer les dépendances pour le frontend :
    ```bash
    cd frontend
    npm install
    ```

3. Installer `json-server` pour simuler une API :
    ```bash
    npm install -g json-server
    ```

## Exécution

### Frontend
Dans le dossier `frontend`, exécutez la commande suivante pour démarrer l'application React :
```bash
npm start

### Backend
Dans le dossier `backend`, lancez le serveur JSON en exécutant la commande suivante :
json-server --watch db.json --port 5000

L'API sera accessible à l'adresse suivante : `http://localhost:5000/students`.
