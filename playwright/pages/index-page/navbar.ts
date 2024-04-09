import {Page, expect} from '@playwright/test'
import {navbar, url} from '../../data/page-data/index-page-data'


export class Navbar{

    readonly logo: object;
    readonly links: [object];

    constructor(readonly page: Page){
        this.logo = navbar.logo;
        this.links = [navbar.links];
    }

    /*
    <img src="img/teams/Lorem-Ipsum.png" alt="Lorem Ipsum logo">
	<span class="d-none d-md-inline-block"><em>Est. 2022</em></span>

    */

    async assertLogoAltText(){ //assert logo src

        //https://www.youtube.com/watch?v=4G8c7BwHY5s

        await this.page.waitForLoadState("domcontentloaded");

        let test = this.page.getByAltText('Lorem Ipsum logo'); //.toHaveTitle(/Lorem Ipsum F.C./);
        //console.log("+++++++++++++++++++" + test/*await test.getAttribute('src')*/);

        //await expect(test).toBeVisible();

        const images = this.page.locator('img');
        console.log("+++++++++++++++++++" + await images.count());
        
        const targetImg = this.page.locator('src="img/teams/Lorem-Ipsum.png"');
        console.log("+++++++++++++++++++" + targetImg);

        //const blah = await this.page.request.get(url + "/img/teams/Lorem-Ipsum.png");
        //console.log("+++++++++++++++++++" + blah);

        //await expect(this.page.locator('src="img/teams/Lorem-Ipsum.png"')).toBeVisible();

        //const image = this.page.locator('src="img/teams/Lorem-Ipsum.png"');

        expect (await this.page.screenshot()).toMatchSnapshot('Lorem-Ipsum.png');



    }
}

export default Navbar;