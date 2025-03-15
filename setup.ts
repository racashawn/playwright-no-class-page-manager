import { test as base, Page } from "@playwright/test";
import { clearPage, setPage } from "./globalPageContext";

export const test = base.extend<{ page: Page }>({
  page: async ({ browser }, use) => {
    const page = await browser.newPage();
    console.log("🔥 [setup.ts] Setting up new page instance");
    await use(page);
  },


});

test.beforeEach(async ({ page }) => {
  console.log(`🔥 [setup.ts] Creating new page for test: ${test.info().title}`);
  setPage(page);
});

test.afterEach(async () => {
  console.log("🧹 [setup.ts] Cleaning up after test.");
  clearPage();
});
