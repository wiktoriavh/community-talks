# Contributing to community-talks

## Contributing new code to the repository

All code changes happen through pull requests. Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests.

To get started, you can clone the repository using either Git or the GitHub CLI:

- Using Git:
  ```bash
  git clone https://github.com/r-webdev/community-talks.git
  ```
- Using GitHub CLI:
  ```bash
  gh repo clone r-webdev/community-talks
  ```

This repository utilizes PNPM for package management. If you don't have PNPM installed, you can install it with `npm install -g pnpm` or check other methods of installation [here](https://pnpm.io/installation). Once PNPM is installed, you can run `pnpm install` to install all the dependencies.

### Now you can start with your contribution.

Create a new branch from the `main` branch. If you've already forked the repo, make sure to update your branch with the latest changes from `main` before making your changes. The new branch should follow the [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) naming convention. If it is in regard to an open issue or task, please include the issue number in the branch name.

Some examples of valid branch names are:
```
feat/123-add-new-feature
fix/123-fix-bug
chore/123-update-dependencies
test/123-add-new-test
```

While we recommend following Conventional Commits for the commit message, it is not mandatory. However, please make sure that the commit message is descriptive enough to understand the changes made.

If you've introduced new code that requires testing, please include relevant test cases. Ensure the test suite passes successfully. Make sure your code lints.

Create a Pull Request using [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) as your naming convention. Pull Requests should be made to the `main` branch. Be prepared to address any requested changes during the code review process.

## Reporting bugs and issues

If you find a bug or issue with the community-talks project, please open an issue using this [repository's issue tracker](https://github.com/r-webdev/community-talks/issues). When creating the issue, provide as much relevant information as possible, including:

- A clear description of the bug or issue
- Step-by-step instructions to reproduce the bug or issue
- The expected behavior
- The actual behavior you observed
- Screenshots, if applicable

**_We appreciate your contributions and feedback!_**
