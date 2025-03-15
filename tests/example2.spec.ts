import { test } from "../setup";
import * as homePage from "../page-objects/homePage";
import * as getStartedPage from "../page-objects/getStartedPage";
import * as apiPage from "../page-objects/apiPage";
import { getPage } from "../globalPageContext";

test("test1", async () => {
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

test("test2", async () => {
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickApiLink();
  //   await getPage().pause()
  await apiPage.isOnApiPage();
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickApiLink();
  //   await getPage().pause()
  await apiPage.isOnApiPage();
  await homePage.navigateToHomepage();
  await getStartedPage.getStarted();
  await getStartedPage.clickApiLink();
  //   await getPage().pause()
  await apiPage.isOnApiPage();
  await apiPage.clickAllPropertiesLinks();
});
