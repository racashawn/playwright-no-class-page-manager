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
