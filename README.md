# Playwright Boilerplate Functional Approach

This repository contains a boilerplate for setting up end-to-end testing using Playwright with a functional approach. 

## Features

- Comprehensive Playwright setup
- Functional approach to writing tests
- Easy to extend and customize

## Setup and Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/racashawn/playwright-boilerplate-functional-approach.git
   ```

2. **Navigate to the project directory:**
   ```bash
   cd playwright-boilerplate-functional-approach
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

## Usage

- **Run tests:**
  ```bash
  npm test
  ```

## Page Object Model

The `Page` object from Playwright is provided to the page objects through a global context. Here's how it is implemented:

1. **Global Page Context (`globalPageContext.ts`)**:
   The `globalPageContext.ts` file manages the current `Page` instance. It provides functions to set, get, and (optionally) clear the `Page` instance.
   
   ```typescript
   import { Page } from "@playwright/test";

   let currentPage: Page | null = null;

   export function setPage(page: Page) {
     console.log(`✅ setPage() called with a new page instance`);
     currentPage = page;
   }

   export function getPage(): Page {
     if (!currentPage) {
       throw new Error("🚨 No active page instance found! Ensure 'setPage()' is called before accessing the page.");
     }
     return currentPage;
   }
   ```

2. **Setup (`setup.ts`)**:
   The `setup.ts` file extends the Playwright test with a custom fixture that sets up a new `Page` instance before each test. This page instance is then set in the global context using `setPage(page)`.
   
   ```typescript
   import { test as base, Page } from "@playwright/test";
   import { setPage } from "./globalPageContext";

   export const test = base.extend<{ page: Page }>({
     page: async ({ browser }, use) => {
       const page = await browser.newPage();
       console.log("🔥 [setup.ts] Setting up new page instance");
       setPage(page); // ✅ Ensures the page is globally available
       await use(page);
     },
   });

   test.beforeEach(async ({ page }) => {
     console.log(`🔥 [setup.ts] Before each test: Setting page instance`);
     setPage(page); // ✅ Ensures the page is globally available before each test runs
   });
   ```

3. **Page Objects**:
   The page objects use the `getPage` function from the global context to access the current `Page` instance. Here are a few examples:

   - **Home Page (`homePage.ts`)**:
     ```typescript
     import { getPage } from "../globalPageContext";

     export async function navigateToHomepage() {
         await getPage().goto("https://playwright.dev/");
     }
     ```

   - **Get Started Page (`getStartedPage.ts`)**:
     ```typescript
     import { expect } from "@playwright/test";
     import { getPage } from "../globalPageContext";

     const navbarApi = () => getPage().getByRole("link", { name: "API", exact: true });

     export async function getStarted() {
       await getPage().getByRole("link", { name: "Get started" }).click();
     }

     export async function clickAllLinks() {
       await getPage().getByRole("link", { name: "Introduction", exact: true }).click();
       await getPage().getByRole("link", { name: "Installing Playwright", exact: true }).click();
       await getPage().getByRole("link", { name: "What's Installed" }).nth(2).click();
       await getPage().getByRole("link", { name: "Running the Example Test", exact: true }).click();
       await expect(getPage().getByRole("img", { name: "tests running in command line" })).toBeVisible();
     }

     export async function clickApiLink() {
       await navbarApi().click();
     }
     ```

   - **API Page (`apiPage.ts`)**:
     ```typescript
     import { expect } from "@playwright/test";
     import { getPage } from "../globalPageContext";

     const navbarHeading = () => getPage().getByRole("heading", { name: "Playwright Library" });
     const properties = () => ({
       chromium: () => getPage().getByRole("link", { name: "chromium", exact: true }),
       device: () => getPage().getByRole("link", { name: "devices", exact: true }),
       errors: () => getPage().getByRole("link", { name: "errors", exact: true }),
       firefox: () => getPage().getByRole("link", { name: "firefox", exact: true }),
       request: () => getPage().getByRole("link", { name: "request", exact: true }),
       selectors: () => getPage().getByRole("link", { name: "selectors", exact: true }),
       webkit: () => getPage().getByRole("link", { name: "webkit", exact: true }),
     });

     export async function isOnApiPage() {
       await navbarHeading().waitFor({ state: "attached" });
       await navbarHeading().waitFor({ state: "visible" });
       await expect(navbarHeading()).toBeVisible();
     }

     export async function clickChromium() {
       await properties().chromium().click();
     }
     export async function clickAllPropertiesLinks() {
       await properties().chromium().click();
       await properties().device().click();
       await properties().errors().click();
       await properties().firefox().click();
       await properties().request().click();
       await properties().selectors().click();
       await properties().webkit().click();
     }
     ```

## Contributing

Feel free to open issues or submit pull requests for any improvements or bug fixes.
