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
    const navbarData = indexPageData.navbar;

    test('Assert navbar logo', async()=>{
        //assert logo image is visible:
        await indexPage.assertImgIsVisible(
            navbarData.logo.id, navbarData.logo.img.alt
        );
        //assert logo image src:
        await indexPage.assertImgSrc(
            navbarData.logo.id,
            navbarData.logo.img.alt,
            indexPageData.navbar.logo.img.src
        );
        //assert logo text:
        await indexPage.assertTextIsVisible(
            navbarData.logo.id, navbarData.logo.span.text);
    });

    test('Assert navbar links', async()=>{
        //assert each nav link's url:
        for(const navLink of navbarData.nav.links){
            await indexPage.assertLinkUrl(
                navbarData.nav.class, navLink.text, navLink.href
            );
        }
    });
});

test.describe('Testing Index Page Hero', ()=>{

    test('Assert hero element', async()=>{
        const heroData = indexPageData.hero;

        //assert hero is visible:
        await indexPage.assertElementIsVisible(heroData.id);
        //assert hero background-image:
        await indexPage.assertBackgroundImg(heroData.id, heroData.img.src);
        //assert hero title text:
        await indexPage.assertTextIsVisible(
            heroData.title.id, heroData.title.text
        );
    });
});

test.describe('Testing News & Updates Section', ()=>{
    const sectionData = indexPageData.section.news_updates;

    test('Assert news and updates section', async()=>{
       
        //const sectionId: string = indexPageData.section.news_updates.id;
       //const sectionHeaderClass: string = indexPageData.section.news_updates.header.class;
       // const sectionHeaderText: string = indexPageData.section.news_updates.header.text;

        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionData.id);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(
            sectionData.header.class, sectionData.header.text
        );
    });

    test('Assert news and updates content', async()=>{
        //grab section vars:
        //const sectionBodyClass: string = indexPageData.section.news_updates.body.class;
        //const sectionBodyContents = indexPageData.section.news_updates.body.content;

        //assert all section body content is visible:
        for(const content of sectionData.body.content){
            await indexPage.assertNewsUpdatesContentIsVisible(
                sectionData.body.class, content.heading, content.text
            );
        }
    });
});

test.describe('Testing Fixtures & Results Section', ()=>{
    const sectionData = indexPageData.section.fixtures;

    test('Assert fixtures and results section', async()=>{
        //grab section vars:
        ///const sectionId: string = indexPageData.section.fixtures.id;
        //const sectionHeaderClass: string = indexPageData.section.fixtures.header.class;
        //const sectionHeaderText: string = indexPageData.section.fixtures.header.text;
        //const sectionBodyClass: string = indexPageData.section.fixtures.body.class;
       // const secionBodyText: string = indexPageData.section.fixtures.body.text;
        
        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionData.id);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(
            sectionData.header.class, sectionData.header.text
        );
        //assert section body text is visible:
        await indexPage.assertTextIsVisible(
            sectionData.body.class, sectionData.body.text
        );
    });

    test('Assert fixtures and results content', async()=>{
        //grab fixture vars:
        //const fixtureResults = indexPageData.section.fixtures.body.results.content;
        //const fixtureClass: string = indexPageData.section.fixtures.body.results.class;
        //asserts a team's img src:
        const assertTeamImgSrc = async(team:{logo:{src:string; alt:string;}})=>{
            await indexPage.assertImgSrc(
                sectionData.body.results.class, team.logo.alt, team.logo.src
            );
        };
        //spin throgh fixture results:
        for(const fixtureResult of sectionData.body.results.content){
            //assert team's img sources:
            assertTeamImgSrc(fixtureResult.home_team.team);
            assertTeamImgSrc(fixtureResult.away_team.team);

            //assert that content for each fixture is visible:
            await indexPage.assertFixtureResultContentIsVisible(
                sectionData.body.results.class,
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
    const sectionData = indexPageData.section.admin;

    test('Assert admin section', async()=>{
        //grab section vars:
        //##??????????????
        //const adminSection =  indexPageData.section.admin;
        //const sectionId: string = indexPageData.section.admin.id;
        //const sectionHeaderClass: string = indexPageData.section.admin.header.class;
        //const sectionHeaderText: string = indexPageData.section.admin.header.text;
        //const sectionBodyClass: string = indexPageData.section.admin.body.class;
        //const secionBodyText: string = indexPageData.section.admin.body.text;
        
        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionData.id);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(
            sectionData.header.class, sectionData.header.text
        );
        //assert section body text is visible:
        await indexPage.assertTextIsVisible(
            sectionData.body.class, sectionData.body.text
        );
    });

    test('Assert admin staff content', async()=>{
        const adminStaff = sectionData.body.staff;
        //const adminClass: string = indexPageData.section.admin.body.class;

        //spin through each staff member:
        for(const member of Object.keys(adminStaff).map(key=>adminStaff[key])){
            //assert member's image src:
            await indexPage.assertImgSrc(
                sectionData.body.class, member.img.alt, member.img.src
            );
            //assert that member's content is visible:
            await indexPage.assertAdminContentIsVisible(
                sectionData.body.class, 
                member.title, 
                member.img.alt,
                member.name,
                member.text
            );
        }
    });
});

test.describe('Testing Comments Section', ()=>{
    const sectionData = indexPageData.section.comments;
   
    test('Assert comments section', async()=>{
        
        //grab section vars:
        //const sectionId: string = indexPageData.section.comments.id;
       // const sectionHeaderClass: string = indexPageData.section.comments.header.class;
        //const sectionHeaderText: string = indexPageData.section.comments.header.text;
        //const sectionBodyClass: string = indexPageData.section.comments.body.class;
        const commentFormData = sectionData.body.form;
        
        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionData.id);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(
            sectionData.header.class, sectionData.header.text
        );
        //assert handle input field:
        await indexPage.assertInputField(
            commentFormData.handle_input.id, 
            commentFormData.handle_input.placeholder, 
            commentFormData.handle_input.maxlength
        );
        //assert comment input field:
        await indexPage.assertInputField(
            commentFormData.comment_input.id, 
            commentFormData.comment_input.placeholder, 
            commentFormData.comment_input.maxlength
        );
        //assert comment form is visible:
        await indexPage.assertCommentFormIsVisible(
            sectionData.body.class, 
            commentFormData.handle_input.placeholder, 
            commentFormData.comment_input.placeholder,
            commentFormData.button.text
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
            commentClass, dateText, likeBtnClass, likeBtnUnlikedClass, likeBtnLikedClass, likesClass
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
