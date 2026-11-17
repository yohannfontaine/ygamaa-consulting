# Contributing

To contribute effectively to this project, please follow the following best practices:

For any topic (bug, new feature, etc.), please create an issue to discuss it before making any changes. Each topic should be handled in a separate branch. A simple flow like [Github flow](https://docs.github.com/en/get-started/using-github/github-flow) can be used:
- feat/num_issue_shortdescription
- fix/num_issue_shortdescription

## Pull Request Process

1. Ensure there is no inappropriate code in the merge (secrets, binaries, etc.) by using the .gitignore file.
2. Update the documentation, particularly the README.md if necessary (new properties, etc.).
3. Write commit messages and code comments in English, following [AGENTS.md](AGENTS.md).
4. Make sure `yarn test`, `yarn typecheck` and `yarn generate` pass, and that `yarn audit` reports no new vulnerability.
