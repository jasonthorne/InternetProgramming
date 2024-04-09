import {Page, expect} from '@playwright/test'
import {navbar} from '../../data/page-data/index-page-data'


export class Navbar{

    //readonly logo: {};
    //readonly links: [{}];

    constructor(readonly page: Page){
       // this.logo = navbar.logo;
        //et profile_deep_copy = JSON.parse(JSON.stringify(profile));
        //this.links = [navbar.links];
    }

    /*
    <img src="img/teams/Lorem-Ipsum.png" alt="Lorem Ipsum logo">
	<span class="d-none d-md-inline-block"><em>Est. 2022</em></span>

    */

    async assertLogoAltText(){ //assert logo src

        //https://www.youtube.com/watch?v=4G8c7BwHY5s

        await this.page.waitForLoadState("domcontentloaded"); //here, or in beforeAll()?????????

        let test = this.page.getByAltText('Lorem Ipsum logo'); //.toHaveTitle(/Lorem Ipsum F.C./);
        //console.log("+++++++++++++++++++" + test/*await test.getAttribute('src')*/);

        //await expect(test).toBeVisible();

        const images = this.page.locator('img');
        console.log("+++++++++++++++++++" + await images.count());
        
        const targetImg = this.page.locator('src="img/teams/Lorem-Ipsum.png"');
        console.log("+++++++++++++++++++" + targetImg);

        //const blah = await this.page.request.get(url + "/img/teams/Lorem-Ipsum.png");
        //console.log("+++++++++++++++++++" + blah);

       // await expect(this.page.locator('img/teams/Lorem-Ipsum.png')).toBeVisible();

       //await expect(this.page.getByAltText('Lorem Ipsum logo')).toBeVisible(); 

       /*await expect(this.page.locator('#navbar-logo')
        .getByRole('img', { name: 'Lorem Ipsum logo' })).toBeVisible();*/

        await expect(this.page.locator(navbar.logo.id)
        .getByRole('img', { name: navbar.logo.img.alt })).toBeVisible(); 
        
        //wooHoo!! +++++++++++++++++++++++++ ###############
        let testy = this.page.locator('#navbar-logo').getByRole('img', { name: 'Lorem Ipsum logo' });
        console.log("testy@@@@@@@@@" + await testy.getAttribute('src'));

       //locator('#navbar-logo').getByRole('img', { name: 'Lorem Ipsum logo' })

        //const image = this.page.locator('src="img/teams/Lorem-Ipsum.png"');

        expect (await this.page.screenshot()).toMatchSnapshot('Lorem-Ipsum.png');



    }
}

export default Navbar;