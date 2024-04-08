import {expect, type Page} from "@playwright/test"

export class HomePage{
    
    constructor(
        readonly page: Page, 
        readonly title: RegExp //++++++SHould be pulled here from data folder
        //readonly title: '/Lorem Ipsum F.C./' /////////////TEST ++++++++++
    ){}

    async assertPageTitle(){ //assert title
        await expect(this.page).toHaveTitle(this.title);
    }
}

export default HomePage;