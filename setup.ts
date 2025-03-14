import { test as base, Page } from "@playwright/test";
import { setPage, clearPage } from "./globalPageContext";

export const test = base.extend<{ page: Page }>({
  page: async ({ page }, use, testInfo) => {
    await use(page);
  },
});

// 🔥 Ensures `setPage()` runs before every test
test.beforeEach(async ({ page }, testInfo) => {
  const testId = testInfo.testId; // ✅ Correct way to get test ID
  console.log(`🔥 [setup.ts] Explicit beforeEach: setPage() runs for test ${testId}`);
  setPage(page, testId);
});

// 🧹 Ensures `clearPage()` runs after every test
test.afterEach(async ({},testInfo) => {
  const testId = testInfo.testId;
  console.log(`🧹 [setup.ts] Explicit afterEach: clearPage() runs for test ${testId}`);
  clearPage(testId);
});