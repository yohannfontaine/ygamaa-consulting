# Y-GAMAA Consulting Website

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Deployment](#deployment)
- [Seasonal theme](#seasonal_theme)
- [Security](#security)
- [Built Using](#built_using)
- [Contributing](CONTRIBUTING.md)
- [Code of conduct](CODE_OF_CONDUCT.md)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

This is the website of Y-GAMAA Consulting, a small software engineering company: <https://ygamaa-consulting.fr>.

It is a fully static, bilingual (French / English) site built with Nuxt 4 and prerendered with `nuxt generate`. There is no backend: pages, legal notices and use cases are all generated at build time.

Feel free to have a look around as the code is open source and use anything that could help you. If you see any bugs or improvements, your feedback is welcome.

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

- [Node.js](https://nodejs.org/) **22.22.3+** (or 24.15+), as required by Nuxt 4
- [Yarn 1](https://classic.yarnpkg.com/) — the project is locked with `yarn.lock` and relies on its `resolutions` field, so use Yarn rather than npm or pnpm

```
# macOS with Homebrew
brew install node@22
corepack enable

# check the installation
node --version
yarn --version
```

### Configuration

The configuration of the project is located in `nuxt.config.ts`. The public site URL (`i18n.baseUrl`) is used to build canonical, `hreflang` and Open Graph URLs.

### Install dependencies

```
yarn install --frozen-lockfile
```

### Run the project

Development server on <http://localhost:3000>:

```
yarn dev -o
```

Checks run by the CI:

```
yarn test        # unit tests (Vitest)
yarn typecheck   # vue-tsc
```

Static build, then local preview of `.output/public`:

```
yarn generate
npx serve .output/public
```

## 🚀 Deployment <a name = "deployment"></a>

The CI/CD runs on GitHub Actions and deploys to Firebase Hosting:

- every pull request is tested, built and deployed to a Firebase preview channel;
- every push to `main` is tested, built and deployed to production.

The website is available at <https://ygamaa-consulting.fr>.

HTTP security headers (Content Security Policy, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) and cache headers are defined in `firebase.json`.

The production workflow can also be started by hand from the Actions tab (**Run workflow**, on `main` only), to redeploy without a commit.

## 🎄 Seasonal theme <a name = "seasonal_theme"></a>

The header logo can wear a small seasonal decoration, for instance a Christmas hat with a few snowflakes. It is chosen at build time, so the site stays fully static.

**Turn it on or off**

1. In the repository settings, under *Secrets and variables → Actions → Variables*, set `SEASONAL_THEME` to a theme id (`noel`), or empty it to turn the decoration off.
2. Redeploy: *Actions → Deploy to Firebase Hosting on merge → Run workflow* on `main`.

Case, accents and spaces are ignored (`Noël` works); an unknown value means no decoration rather than a failed build.

Locally, pass the same setting through `NUXT_PUBLIC_SEASONAL_THEME`, on the command line or in a `.env` file:

```
NUXT_PUBLIC_SEASONAL_THEME=noel yarn dev
```

**Add a theme**

1. Add its id to `SEASONAL_THEMES` in `composables/useSeasonalTheme.ts`.
2. Draw it in a new component under `components/seasonal/`, which receives the anchors computed by the logo (`top` for a hat, `area` for ambient effects).
3. Register it in the table of `components/seasonal/SeasonalDecor.vue`. `yarn typecheck` fails until this is done.

## 🔒 Security <a name = "security"></a>

Dependencies are monitored by Dependabot (`.github/dependabot.yml`); run `yarn audit` to check them locally.

To report a vulnerability, please email <contact@ygamaa-consulting.fr> rather than opening a public issue.

## ⛏️ Built Using <a name = "built_using"></a>

- [Vue 3](https://vuejs.org) - The progressive JavaScript framework
- [Nuxt 4](https://nuxt.com) - The Vue framework, used here for static site generation
- [Nuxt Content](https://content.nuxt.com) - Markdown content (legal notices)
- [Nuxt I18n](https://i18n.nuxtjs.org) - French and English versions of the site
- [Sass](https://sass-lang.com) - Styles and design tokens
- [Firebase Hosting](https://firebase.google.com/docs/hosting) - To host this static site

## ✍️ Contributing <a name = "contributing"></a>

The project is available in open source. All contributions are welcome, and the goal is to incrementally enrich it over time.

Please read the [contribution instructions](CONTRIBUTING.md), the [code of conduct](CODE_OF_CONDUCT.md) and the [instructions for coding agents](AGENTS.md): commit messages and code comments are written in English.

---

### Made with ❤️ by: [Yohann Fontaine](https://github.com/yohannfontaine) <a name = "authors"></a>
