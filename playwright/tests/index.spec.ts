import {test} from '@playwright/test';
import {IndexPage} from '../pages/index-page';
import {indexPageData} from '../data/index-page-data';

let indexPage: IndexPage;

test.beforeEach(async({page})=>{
    await page.goto(indexPageData.url);
    indexPage = new IndexPage(page);
});

test.describe('Testing Index Page Title', ()=>{
    test('Assert page title', async()=>{
        await indexPage.assertPageTitle(indexPageData.title);
    });
});

test.describe('Testing Index Page Navbar', ()=>{

    test('Assert navbar logo', async()=>{
        //grab logo vars:
        const logoId: string = indexPageData.navbar.logo.id;
        const logoImgAlt: string = indexPageData.navbar.logo.img.alt;
        const logoImgSrc: string = indexPageData.navbar.logo.img.src;
        const logoText: string = indexPageData.navbar.logo.span.text;

        //assert logo image is visible:
        await indexPage.assertImgIsVisible(logoId, logoImgAlt);
        //assert logo image src:
        await indexPage.assertImgSrc(logoId, logoImgAlt, logoImgSrc);
        //assert logo text:
        await indexPage.assertTextIsVisible(logoId, logoText);
    });

    test('Assert navbar links', async()=>{
        //grab nav vars:
        const navClass: string = indexPageData.navbar.nav.class;
        const navLinks = indexPageData.navbar.nav.links;
        //assert each nav link's url:
        for(const navLink of navLinks){
           await indexPage.assertLinkUrl(navClass, navLink.text, navLink.href);
        }
    });
});

test.describe('Testing Index Page Hero', ()=>{

    test('Assert hero element', async()=>{
        //grab hero vars:
        const heroId: string = indexPageData.hero.id;
        const heroImgSrc: string = indexPageData.hero.img.src;
        const heroTitleId: string = indexPageData.hero.title.id;
        const heroTitleText: string = indexPageData.hero.title.text;

        //assert hero is visible:
        await indexPage.assertElementIsVisible(heroId);
        //assert hero background-image:
        await indexPage.assertBackgroundImg(heroId, heroImgSrc);
        //assert hero title text:
        await indexPage.assertTextIsVisible(heroTitleId, heroTitleText);
    });
});

test.describe('Testing News & Updates Section', ()=>{

    test('Assert news and updates section', async()=>{
        //grab section vars:
        const sectionId: string = indexPageData.section.news_updates.id;
        const sectionHeaderClass: string = indexPageData.section.news_updates.header.class;
        const sectionHeaderText: string = indexPageData.section.news_updates.header.text;

        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionId);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(sectionHeaderClass, sectionHeaderText);
    });

    test('Assert news and updates content', async()=>{
        //grab section vars:
        const sectionBodyClass: string = indexPageData.section.news_updates.body.class;
        const sectionBodyContents = indexPageData.section.news_updates.body.content;

        //assert all section body content is visible:
        for(const content of sectionBodyContents){
            await indexPage.assertNewsUpdatesContentIsVisible(
                sectionBodyClass, content.heading, content.text
            );
        }
    });
});

test.describe('Testing Fixtures & Results Section', ()=>{

    test('Assert fixtures and results section', async()=>{
        //grab section vars:
        const sectionId: string = indexPageData.section.fixtures.id;
        const sectionHeaderClass: string = indexPageData.section.fixtures.header.class;
        const sectionHeaderText: string = indexPageData.section.fixtures.header.text;
        const sectionBodyClass: string = indexPageData.section.fixtures.body.class;
        const secionBodyText: string = indexPageData.section.fixtures.body.text;
        
        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionId);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(sectionHeaderClass, sectionHeaderText);
        //assert section body text is visible:
        await indexPage.assertTextIsVisible(sectionBodyClass, secionBodyText);
    });

    test('Assert fixtures and results content', async()=>{
        //grab fixture vars:
        const fixtureResults = indexPageData.section.fixtures.body.results.content;
        const fixtureClass: string = indexPageData.section.fixtures.body.results.class;
        //asserts a team's img src:
        const assertTeamImgSrc = async(team: {logo: {src: string; alt: string;}})=>{
            await indexPage.assertImgSrc(fixtureClass, team.logo.alt, team.logo.src);
        }
        
        for(const fixtureResult of fixtureResults){
            //assert team's img sources:
            assertTeamImgSrc(fixtureResult.home_team.team);
            assertTeamImgSrc(fixtureResult.away_team.team);

            //assert that content for each fixture is visible:
            await indexPage.assertFixtureResultContentIsVisible(
                fixtureClass,
                fixtureResult.home_team.team.logo.alt,
                fixtureResult.home_team.team.name,
                fixtureResult.home_team.score,
                fixtureResult.away_team.team.logo.alt,
                fixtureResult.away_team.team.name,
                fixtureResult.away_team.score
            );
        }
    });
});

test.describe('Testing Admin Section', ()=>{

    test('Assert admin section', async()=>{
        //grab section vars:
        const sectionId: string = indexPageData.section.admin.id;
        const sectionHeaderClass: string = indexPageData.section.admin.header.class;
        const sectionHeaderText: string = indexPageData.section.admin.header.text;
        const sectionBodyClass: string = indexPageData.section.admin.body.class;
        const secionBodyText: string = indexPageData.section.admin.body.text;
        
        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionId);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(sectionHeaderClass, sectionHeaderText);
        //assert section body text is visible:
        await indexPage.assertTextIsVisible(sectionBodyClass, secionBodyText);
    });

    test('Assert admin staff content', async()=>{
        //grab staff vars:
        const adminStaff = indexPageData.section.admin.body.staff;
        const adminClass: string = indexPageData.section.admin.body.class;

        //spin through each staff member:
        for(const member of Object.keys(adminStaff).map(key=>adminStaff[key])){
            //assert staff member's image src:
            await indexPage.assertImgSrc(adminClass, member.img.alt, member.img.src);
            //assert that staff member's content is visible:
            await indexPage.assertAdminContentIsVisible(
                adminClass, member.title, member.img.alt, member.name, member.text
            );
        }
    });
});

test.describe('Testing Comments Section', ()=>{
   
    test('Assert comments section', async()=>{
        //grab section vars:
        const sectionId: string = indexPageData.section.comments.id;
        const sectionHeaderClass: string = indexPageData.section.comments.header.class;
        const sectionHeaderText: string = indexPageData.section.comments.header.text;
        const sectionBodyClass: string = indexPageData.section.comments.body.class;
        const commentForm = indexPageData.section.comments.body.form;
        
        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionId);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(sectionHeaderClass, sectionHeaderText);
        //assert handle input field:
        await indexPage.assertInputField(
            commentForm.handle_input.id, 
            commentForm.handle_input.placeholder, 
            commentForm.handle_input.maxlength
        );
        //assert comment input field:
        await indexPage.assertInputField(
            commentForm.comment_input.id, 
            commentForm.comment_input.placeholder, 
            commentForm.comment_input.maxlength
        );
        //assert comment form is visible:
        await indexPage.assertCommentFormIsVisible(
            sectionBodyClass, 
            commentForm.handle_input.placeholder, 
            commentForm.comment_input.placeholder,
            commentForm.button.text
        );
    });

    test('Assert comment creation and deletion', async()=>{
        //grab comment form vars:
        const handleInputId: string = indexPageData.section.comments.body.form.handle_input.id;
        const commentInputId: string = indexPageData.section.comments.body.form.comment_input.id;
        const postCommentBtnText: string =  indexPageData.section.comments.body.form.button.text;
        //grab create comment modal vars:
        const modalId: string = indexPageData.modal.create_comment.id;
        const headerText: string = indexPageData.modal.create_comment.header.text;
        const submitBtnText: string = indexPageData.modal.create_comment.footer.submit_button.text;
        const cancelBtnText: string = indexPageData.modal.create_comment.footer.cancel_button.text;
        //grab comment vars:
        const commentClass: string = indexPageData.comment.class;
        const likesClass: string = indexPageData.comment.body.title.likes.class;
        const likeBtnClass: string = indexPageData.comment.body.like_button.class;
        const likeBtnText: string = indexPageData.comment.body.like_button.text;
        const likeBtnLikedClass: string = indexPageData.comment.body.like_button.liked.class;
        const likeBtnUnlikedClass: string = indexPageData.comment.body.like_button.unliked.class;
        const deleteBtnText: string = indexPageData.comment.body.delete_button.text;
        //sample input text:
        const handleText: string = 'Sample Handle';
        const commentText: string = 'Sample Comment';
        //creation date:
        const dateText: string = new Date(
            Math.floor(Date.now())).toLocaleString('en-GB').slice(0,-3);
        
        //-----------------------------creation:-----------------------------
        //enter valid handle:
        await indexPage.enterInputFieldText(handleInputId, handleText);
        //enter valid comment:
        await indexPage.enterInputFieldText(commentInputId, commentText);
        //click 'post comment' button:
        await indexPage.clickButton(postCommentBtnText);
        //assert confirmation modal is visibe:
        await indexPage.assertCommentModalIsVisible(
            modalId, headerText, handleText, commentText, submitBtnText, cancelBtnText
        );
        //click 'submit' button:
        await indexPage.clickButton(submitBtnText);
        //confirm created comment is visible:
        await indexPage.assertCommentIsVisible(
            commentClass, likesClass, handleText, commentText, dateText, likeBtnText, deleteBtnText 
        );
        //assert like button clicks:
        await indexPage.assertLikeBtnClicks(
            likeBtnClass, likeBtnUnlikedClass, likeBtnLikedClass, likesClass
        );
       //-----------------------------deletion:-----------------------------
        //click 'delete' button:
        await indexPage.clickButton(deleteBtnText);



        

        //await indexPage.assertElementIsVisible(".comment");

        
        
        //create comment with input text:
        //await assertCreateComment(handleText, commentText);







    });

    //coment with no handle:
    //comment with no comment
    //comment with no handle & no comment

});
