import { test as base, Page } from "@playwright/test";
import { setPage } from "./globalPageContext";

export const test = base.extend<{ page: Page }>({
  page: async ({ browser }, use) => {
    const page = await browser.newPage();
    console.log("🔥 [setup.ts] Creating new page instance");
    await use(page);
  },
});

test.beforeEach(async ({ page }) => {
  console.log(`🔥 [setup.ts] Before each test: Ensuring setPage is called FIRST`);
  
  // Explicitly wait before setting the page, ensuring proper order
  await new Promise(resolve => setTimeout(resolve, 10)); 

  setPage(page);
  console.log(`✅ [setup.ts] Page set successfully for test: ${test.info().title}`);
});

// Don't use this, it clears the page before the test is done
// test.afterEach(async () => {
//   console.log(`🧹 [setup.ts] After each test: Clearing page instance`);
  
//   // Ensure the page is actually cleared
//   clearPage();

//   // Debugging: Verify no test holds a stale page reference
//   try {
//     getPage();
//     console.warn("⚠️ [setup.ts] getPage() unexpectedly returned a page after clearPage()");
//   } catch (error) {
//     console.log("✅ [setup.ts] getPage() correctly throws an error after clearPage()");
//   }
// });