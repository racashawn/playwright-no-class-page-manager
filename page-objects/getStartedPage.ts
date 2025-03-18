import { expect } from "@playwright/test";
import { getPage } from "../globalPageContext";

const navbarApi = () => getPage().locator('a[href="/docs/api/class-playwright"]');

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
  await navbarApi().waitFor({ state: "attached" });
  await navbarApi().waitFor({ state: "visible" });
  await navbarApi().click();
}
