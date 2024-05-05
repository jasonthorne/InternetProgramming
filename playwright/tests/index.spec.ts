import {test} from '@playwright/test';
import {IndexPage} from '../pages/index-page';
import {indexPageData} from '../data/index-page-data';

let indexPage: IndexPage;

test.beforeEach(async({page})=>{
    await page.goto(indexPageData.url);
    indexPage = new IndexPage(page);
});
/*
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
        //assert section is visible:
        await indexPage.assertElementIsVisible(sectionData.id);
        //assert section header is visible:
        await indexPage.assertTextIsVisible(
            sectionData.header.class, sectionData.header.text
        );
    });

    test('Assert news and updates content', async()=>{
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
        //asserts a team's img src:
        const assertTeamImgSrc = async(team:{logo:{src:string; alt:string;}})=>{
            await indexPage.assertImgSrc(
                sectionData.body.results.class, team.logo.alt, team.logo.src
            );
        };
        //spin throgh fixture results:
        for(const result of sectionData.body.results.content){
            //assert team's img sources:
            assertTeamImgSrc(result.home_team.team);
            assertTeamImgSrc(result.away_team.team);

            //assert that content for each fixture is visible:
            await indexPage.assertFixtureResultContentIsVisible(
                sectionData.body.results.class,
                {
                    logo: result.home_team.team.logo.alt,
                    name: result.home_team.team.name,
                    score: result.home_team.score
                },
                {
                    logo: result.away_team.team.logo.alt,
                    name: result.away_team.team.name,
                    score: result.away_team.score
                }
            );
        }
    });
});

test.describe('Testing Admin Section', ()=>{
    const sectionData = indexPageData.section.admin;

    test('Assert admin section', async()=>{
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
        const staff = sectionData.body.staff;

        //spin through each staff member:
        for(const member of Object.keys(staff).map(key=>staff[key])){
            //assert member's image src:
            await indexPage.assertImgSrc(
                sectionData.body.class, member.img.alt, member.img.src
            );
            //assert that member's content is visible:
            await indexPage.assertAdminContentIsVisible(
                sectionData.body.class, 
                {
                    title: member.title, img: member.img.alt, 
                    name: member.name, text: member.text
                } 
            );
        }
    });
});

test.describe('Testing Comments Section', ()=>{
    const sectionData = indexPageData.section.comments;
    const commentFormData = sectionData.body.form;
    const commentData = indexPageData.comment;
   
    test('Assert comments section', async()=>{
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
            {
                handle: commentFormData.handle_input.placeholder, 
                comment: commentFormData.comment_input.placeholder,
                button: commentFormData.button.text
            }
        );
    });

    test('Assert comment creation and deletion', async()=>{
        const createCommentModalData = indexPageData.modal.create_comment;
        const deleteCommentModalData = indexPageData.modal.delete_comment;
        const dateNow: string = new Date(
            Math.floor(Date.now())).toLocaleString('en-GB').slice(0,-3);
        
        //enter valid handle:
        await indexPage.enterInputFieldText(
            commentFormData.handle_input.id, commentData.content.handle
        );
        //enter valid comment:
        await indexPage.enterInputFieldText(
            commentFormData.comment_input.id, commentData.content.comment
        );
        //click 'post comment' button:
        await indexPage.clickButton(
            sectionData.body.class, commentFormData.button.text
        );
        //assert confirmation modal is visible:
        await indexPage.assertCommentModalIsVisible(
            createCommentModalData.id, 
            createCommentModalData.header.text, 
            commentData.content.handle, 
            commentData.content.comment,
            createCommentModalData.footer.submit_button.text, 
            createCommentModalData.footer.cancel_button.text
        );
        //click 'submit' button:
        await indexPage.clickButton(
            createCommentModalData.footer.class,
            createCommentModalData.footer.submit_button.text
        );
        //assert confirmation modal is gone:
        await indexPage.assertElementIsHidden(
            createCommentModalData.id
        );
        //confirm created comment is visible:
        await indexPage.assertCommentIsVisible(
            commentData.class, 
            commentData.title.likes.class, 
            commentData.content.handle, 
            commentData.content.comment,
            dateNow,
            commentData.like_button.text, 
            commentData.delete_button.text 
        );
        //assert like button clicks:
        await indexPage.assertLikeBtnClicks(
            commentData.class,
            dateNow,
            commentData.like_button.class, 
            commentData.like_button.unliked.class, 
            commentData.like_button.liked.class, 
            commentData.title.likes.class
        );
    
        //click 'delete' button:
        await indexPage.clickButton(
            commentData.class, commentData.delete_button.text
        );
        //assert confirmation modal is visible:
        await indexPage.assertDeleteCommentModalIsVisible(
            deleteCommentModalData.id,
            deleteCommentModalData.header.text,
            deleteCommentModalData.body.text,
            deleteCommentModalData.footer.delete_button.text,
            deleteCommentModalData.footer.cancel_button.text
        );
        //click 'delete' button:
        await indexPage.clickButton(
            deleteCommentModalData.footer.class,
            deleteCommentModalData.footer.delete_button.text
        );
        //assert confirmation modal is gone:
        await indexPage.assertElementIsHidden(
            deleteCommentModalData.id
        );
        //assert created comment is gone:
        await indexPage.assertCommentIsHidden(
            commentData.class, 
            commentData.content.handle, 
            commentData.content.comment,
            dateNow,
            commentData.like_button.text, 
            commentData.delete_button.text 
        );
    });

    test('Assert tooltip on comment creation with no handle', async()=>{
        //enter valid comment:
        await indexPage.enterInputFieldText(
            commentFormData.comment_input.id, 
            commentData.content.comment
        );
        //click 'post comment' button:
        await indexPage.clickButton(
            sectionData.body.class, commentFormData.button.text
        );
        //assert tooltip for handle input:
        await indexPage.assertTooltipIsVisible(
            commentFormData.handle_input.tooltip.text
        );
    });

    test('Assert tooltip on comment creation with no comment', async()=>{
        //enter valid handle:
        await indexPage.enterInputFieldText(
            commentFormData.handle_input.id, 
            commentData.content.handle
        );
        //click 'post comment' button:
        await indexPage.clickButton(
            sectionData.body.class, commentFormData.button.text
        );
        //assert tooltip for comment input:
        await indexPage.assertTooltipIsVisible(
            commentFormData.comment_input.tooltip.text
        );
    });

    test('Assert tooltips on comment creation with no handle & no comment', async()=>{
        //click 'post comment' button:
        await indexPage.clickButton(
            sectionData.body.class, commentFormData.button.text
        );
        //assert tooltip for handle input:
        await indexPage.assertTooltipIsVisible(
            commentFormData.handle_input.tooltip.text
        );
        //assert tooltip for comment input:
        await indexPage.assertTooltipIsVisible(
            commentFormData.comment_input.tooltip.text
        );
    });
});
*/
test.describe('Testing Footer', ()=>{
    const footerData = indexPageData.footer;

    test('Assert creator attribute', async()=>{
        const creatorData = footerData.attribute.creator;
        //assert creator text is visible:
        await indexPage.assertTextIsVisible(footerData.selector, creatorData.text);
        //assert github link:



        /*
        //assert creator links:
        for(const link of creatorData.links){
            await indexPage.assertLinkUrl(
                footerData.selector, '', link.href
            ).then(async()=>{
                await indexPage.goBack();
            });*/
            await indexPage.goBack();
            //console.log(link.href);
        }

    });

    /*
       1) <a target="_blank" href="https://github.com/jasonth…>…</a> aka locator('#footer-attributes').getByRole('link').first()
    2) <a target="_blank" href="https://linkedin.com/in/ja…>…</a> aka locator('#footer-attributes').getByRole('link').nth(1)
    3) <a target="_blank" href="https://bit.ly/3l419Y0">↵⇆⇆⇆⇆⇆Rudy and Peter Skitterians ↵⇆⇆⇆⇆</a> aka getByRole('link', { name: 'Rudy and Peter Skitterians' })
    4) <a target="_blank" href="https://bit.ly/3l0HyYN">↵⇆⇆⇆⇆⇆Pixabay↵⇆⇆⇆⇆</a> aka getByRole('link', { name: 'Pixabay' })
    5) <a target="_blank" href="https://www.freepik.com">↵⇆⇆⇆⇆⇆Freepik ↵⇆⇆⇆⇆</a> aka getByRole('link', { name: 'Freepik' })
    6) <a target="_blank" href="https://www.flaticon.com">↵⇆⇆⇆⇆⇆www.flaticon.com↵⇆⇆⇆⇆</a> aka getByRole('link', { name: 'www.flaticon.com' })
    7) <a target="_blank" href="https://fontawesome.com">↵⇆⇆⇆⇆⇆Font Awesome↵⇆⇆⇆⇆</a> aka getByRole('link', { name: 'Font Awesome' })



    */

    /*test('Assert image attributes', async()=>{

    });*/
});