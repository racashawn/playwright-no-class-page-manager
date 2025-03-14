import {test} from '../setup'; 
import * as homePage from '../page-objects/homePage';
import { getPage } from '../globalPageContext';

test('has title', async () => {
  await homePage.navigateToHomepage();
  await getPage().pause();
});
