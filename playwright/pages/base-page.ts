import {expect, Locator, Page} from '@playwright/test'

export class BasePage{

    constructor(readonly page: Page){}

    async assertPageTitle(title: RegExp){ //assert page title:
        await expect(this.page).toHaveTitle(title);
    }


    //=======================Maybe in index page?? ==================================
    async assertImgIsVisible(imgId: string, imgName: string){ //assert image is visible
        await expect(this.page.locator(imgId).getByRole('img',{name: imgName})).toBeVisible();
    }

    async assertImgSrc(imgId: string, imgName: string, imgSrc: string){
        expect(await this.page.locator(imgId).getByRole('img',{name: imgName})
        .getAttribute('src')).toMatch(imgSrc);
    }

    async test(indexPageData: any){

        /*
        <div id="navbar-logo">
					<img src="img/teams/Lorem-Ipsum.png" alt="Lorem Ipsum logo">
					<span class="d-none d-md-inline-block"><em>Est. 2022</em></span>
				</div>


        */
        await expect(this.page.locator("#navbar-logo").getByText("Est. 2022")).toBeVisible();
        //.getAttribute('src')).toMatch(imgSrc);

        let test = this.page.locator("#navbar-logo").getByText("Est. 2022");
        console.log("++++++++++++" + await test.innerText());
    }
    //============================================================================

    


}

export default BasePage;