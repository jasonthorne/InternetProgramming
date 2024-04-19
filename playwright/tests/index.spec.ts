import {test} from '@playwright/test';
import {IndexPage} from '../pages/index-page';
import {indexPageData} from '../data/index-page-data';
import {teamData} from '../data/team-data';

let indexPage: IndexPage;

test.beforeEach(async({page})=>{
    await page.goto(indexPageData.url);
    indexPage = new IndexPage(page);
});

test.describe('Testing Index Page Title', ()=>{
    test('Assert page title', async()=>{
        await indexPage.assertPageTitle(indexPageData.title);
    });
});

test.describe('Testing Index Page Navbar', ()=>{

    test('Assert navbar logo', async()=>{
        //grab logo vars:
        const logoId: string = indexPageData.navbar.logo.id;
        const logoImgAlt: string = indexPageData.navbar.logo.img.alt;
        const logoImgSrc: string = indexPageData.navbar.logo.img.src;
        const logoText: string = indexPageData.navbar.logo.span.text;

        //assert logo image is visible:
        await indexPage.assertImgIsVisible(logoId, logoImgAlt);
        //assert logo image src:
        await indexPage.assertImgSrc(logoId, logoImgAlt, logoImgSrc);
        //assert logo text:
        await indexPage.assertTextIsVisible(logoId, logoText);
    });

    test('Assert navbar links', async()=>{
        //grab nav vars:
        const navClass: string = indexPageData.navbar.nav.class;
        const navLinks = indexPageData.navbar.nav.links;
        //assert each nav link's url:
        for(let i=0; i<navLinks.length; i++){
           await indexPage.assertLinkUrl(navClass, navLinks[i].text, navLinks[i].href);
        }
    });
});

test.describe('Testing Index Page Hero', ()=>{

    test('Assert hero element', async()=>{
        //grab hero vars:
        const heroId: string = indexPageData.hero.id;
        const heroImgSrc: string = indexPageData.hero.img.src;
        const heroTitleId: string = indexPageData.hero.title.id;
        const heroTitleText: string = indexPageData.hero.title.text;

        //assert hero is visible:
        await indexPage.assertElementIsVisible(heroId);
        //assert hero background-image:
        await indexPage.assertBackgroundImg(heroId, heroImgSrc);
        //assert hero title text:
        await indexPage.assertTextIsVisible(heroTitleId, heroTitleText);
    });
});

test.describe('Testing News & Updates Section', ()=>{

    test('Assert news and updates section', async()=>{
        //grab section vars:
        const sectionId: string = indexPageData.section.news_updates.id;
        const sectionHeaderClass: string = indexPageData.section.news_updates.header.class;
        const sectionHeaderText: string = indexPageData.section.news_updates.header.text;

        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionId);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(sectionHeaderClass, sectionHeaderText);
    });

    test('Assert news and updates content', async()=>{
        //grab section vars:
        const sectionBodyClass: string = indexPageData.section.news_updates.body.class;
        const sectionBodyContent = indexPageData.section.news_updates.body.content;

        //assert all section body content is visible:
        for(let i=0; i<sectionBodyContent.length; i++){
            await indexPage.assertNewsUpdatesContentIsVisible(
                sectionBodyClass, 
                sectionBodyContent[i].heading, 
                sectionBodyContent[i].text
            )
        }
    });
});

test.describe('Testing Fixtures & Results Section', ()=>{

    test('Assert fixtures and results section', async()=>{
        //grab section vars:
        const sectionId: string = indexPageData.section.fixtures.id;
        const sectionHeaderClass: string = indexPageData.section.fixtures.header.class;
        const sectionHeaderText: string = indexPageData.section.fixtures.header.text;
        const sectionBodyClass: string = indexPageData.section.fixtures.body.class;
        const secionBodyText: string = indexPageData.section.fixtures.body.text;
        
        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionId);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(sectionHeaderClass, sectionHeaderText);
        //assert section body text is visible:
        await indexPage.assertTextIsVisible(sectionBodyClass, secionBodyText);
    });

    test('Assert fixtures and results content', async()=>{
        //grab fixture vars:
        const fixtureResults = indexPageData.section.fixtures.body.results.content;
        const fixtureClass: string = indexPageData.section.fixtures.body.results.class;
        //gets logo alt text from team data:
        const getLogoAlt = (teamName: string)=>{
            return Object.keys(teamData)
                .map(key=>teamData[key])
                .find(team=>team.name === teamName).logo.alt;
        }

        for(let i=0; i<fixtureResults.length; i++){

            //assert that content for each fixture is visible:
            await indexPage.assertFixtureResultsContentIsVisible(
                fixtureClass,
                getLogoAlt(fixtureResults[i].home_team.name),
                fixtureResults[i].home_team.name,
                fixtureResults[i].home_team.score,
                getLogoAlt(fixtureResults[i].away_team.name),
                fixtureResults[i].away_team.name,
                fixtureResults[i].away_team.score
            )
        }
    });
});
