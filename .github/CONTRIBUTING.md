# Contributing to community-talks

## Code changes happen through Pull Requests

All code changes happen through pull requests. Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests.

You can clone the repository by using git or gh cli:

- git
  ```bash
  git clone https://github.com/r-webdev/community-talks.git
  ```
- gh cli
  ```bash
  gh repo clone r-webdev/community-talks
  ```

This repository uses PNPM for package management. If you don't have PNPM installed, you can install it with `npm install -g pnpm` or check other ways of installing it [here](https://pnpm.io/installation). Once installed, you can run `pnpm install` to install all the dependencies.

### Now you can start with your contribution.

1. Create your branch from `main`.
   - If you've already forked the repo, make sure to update your branch with the latest changes from `main` before making your changes.
   - Branches should follow the [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) naming convention.
2. If you've added code that should be tested, add tests.
   - Ensure the test suite passes.
3. If you've changed APIs, update the documentation.
4. Make sure your code lints.
5. Create a Pull Request using [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/) as your naming convention.
   - Pull Requests should be made to the `main` branch.
   - Be ready to make changes when requested after the code review.

## Reporting bugs and issues

If you find a bug or issue with the community-talks project, please open an issue using this [repository's issue tracker](https://github.com/r-webdev/community-talks/issues). Please include as much information as possible, including:

- A description of the bug or issue
- Steps to reproduce the bug or issue
- Expected behavior
- Actual behavior
- Screenshots, if applicable
