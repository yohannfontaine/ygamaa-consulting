# AGENTS.md

Instructions for AI coding agents (and humans) contributing to this repository.

## Language

- **Commit messages must be written in English**: subject line and body.
- **Code comments must be written in English**: inline comments, block
  comments, JSDoc/TSDoc, and comments in configuration files (YAML, TOML,
  `nuxt.config.ts`, workflows, etc.).
- When you modify a file that still contains comments in another language,
  translate the comments you touch into English. Do not leave mixed-language
  comment blocks behind.
- This rule does not apply to user-facing content: translations in
  `i18n/locales/*.json` and pages under `content/` stay in their own locale
  (French content stays in French, English content in English).

## Commit messages

- Follow the existing format: `:gitmoji: type: short summary`, for example
  `:bug: fix: stop the logo animation from replaying on navigation`.
- Use the imperative mood, keep the subject line under 72 characters, and
  explain the *why* in the body when the change is not self-explanatory.
- Describe the technical change itself. Do not reference internal planning
  documents, task identifiers, or review steps: this repository is public.

## Comments in code

- Explain *why* the code is the way it is, not *what* it does line by line.
- Keep comments accurate: update or delete them when the code changes.
