import { Page, test } from "@playwright/test";

const pageInstances = new Map<string, Page>();

export function setPage(page: Page, testId: string) {
  console.log(`✅ [globalPageContext] Storing page for test ${testId}`);
  pageInstances.set(testId, page);
}

export function getPage(): Page {
    const testId = test.info().testId;
    console.log(`🔍 [globalPageContext] Retrieving page for test ${testId}`);
  
    if (!pageInstances.has(testId)) {
    //   console.error(`❌ [globalPageContext] ERROR: No page found for test ${testId}!`);
    //   console.error(`🚨 [globalPageContext] Possible causes: 
    //     1️⃣ setPage() didn't run before this test.
    //     2️⃣ The test isn't using the correct test fixture.
    //     3️⃣ getPage() is running too early due to module execution order.`);
    }
  
    const page = pageInstances.get(testId);
    if (!page) {
      console.error("🚨 [globalPageContext] getPage() returned undefined!");
      throw new Error("Page is not set. Call setPage(page) first.");
    }
  
    console.log(`✅ [globalPageContext] Successfully retrieved page for test ${testId}`);
    return page;
  }
  

export function clearPage(testId: string) {
  console.log(`🗑️ [globalPageContext] Clearing page for test ${testId}`);
  pageInstances.delete(testId);
}