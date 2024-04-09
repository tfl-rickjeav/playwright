# Playwright E2E tests

These E2E tests written in Playwright using Typescript. They use the Page Object Model and pages as fixtures. This way the tests are easy to maintain and read.

## Setting up

After cloning the repo, please run the following command to install Playwright (install [node.js](https://nodejs.org/en) first if you haven't already):

```npm i -D @playwright/test```

Then install the browsers:

```npx playwright install```

## Running the tests

- To run the test(s) headless on ALL browsers:

```npx playwright test```

- To run the test(s) headless on a specific browser (e.g. Firefox):

```npx playwright test --project=firefox```

- To run the test(s) using the Playwright UI to view the trace (you can select browsers in the UI):

```npx playwright test --ui```

## Env variables

- Environment variables can be used. Currently the Base URL is an environment variable, pointing at a testing website:

- In ```home-page.ts```, change ```this.page.goto('https://the-internet.herokuapp.com');``` to ```this.page.goto(process.env.BASE_URL);```

- and create an ```.env``` file in the root level with:
```BASE_URL="https://the-internet.herokuapp.com"```

- Then you may need to make updates the the playwright.config.ts file to be able to deal with the .env file

## Notes

- If the rest of the repo is in typescript, then the tests should be in typescript too, not C#.
- Gherkin (Cucumber/Specflow) isn't used as the code is designed to be readable. Gherkin should only be used when correctly following Behaviour Driven Development.