import {sectionData} from '../data/section-data';
import {teamData} from '../data/team-data';
import {commentData} from '../data/comment-data';
import {footerData} from './footer-data';

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
            span: {
                text: 'Est. 2022',
                hidden_width: 767
            }
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
                form: {
                    id: '#comment-form',
                    handle_input: {
                        id: '#handle-input',
                        placeholder: 'Name',
                        maxlength: '50',
                        tooltip: {text: 'Enter Name'},
                    },
                    comment_input: {
                        id: '#comment-input',
                        placeholder: 'Comment',
                        maxlength: '1000',
                        tooltip: {text: 'Enter Comment'},
                    },
                    button: {
                        id: '#comment-btn',
                        text: 'Post Comment'
                    }
                },
                comments: {id: '#comments'}
            }
        }
    },
    modal: {
        create_comment: {
            id: '#comment-modal',
            header: {
                class: '.modal-header',
                text: 'Confirm'
            },
            body: {
                class: '.modal-body',
                handle: {
                    id: '#modal-handle',
                    span: {id: '#modal-handle-input'}
                },
                comment: {
                    id: '#modal-comment',
                    span: {id: '#modal-comment-input'}
                }
            },
            footer: {
                class: '.modal-footer',
                submit_button: {text: 'Submit'},
                cancel_button: {text: 'Cancel'}
            }
        },
        delete_comment: {
            id: '#delete-comment-modal',
            header: {
                class: '.modal-header',
                text: 'Confirm'
            },
            body: {
                class: '.modal-body',
                text: 'Delete comment?'
            },
            footer: {
                class: '.modal-footer',
                delete_button: {text: 'Delete'},
                cancel_button: {text: 'Cancel'}
            }
        }
    },
    comment: {
        class: '.comment',
        title: {
            likes: {class: '.comment-likes'},
            handle: {class: '.comment-handle'}
        },
        text: {class: '.comment-text'},
        date: {class: '.date-text'},
        like_button: {
            class: '.comment-like-btn',
            text: 'Like',
            icon: {
                liked: {class: '.fas'},
                unliked: {class: '.far'}
            }
        },
        delete_button: {
            class: '.comment-delete-btn',
            text: 'Delete'
        },
        content: {
            handle: commentData.handle,
            comment: commentData.comment
        }
    },
    footer: {
        selector: 'footer',
        creator:{
            text: footerData.creator.text,
            id: '#footer-attributes',
            links: [
                {
                    source: footerData.creator.link.github,
                    icon: {class: '.fa-github-square'}
                },
                {
                    source: footerData.creator.link.linkedin,
                    icon: {class: '.fa-linkedin'}
                }
            ]
        },
        pitch: footerData.pitch,
        team_and_staff: footerData.team_and_staff,
        footer_and_comment: footerData.footer_and_comment
    }
} as const;