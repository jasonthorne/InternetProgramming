
class Link{
    constructor(
        readonly href: string,
        readonly text: string
    ){}
}

class Host{
    constructor(readonly link: Link){}
}

export const footerData = {
    creator: {
        text: 'Made by Jason Thorne. 2022',
        link:{
            github: {href: 'https://github.com/jasonthorne/LoremIpsumFC'},
            linkedin: {href: 'https://www.linkedin.com/in/jason-thorne-dev'}
        }
    },
    pitch: {
        text: 'Pitch Image by Rudy and Peter Skitterians from Pixabay',
        link: new Link(
            'https://pixabay.com/users/skitterphoto-324082/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1269438',
            'Rudy and Peter Skitterians'
        ),
        host: new Host(
            new Link(
               'https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1269438',
               'Pixabay'
            )
        )
    },
    team_and_staff: {
        text: 'Team and Staff Icons made by Freepik from www.flaticon.com',
        link: new Link(
            'https://www.freepik.com',
            'Freepik'
        ),
        host: new Host(
            new Link(
                'https://www.flaticon.com',
               'www.flaticon.com'
            )
        )
    },
    footer_and_comment: {
        text: 'Footer and Comment Icons from Font Awesome',
        link: new Link(
            'https://fontawesome.com',
            'Font Awesome'
        )
    }
} as const;