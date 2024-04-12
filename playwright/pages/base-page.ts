import {expect, Locator, Page} from '@playwright/test'

export class BasePage{

    constructor(readonly page: Page){}

    async assertPageTitle(title: RegExp){ //assert page title:
        await expect(this.page).toHaveTitle(title);
    }


    //=======================Maybe in index page?? ==================================
    async assertImgIsVisible(selector: string, name: string){ //assert image is visible
        await expect(this.page.locator(selector).getByRole('img',{name: name})).toBeVisible();
    }

    async assertImgSrc(selector: string, name: string, src: string){
        expect(await this.page.locator(selector).getByRole('img',{name: name})
        .getAttribute('src')).toMatch(src);
    }

    async assertText(selector: string, text: string){

        /*
        <div id="navbar-logo">
					<img src="img/teams/Lorem-Ipsum.png" alt="Lorem Ipsum logo">
					<span class="d-none d-md-inline-block"><em>Est. 2022</em></span>
				</div>


        */
        //await expect(this.page.locator("#navbar-logo").getByText("Est. 2022")).toBeVisible();

        await expect(this.page.locator(selector).getByText(text)).toBeVisible();


        //.getAttribute('src')).toMatch(imgSrc);

        let test = this.page.locator("#navbar-logo").getByText("Est. 2022");
        console.log("++++++++++++" + await test.innerText());
    }
    //============================================================================

    


}

export default BasePage;