import { getPage } from "../globalPageContext";

export async function navigateToHomepage() {
   
    console.log("✅ [HomePage] Successfully retrieved page, navigating...");
    await getPage().goto("https://playwright.dev/");
}