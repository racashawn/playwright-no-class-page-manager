import { test } from "../setup";
import * as homePage from "../page-objects/homePage";
import * as getStartedPage from "../page-objects/getStartedPage";
import * as apiPage from "../page-objects/apiPage";

test("test1", async () => {
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickAllLinks();
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickAllLinks();
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickAllLinks();
});

test("test2", async () => {
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickAllLinks();
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickAllLinks();
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickAllLinks();
});

test("test3", async () => {
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickApiLink();
  await apiPage.isOnApiPage();
  await apiPage.clickChromium();
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickApiLink();
  await apiPage.isOnApiPage();
  await apiPage.clickChromium();
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickApiLink();
  await apiPage.isOnApiPage();
  await apiPage.clickChromium();
});
