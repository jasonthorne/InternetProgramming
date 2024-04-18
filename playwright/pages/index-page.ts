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
            .filter({hasText: text}))
            .toBeVisible();
    }

    //assert 'fixtures & results' content is visible:
    async assertFixturesResultsContentIsVisible(
        selector: string, homeTeam: string, homeTeamScore: string, 
        awayTeam: string, awayTeamScore: string){

            await expect(this.page.locator(selector)
                .filter({has: this.page.getByRole('img', {name: imSrc})}) //alt text AND src needed here :/
                .filter({hasText: homeTeam})
                .filter({hasText: homeTeamScore})
                .filter({hasText: awayTeam})
                .filter({hasText: awayTeamScore}))
                .toBeVisible();

        /*

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