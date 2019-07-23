# FrontEnd Web

This repository is about the web part of [Terradia](http://terradia.eu/) (terradia-frontend)

## How to push on this repository
### Commit
For the different commit, we follow the [AngularJS Commit Message Conventions](https://gist.github.com/stephenparish/9941e89d80e2bc58a153)
First, you have to add the different files that you want to push. Then use `git cz` to  commit. It will run [Commitizen](https://github.com/commitizen/cz-cli) and you'll be prompted to fill in any required fields and your commit messages will be formatted according to the standards defined by project maintainers.

See the example below.
![Add and commit with Commitizen](https://github.com/commitizen/cz-cli/raw/master/meta/screenshots/add-commit.png)

### Push & Pull Request
After your commit, you can push on your branch and squash all your commit before creating your pull request. It allows to Github to set automatically the comments that you have added with commitizen. 
Don't forget to request at least one others group's members as a reviewer for your pull request.
When you have verified all your informations, you can create the pull request.

All the pull request have to be from your branch towards dev. **Every pull request towards master  will be rejected.**
