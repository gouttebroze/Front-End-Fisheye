# Base de code du projet P6 - Parcours Front-end

## Liens

* Voir la [maquette](https://www.figma.com/file/Q3yNeD7WTK9QHDldg9vaRl/UI-Design-FishEye-FR?node-id=0%3A1) du projet **Fisheye**

## Repo - CI/CD

* Lien vers le repo. du code source du [projet Fisheye](https://github.com/gouttebroze/Front-End-Fisheye).

* [Fisheye on Github Pages](https://gouttebroze.github.io/Front-End-Fisheye/) (Lien vers le projet en déploiement continu).

## Dependences

* Script pour lancer une analyse des fichiers avec le linter **ESLint** (ici avec *npm*):

```shell
  npm run lint
```

* Lien vers la [documentation](https://eslint.org/docs/latest/) d'**ESLint** (version 9.14.0).

## Notes

* Les fichiers, qui contiennent les médias (images ou vidéos) de chaques photographes, sont identifiés par l'id du photographe (soit le photographerId), au lieu du nom, ce qui garantie un identifiant unique et sans doublon, ainsi qu'un chemin d'appel des médias sans erreurs (ou problèmes liés aux chaînes de charactères). Et voici la constante qui représente le chemin vers les médias de chaques photographes:

```js
const media = `assets/FishEye_Photos/medias/${photographerId}/${image || video}`;
```

## Propositions - Idées

* Concernant l'utilisation d'un linter, tel **ESLint**, il serait intéressant de partager des règles communes à suivre pour chacunes des contributions au code source du projet (configuration du linter sur les règles de syntaxes, l'utilisation de plugins...).
