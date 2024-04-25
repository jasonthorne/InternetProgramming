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
        homeTeamLogo: string, homeTeamName: string, homeTeamScore: string, 
        awayTeamLogo: string, awayTeamName: string, awayTeamScore: string){
            await expect(this.page.locator(selector)
                .filter({has: this.page.getByRole('img',{name: homeTeamLogo})})
                .filter({hasText: homeTeamName})
                .filter({hasText: homeTeamScore})
                .filter({has: this.page.getByRole('img',{name: awayTeamLogo})})
                .filter({hasText: awayTeamName})
                .filter({hasText: awayTeamScore})
            ).toBeVisible();
    }

    //assert admin content is visible:
    async assertAdminContentIsVisible(
        selector: string, title: string, image: string, name: string, text: string){
            await expect(this.page.locator(selector)
                .filter({hasText: title})
                .filter({has: this.page.getByRole('img',{name: image})})
                .filter({hasText: name})
                .filter({hasText: text})
            ).toBeVisible();
    }

    //assert input field:
    async assertInputField(selector: string, placeholder: string, maxlength: string){
        await expect(this.page.locator(selector)).toHaveAttribute('placeholder', placeholder);
        await expect(this.page.locator(selector)).toHaveAttribute('maxlength', maxlength);
    }

    //aseert coment form is visible:
    async assertCommentFormIsVisible(
        selector: string, handlePlaceholder: string, commentPlaceholder: string, postBtn: string){
            await expect(this.page.locator(selector)
                .filter({has: this.page.getByPlaceholder(handlePlaceholder)})
                .filter({has: this.page.getByPlaceholder(commentPlaceholder)})
                .filter({has: this.page.getByRole('button',{name: postBtn})})
            ).toBeVisible();
    }

    //assert comment modal is visible:
    async assertCommentModalIsVisible(
        selector: string, header: string, handle: string, 
        comment: string, submitBtn: string, cancelBtn: string){
            await expect(this.page.locator(selector)
                .filter({hasText: header})
                .filter({hasText: handle})
                .filter({hasText: comment})
                .filter({has: this.page.getByRole('button',{name: submitBtn})})
                .filter({has: this.page.getByRole('button',{name: cancelBtn})})
            ).toBeVisible();
    }

    //assert comment is visible:
    async assertCommentIsVisible(
        selector: string, likes: string, handle: string, 
        comment: string, date: number, likeBtn: string, deleteBtn: string){
            await expect(this.page.locator(selector)
                .filter({hasText: await this.page.locator(likes).innerText()}) //MIGHT BE A PROBLEM WITH MULTIPLE COMMENTS :P
                .filter({hasText: handle})
                .filter({hasText: comment})
                .filter({hasText: new Date(date).toLocaleString('en-GB').slice(0,-3)})
                .filter({has: this.page.getByRole('button',{name: likeBtn})})
                .filter({has: this.page.getByRole('button',{name: deleteBtn})})
            ).toBeVisible();

       
        /*let test2 = this.page.locator(test);
        //console.log("+++test2+++++++++" + test2.textContent());
        console.log("+++innerText+++++++++" + await test2.innerText());*/
        



            /*class: '.card comment',
            body: {
                title: {
                    likes: {span: {class: '.comment-likes'}},
                    handle: {span: {class: '.comment-handle'}}
                },
                text: {class: '.comment-text'},
                date: {span: {class: '.date-text'}},
                like_button: {text: 'Like'},
                delete_button: {text: 'Delete'}*/

    }

    async assertDeleteCommentModalIsVisible(){

    }

   
}

export default IndexPage;