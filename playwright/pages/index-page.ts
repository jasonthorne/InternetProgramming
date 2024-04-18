import {expect, Page} from '@playwright/test'
import BasePage from './base-page';

export class IndexPage extends BasePage{

    constructor(readonly page: Page){
        super(page);
    }

    //assert 'news & updates' content is visible:
    async assertNewsUpdatesContentIsVisible(selector: string, heading: string, text: string){
        await expect(this.page.locator(selector)
            .filter({hasText: heading})
            .filter({hasText: text})
            ).toBeVisible();
    }

    //assert fixture result content is visible:
    async assertFixtureResultsContentIsVisible(
        selector: string, 
        homeTeamLogoAlt: string, homeTeamName: string, homeTeamScore: string, 
        awayTeamLogoAlt: string, awayTeamName: string, awayTeamScore: string){

           await expect(this.page.locator(selector)
                .filter({has: this.page.getByRole('img', {name: homeTeamLogoAlt})})
                .filter({hasText: homeTeamName})
                .filter({hasText: homeTeamScore})
                .filter({has: this.page.getByRole('img', {name: awayTeamLogoAlt})})
                .filter({hasText: awayTeamName})
                .filter({hasText: awayTeamScore})
                ).toBeVisible();

        /*

        this.page.locator(selector).getByRole('img',{name: name})).toBeVisible();
          await expect(this.page.locator(selector).getByRole('img',{name: name})).toBeVisible();

        //assert image src:
    async assertImgSrc(selector: string, name: string, src: string){
        expect(await this.page.locator(selector).getByRole('img',{name: name})
            .getAttribute('src')).toMatch(src);
    }

.filter({ has: page.getByRole('button', { name: 'Say goodbye' }) })

          {
               home_team: {
                name: teamData.lorem_ipsum.name,
                score: '9'
               },
               away_team: {
                name: teamData.sed_sit_amet.name,
                score: '0'
               }
            }

        */
        
    }

    async assertNewsUpdatesContentIsVisible2(selector: string, heading: string, text: string){
        await expect(this.page.locator(selector)
            .filter({hasText: heading})
            .filter({hasText: text}))
            .toBeVisible();
    }


}

export default IndexPage;