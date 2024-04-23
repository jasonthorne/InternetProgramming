import {sectionData} from '../data/section-data';
import {teamData} from '../data/team-data';

export const indexPageData = {
    url: 'https://lorem-ipsum-fc.web.app',
    title: 'Lorem Ipsum F.C.',
    navbar: {
        logo: {
            id: '#navbar-logo',
            img: {
                src: teamData.lorem_ipsum.logo.src,
                alt: teamData.lorem_ipsum.logo.alt
            },
            span: {text: 'Est. 2022'}
        },
        nav: {
            class: '.navbar-nav',
            links: [
                {href: '#news-updates-section', text: 'News'},
                {href: '#fixtures-section', text: 'Fixtures'},
                {href: '#admin-section', text: 'Administration'},
                {href: '#comments-section', text: 'Comments'}
            ]
        }
    },
    hero: {
        id: '#hero',
        img: {src: 'img/pitch/pitch.jpg'},
        title: {
            id: '#hero-title',
            text: 'Lorem Ipsum F.C.'
        }
    },
    section: {
        news_updates: {
            id: '#news-updates-section',
            header: {
                class: '.section-header',
                text: 'NEWS & UPDATES'
            },
            body: {
                class: '.section-body',
                content: sectionData.news_updates
            }
        },
        fixtures: {
            id: '#fixtures-section',
            header: {
                class: '.section-header',
                text: 'FIXTURES & RESULTS'
            },
            body: {
                class: '.section-body',
                text: sectionData.fixtures.text,
                results: {
                    class: '.fixture-grid-container',
                    content: sectionData.fixtures.results
                }
            }
        },
        admin: {
            id: '#admin-section',
            header: {
                class: '.section-header',
                text: 'ADMINISTRATION'
            },
            body: {
                class: '.section-body',
                text: sectionData.admin.text,
                staff: sectionData.admin.staff
            }
        },
        comments: {
            id: '#comments-section',
            header: {
                class: '.section-header',
                text: 'COMMENTS'
            },
            body: {
                class: '.section-body',
                comment_form: {
                    id: '#comment-form',
                    handle_input: {
                        id: '#handle-input',
                        placeholder: 'Name',
                        maxlength: '50'
                    },
                    comment_input: {
                        id: '#comment-input',
                        placeholder: 'Comment',
                        maxlength: '1000'
                    },
                    comment_button: {
                        id: '#comment-btn',
                        text: 'Post Comment'
                    }
                }
            }
        }
    }
} as const;