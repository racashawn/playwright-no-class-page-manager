import { getPage } from "../globalPageContext";



export async function navigateToHomepage() {
    await getPage().goto("https://playwright.dev/");
}

