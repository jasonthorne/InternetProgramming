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
    async assertFixtureResultContentIsVisible(
        selector: string, 
        homeTeamLogoAlt: string, homeTeamName: string, homeTeamScore: string, 
        awayTeamLogoAlt: string, awayTeamName: string, awayTeamScore: string){

            await expect(this.page.locator(selector)
                .filter({has: this.page.getByRole('img',{name: homeTeamLogoAlt})})
                .filter({hasText: homeTeamName})
                .filter({hasText: homeTeamScore})
                .filter({has: this.page.getByRole('img',{name: awayTeamLogoAlt})})
                .filter({hasText: awayTeamName})
                .filter({hasText: awayTeamScore})
            ).toBeVisible();
    }

    //assert admin content is visible:
    async assertAdminContentIsVisible(
        selector: string, title: string, imgAlt: string, name: string, text: string){
            await expect(this.page.locator(selector)
                .filter({hasText: title})
                .filter({has: this.page.getByRole('img',{name: imgAlt})})
                .filter({hasText: name})
                .filter({hasText: text})
            ).toBeVisible();
    }

    //aseert coment form is visible:
    async assertCommentFormIsVisible(selector: string){

        /*
         comment_form: {
                    id: '#comment-form',
                    handle_input: {
                        id: '#handle-input',
                        placeholder: 'Name',
                        maxlength: '60'
                    },
                    comment_input: {
                        id: '#comment-input',
                        placeholder: 'Comment',
                        maxlength: '1000'
                    },
                    comment_button: {
                        id: '#comment-btn',
                        text: 'Post Comment'
                    }
                }
        */

    }
}

export default IndexPage;