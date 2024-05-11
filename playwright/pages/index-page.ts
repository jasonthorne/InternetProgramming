import {expect, Locator, Page} from '@playwright/test'
import BasePage from './base-page';

export class IndexPage extends BasePage{

    constructor(readonly page: Page){
        super(page);
    }

    //assert navbar link is valid:
    async assertNavbarLink(navbarClass: string, name: string, url: string){
        await this.page.locator(navbarClass).getByRole('link',{name:name}).click();
        await expect(this.page).toHaveURL(new RegExp(`/${url}$`));
    }

    //assert 'news & updates' content is visible:
    async assertNewsUpdatesContentIsVisible(sectionClass: string, heading: string, text: string){
        await expect(this.page.locator(sectionClass)
            .filter({hasText: heading})
            .filter({hasText: text})
        ).toBeVisible();
    }

    //assert fixture result content is visible:
    async assertFixtureResultContentIsVisible(
        resultsClass: string, 
        homeTeam: {logo:string; name:string; score:string},
        awayTeam: {logo:string; name:string; score:string}){
            await expect(this.page.locator(resultsClass)
                .filter({has: this.page.getByRole('img',{name: homeTeam.logo})})
                .filter({hasText: homeTeam.name})
                .filter({hasText: homeTeam.score})
                .filter({has: this.page.getByRole('img',{name: awayTeam.logo})})
                .filter({hasText: awayTeam.name})
                .filter({hasText: awayTeam.score})
            ).toBeVisible();
    }

    //assert admin content is visible:
    async assertAdminContentIsVisible(
        sectionClass: string,
        admin: {title:string; img:string; name:string, text:string}){
            await expect(this.page.locator(sectionClass)
                .filter({hasText: admin.title})
                .filter({has: this.page.getByRole('img',{name: admin.img})})
                .filter({hasText: admin.name})
                .filter({hasText: admin.text})
            ).toBeVisible();
    }

    //assert input field:
    async assertInputField(formId: string, placeholder: string, maxlength: string){
        await expect(this.page.locator(formId)).toHaveAttribute('placeholder', placeholder);
        await expect(this.page.locator(formId)).toHaveAttribute('maxlength', maxlength);
    }

    //assert footer creator link is valid:
    async assertFooterCreatorLink(footerId: string, nth: number, url: string){
        const tabPromise = this.page.waitForEvent('popup');
        await this.page.locator(footerId).getByRole('link').nth(nth).click();
        const newTab = await tabPromise;
        await newTab.waitForLoadState();
        await expect(newTab).toHaveURL(new RegExp(url));
    }

    //aseert coment form is visible:
    async assertCommentFormIsVisible(
        sectionClass: string, form: {handle:string; comment:string; button:string}){
            await expect(this.page.locator(sectionClass)
                .filter({has: this.page.getByPlaceholder(form.handle)})
                .filter({has: this.page.getByPlaceholder(form.comment)})
                .filter({has: this.page.getByRole('button',{name: form.button})})
            ).toBeVisible();
    }

    //assert comment modal is visible:
    async assertCommentModalIsVisible(
        modal: {id:string; header:string; submitBtn:string; cancelBtn:string},
        commentData: {handle:string, comment:string}){
            await expect(this.page.locator(modal.id)
                .filter({hasText: modal.header})
                .filter({hasText: commentData.handle})
                .filter({hasText: commentData.comment})
                .filter({has: this.page.getByRole('button',{name: modal.submitBtn})})
                .filter({has: this.page.getByRole('button',{name: modal.cancelBtn})})
            ).toBeVisible();
    }

    //assert comment is visible:
    async assertCommentIsVisible(
        comment: {class:string; likesClass:string; handle:string; 
        comment:string; date:string; likeBtn:string; deleteBtn:string}){
            await expect(this.page.locator(comment.class)
                .filter({hasText: await this.page.locator(comment.likesClass).innerText()})
                .filter({hasText: comment.handle})
                .filter({hasText: comment.comment})
                .filter({hasText: comment.date})
                .filter({has: this.page.getByRole('button',{name:comment.likeBtn})})
                .filter({has: this.page.getByRole('button',{name:comment.deleteBtn})})
            ).toBeVisible();
    }

    //assert like button clicks:
    async assertLikeBtnClicks(
        comment: {class:string; date:string; likesClass:string;
        likeBtnClass:string; unlikedClass:string; likedClass:string}){
            //grab locators from comment of given date:
            const commentLocator: Locator = this.page.locator(comment.class).filter({hasText: comment.date});
            const likeBtnLocator: Locator = commentLocator.locator(comment.likeBtnClass);
            const unlikedIconLocator: Locator = likeBtnLocator.locator(comment.unlikedClass);
            const likedIconLocator: Locator = likeBtnLocator.locator(comment.likedClass);
            const likesLocator: Locator = commentLocator.locator(comment.likesClass);
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

    //assert delete comment modal is visible:
    async assertDeleteCommentModalIsVisible(
        modal: {id:string; header:string; text:string; deleteBtn:string; cancelBtn:string}){
            await expect(this.page.locator(modal.id)
                .filter({hasText: modal.header})
                .filter({hasText: modal.text})
                .filter({has: this.page.getByRole('button',{name: modal.deleteBtn})})
                .filter({has: this.page.getByRole('button',{name: modal.cancelBtn})})
            ).toBeVisible();
    }

    //assert comment is hidden:
    async assertCommentIsHidden(
        comment: {class:string; handle:string; comment:string; 
        date:string; likeBtn:string; deleteBtn:string}){
            await expect(this.page.locator(comment.class)
                .filter({hasText: comment.handle})
                .filter({hasText: comment.comment})
                .filter({hasText: comment.date})
                .filter({has: this.page.getByRole('button',{name: comment.likeBtn})})
                .filter({has: this.page.getByRole('button',{name: comment.deleteBtn})})
            ).toBeHidden();
    }

    //assert footer attribute link is valid:
    async assertFooterAttributeLink(text: string, url: string){
        const tabPromise = this.page.waitForEvent('popup');
        await this.page.getByRole('link',{name: text}).click();
        const newTab = await tabPromise;
        await newTab.waitForLoadState();
        await expect(newTab).toHaveURL(url);
    }
}

export default IndexPage;