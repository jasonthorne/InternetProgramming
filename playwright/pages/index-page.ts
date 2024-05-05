import {expect, Locator, Page, BrowserContext} from '@playwright/test'
import BasePage from './base-page';

export class IndexPage extends BasePage{

    constructor(readonly page: Page){
        super(page);
    }

    //assert navbar link is valid:
    async assertNavbarLink(selector: string, name: string, url: string){
        await this.page.locator(selector).getByRole('link',{name:name}).click();
        await expect(this.page).toHaveURL(new RegExp(`/${url}$`));
    }

    //assert 'news & updates' content is visible:
    async assertNewsUpdatesContentIsVisible(selector: string, heading: string, text: string){
        await expect(this.page.locator(selector)
            .filter({hasText: heading})
            .filter({hasText: text})
        ).toBeVisible();
    }

    //assert fixture result content is visible:
    /*async assertFixtureResultContentIsVisible(
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
    }*/

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
    /*async assertAdminContentIsVisible(
        selector: string, title: string, image: string, name: string, text: string){
            await expect(this.page.locator(selector)
                .filter({hasText: title})
                .filter({has: this.page.getByRole('img',{name: image})})
                .filter({hasText: name})
                .filter({hasText: text})
            ).toBeVisible();
    }*/

    //assert admin content is visible:
    async assertAdminContentIsVisible(
        adminClass: string,
        admin: {title:string; img:string; name:string, text:string}){
            await expect(this.page.locator(adminClass)
                .filter({hasText: admin.title})
                .filter({has: this.page.getByRole('img',{name: admin.img})})
                .filter({hasText: admin.name})
                .filter({hasText: admin.text})
            ).toBeVisible();
    }

    /*
     title: member.title, img: member.img.alt, 
                    name: member.name, text: member.text


    */

    //assert input field:
    async assertInputField(formId: string, placeholder: string, maxlength: string){
        await expect(this.page.locator(formId)).toHaveAttribute('placeholder', placeholder);
        await expect(this.page.locator(formId)).toHaveAttribute('maxlength', maxlength);
    }

    //aseert coment form is visible:
    /*async assertCommentFormIsVisible(
        selector: string, handlePlaceholder: string, commentPlaceholder: string, postBtn: string){
            await expect(this.page.locator(selector)
                .filter({has: this.page.getByPlaceholder(handlePlaceholder)})
                .filter({has: this.page.getByPlaceholder(commentPlaceholder)})
                .filter({has: this.page.getByRole('button',{name: postBtn})})
            ).toBeVisible();

            handle: commentFormData.handle_input.placeholder, 
                comment: commentFormData.comment_input.placeholder,
                button: commentFormData.button.text
    }*/

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

    //assert delete comment modal is visible:
    async assertDeleteCommentModalIsVisible(
        selector: string, header: string, msg: string, deleteBtn: string, cancelBtn: string){
            await expect(this.page.locator(selector)
                .filter({hasText: header})
                .filter({hasText: msg})
                .filter({has: this.page.getByRole('button',{name: deleteBtn})})
                .filter({has: this.page.getByRole('button',{name: cancelBtn})})
            ).toBeVisible();
    }

    //assert comment is hidden:
    async assertCommentIsHidden(
        selector: string, handle: string, comment: string, 
        date: string, likeBtn: string, deleteBtn: string){
            await expect(this.page.locator(selector)
                .filter({hasText: handle})
                .filter({hasText: comment})
                .filter({hasText: date})
                .filter({has: this.page.getByRole('button',{name: likeBtn})})
                .filter({has: this.page.getByRole('button',{name: deleteBtn})})
            ).toBeHidden();
    }

    //assert creator link is valid:
    async assertFooterCreatorLink(footerId: string, nth: number, url: string){
       await this.page.locator(footerId).getByRole('link').nth(nth).click();
       const newTab =  await this.page.waitForEvent('popup');
       await newTab.waitForLoadState();
       await expect(newTab).toHaveURL(new RegExp(url));
       //https://medium.com/@panthira.tie/playwright-checking-new-tabs-and-dark-mode-099bf9e8db41
    }

     /*

     str.split("Example")[0]
       1) <a target="_blank" href="https://github.com/jasonth…>…</a> aka locator('#footer-attributes').getByRole('link').first()
    2) <a target="_blank" href="https://linkedin.com/in/ja…>…</a> aka locator('#footer-attributes').getByRole('link').nth(1)
    3) <a target="_blank" href="https://bit.ly/3l419Y0">↵⇆⇆⇆⇆⇆Rudy and Peter Skitterians ↵⇆⇆⇆⇆</a> aka getByRole('link', { name: 'Rudy and Peter Skitterians' })
    4) <a target="_blank" href="https://bit.ly/3l0HyYN">↵⇆⇆⇆⇆⇆Pixabay↵⇆⇆⇆⇆</a> aka getByRole('link', { name: 'Pixabay' })
    5) <a target="_blank" href="https://www.freepik.com">↵⇆⇆⇆⇆⇆Freepik ↵⇆⇆⇆⇆</a> aka getByRole('link', { name: 'Freepik' })
    6) <a target="_blank" href="https://www.flaticon.com">↵⇆⇆⇆⇆⇆www.flaticon.com↵⇆⇆⇆⇆</a> aka getByRole('link', { name: 'www.flaticon.com' })
    7) <a target="_blank" href="https://fontawesome.com">↵⇆⇆⇆⇆⇆Font Awesome↵⇆⇆⇆⇆</a> aka getByRole('link', { name: 'Font Awesome' })
    */

}

export default IndexPage;