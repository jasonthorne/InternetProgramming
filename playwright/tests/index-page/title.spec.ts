import {test} from '@playwright/test'
import {Title} from '../../pages/index-page/title'
import {url} from '../../data/page-data/index-page-data';

let title: Title;

test.beforeEach(async({page})=>{
    await page.goto(url);
    title = new Title(page); 
});

test.describe('Testing Index Page Title', ()=>{
    test('Asserting Page Title', async()=>{
        await title.assertPageTitle();
    });
});