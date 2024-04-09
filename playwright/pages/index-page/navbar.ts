import {Page} from '@playwright/test'
import {navbar} from '../../data/page-data/index-page-data'


export class Navbar{

    readonly logo: object;
    readonly links: [object];

    constructor(readonly page: Page){
        this.logo = navbar.logo;
        this.links = [navbar.links];

        console.log("++++++ " + this.links);
    }

    /*async assertPageTitle(){ //assert title
        //await expect(this.page).toHaveTitle(this.title);
        await expect(this.page).toHaveTitle(/Lorem Ipsum F.C./);
    }*/
}

export default Navbar;