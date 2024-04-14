export const indexPageData = {
    url: 'https://lorem-ipsum-fc.web.app',
    title: /Lorem Ipsum F.C./,
    navbar: {
        logo: {
            id: '#navbar-logo',
            img: {
                src: 'img/teams/Lorem-Ipsum.png',
                alt: 'Lorem Ipsum logo'
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
            body: {class: '.section-body'}
        },
        fixtures: {
            id: '#fixtures-section',
            header: {
                class: '.section-header',
                text: 'FIXTURES & RESULTS'
            },
            body: {class: '.section-body'}
        },
        admin: {
            id: '#admin-section',
            header: {
                class: '.section-header',
                text: 'ADMINISTRATION'
            },
            body: {class: '.section-body'}
        },
        comments: {
            id: '#comments-section',
            header: {
                class: '.section-header',
                text: 'COMMENTS'
            },
            body: {class: '.section-body'}
        }
    }
} as const;