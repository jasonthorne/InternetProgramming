import {expect, Locator, Page} from '@playwright/test'
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
        comment: string, date: string, likeBtn: string, deleteBtn: string){
            await expect(this.page.locator(selector)
                .filter({hasText: await this.page.locator(likes).innerText()})
                .filter({hasText: handle})
                .filter({hasText: comment})
                .filter({hasText: date})
                .filter({has: this.page.getByRole('button',{name: likeBtn})})
                .filter({has: this.page.getByRole('button',{name: deleteBtn})})
            ).toBeVisible();
    }

    //assert like button clicks:
    async assertLikeBtnClicks(
        commentClass: string, date: string, btnClass: string, 
        unlikedClass: string, likedClass: string, likesClass: string){
            //grab locators from comment of given date:
            const commentLocator: Locator = this.page.locator(commentClass).filter({hasText: date});
            const likeBtnLocator: Locator = commentLocator.locator(btnClass);
            const unlikedIconLocator: Locator = likeBtnLocator.locator(unlikedClass);
            const likedIconLocator: Locator = likeBtnLocator.locator(likedClass);
            const likesLocator: Locator = commentLocator.locator(likesClass);
            let likes: number = parseInt((await likesLocator.innerText()).trim()); //grab likes value

            await expect(commentLocator).toBeVisible(); //check comment is visible
            await expect(unlikedIconLocator).toBeVisible(); //confirm unliked icon is visible
            await likeBtnLocator.click(); //click like btn (to like)
            expect(parseInt((await likesLocator.innerText()).trim())).toBe(++likes); //confirm likes increase
            await expect(likedIconLocator).toBeVisible(); //confirm liked icon is visible
            await likeBtnLocator.click(); //click like btn again (to unlike)
            expect(parseInt((await likesLocator.innerText()).trim())).toBe(--likes); //confirm likes decrease
            await expect(unlikedIconLocator).toBeVisible(); //confirm unliked icon is visible
    }

    //############### //////////await this.page.locator(btnClass).locator(unlikedClass).filter({hasText: new Date(date).toLocaleString('en-GB').slice(0,-3)}).click();


    async assertDeleteCommentModalIsVisible(){

    }

   
}

export default IndexPage;