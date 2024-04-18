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

        //assert section body content is visible:
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
        const sectionBodyFixtureResults = indexPageData.section.fixtures.body.results.content;
        //teams names from results data: //++++++++++++++++++THS SHOULD BE PULLED FROM PAGE - Maybe :P
        //const resultsTeamNames: string[] = [
           // ...sectionBodyResults.map(result => result.away_team.name), 
           // ...sectionBodyResults.map(result => result.home_team.name)
       // ].sort();
        //teams names from team data:
        const dataTeamNames: string[] = Object.values(teamData).map(team => team.name).sort();

        /*if(resultsTeamNames.sort().join(',')=== dataTeamNames.sort().join(',')){
            alert('same members');
        }
        else alert('not a match');*/

        //#############################

        const sectionBodyFixtureClass: string = indexPageData.section.fixtures.body.results.class;



        //##############################

        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionId);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(sectionHeaderClass, sectionHeaderText);
        //assert section body text is visible:
        await indexPage.assertTextIsVisible(sectionBodyClass, secionBodyText);

      //  const testList: string[];

        //for(let i=0; i<sectionBodyResults.length; i++){
            //await indexPage.assertTextIsVisible(sectionBodyClass, sectionBodyContent[i].heading);
            //await indexPage.assertTextIsVisible(sectionBodyClass, sectionBodyContent[i].text);
          //  console.log(sectionBodyResults[i].away_team.name);
         //   console.log(sectionBodyResults[i].away_team.score);
           ////////// testList.push(sectionBodyResults[i].home_team.name);
           ////////// testList.push(sectionBodyResults[i].away_team.name);

           /* for(const key in sectionBodyResults[i]){ 
               // console.log(`${key}: ${sectionBodyResults[i][key]}`);
                console.log(`${key}: ${sectionBodyResults[i][key].name}`);
                console.log(`${key}: ${sectionBodyResults[i][key].score}`);
                testList.push(sectionBodyResults[i][key].name);
            }*/
        //}

    ////    console.log("+++++++++resultsTeamNames+++++" + resultsTeamNames);
   //    console.log("+++++dataTeamNames+++++++++" + dataTeamNames);



       



        //================================================
        //are all teams from teamsData in results??

        /*const arr = sectionBodyResults.map(({home_team.name}) => (home_team.name))

        if(array1.sort().join(',')=== array2.sort().join(',')){
            alert('same members');
        }
        else alert('not a match');*/

        //does results hold team log and team name from team data?
        
        //and score from results data??5
        //===============================================

        //++++++++++++++++BOOM :P
        /*for each fixture in fixtures:
        Is there a fixture class that contains all info in that fixture*.
        
        


        //assert section body content is visible:
        /*for(let i=0; i<sectionBodyContent.length; i++){
            await indexPage.assertTextIsVisible(sectionBodyClass, sectionBodyContent[i].heading);
            await indexPage.assertTextIsVisible(sectionBodyClass, sectionBodyContent[i].text);
        }*/



    });

   test('Assert fixtures and results content', async()=>{

        const fixtureResults = indexPageData.section.fixtures.body.results.content;
        const fixtureClass: string = indexPageData.section.fixtures.body.results.class;

        ///console.log("fixtureResults" + fixtureResults);
        let logoSrc: string = null;

        /*const getLogoSrc = (fixtureResult: typeof fixtureResults)=>{
            return Object.values(teamData).find(
                team => team.name === fixtureResult.home_team.name).logo.src;
        }*/

        for(let i=0; i<fixtureResults.length; i++){
            //+++++++++++++Scores sdont work becausetheres multiple 0s. Need to pair it with e team name somehow :P +++++

            /*
            Error: expect.toBeVisible: Error: strict mode violation: locator('.fixture-grid-container').getByText('0') resolved to 3 elements:
            1) <h3>…</h3> aka getByRole('heading', { name: '9 -' })
            2) <h3>…</h3> aka getByRole('heading', { name: '0 -' })
            3) <h3>…</h3> aka getByRole('heading', { name: '1 - 0' })

        Call log:
        - expect.toBeVisible with timeout 5000ms
        - waiting for locator('.fixture-grid-container').getByText('0')

        await indexPage.





            */
    //        await indexPage.assertTextIsVisible(fixtureClass, fixtureResults[i].home_team.name);
   //         await indexPage.assertTextIsVisible(fixtureClass, fixtureResults[i].home_team.score);
    //        await indexPage.assertTextIsVisible(fixtureClass, fixtureResults[i].away_team.name);
    //        await indexPage.assertTextIsVisible(fixtureClass, fixtureResults[i].away_team.score);
            let homeTeamLogoSrc = Object.values(teamData).find(
                team => team.name === fixtureResults[i].home_team.name).logo.src;
            let awayTeamLogoSrc = Object.values(teamData).find(
                team => team.name === fixtureResults[i].away_team.name).logo.src;

            
            console.log("++++++++++++LOGO " + homeTeamLogoSrc.logo.src);

            await indexPage.assertFixturesResultsContentIsVisible(
                fixtureClass,
                homeTeamLogoSrc,
                fixtureResults[i].home_team.name,
                fixtureResults[i].home_team.score,
                awayTeamLogoSrc,
                fixtureResults[i].away_team.name,
                fixtureResults[i].away_team.score
            )
        }

        //####################



        //#####################


    });
});

