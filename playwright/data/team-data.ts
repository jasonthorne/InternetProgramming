
class Team{
    constructor(
        readonly name: string, 
        readonly logo: Logo
    ){}
}

class Logo{
    readonly src: string = `img/teams/${this.imgName}.png`;
    readonly alt: string = `${this.altName} logo`;
    
    constructor(
        readonly imgName: string, 
        readonly altName: string
    ){}
}

export const teamData = {
    lorem_ipsum: new Team(
        'Lorem Ipsum',
        new Logo(
            'Lorem-Ipsum', 
            'Lorem Ipsum'
        )
    ),
    sed_sit_amet: new Team(
        'Sed Sit Amet',
        new Logo(
            'Sed-Sit-Amet', 
            'Sed Sit Amet'
        )
    ),
    aliquam_dictum: new Team(
        'Aliquam Dictum',
        new Logo(
            'Aliquam-Dictum', 
            'Aliquam Dictum'
        )
    ),
    nunc_lacus: new Team(
        'Nunc Lacus',
        new Logo (
            'Nunc-Lacus', 
            'Nunc Lacus'
        )
    ),
    pellentesque: new Team(
        'Pellentesque',
        new Logo(
            'Pellentesque',
            'Pellentesque'
        )
    ),
    diam_arcu: new Team(
        'Diam Arcu',
        new Logo(
            'Diam-Arcu',
            'Diam Arcu'
        )
    ),
    maecenas: new Team(
        'Maecenas',
        new Logo(
            'Maecenas',
            'Maecenas'
        )
    ),
    donec_vitae: new Team(
        'Donec Vitae',
        new Logo(
            'Donec-Vitae',
            'Donec Vitae'
        )
    ),
    ultricies_turpis: new Team(
        'Ultricies Turpis',
        new Logo(
            'Ultricies-Turpis',
            'Ultricies Turpis'
        )
    ),
    vestibulum: new Team(
        'Vestibulum',
        new Logo(
            'Vestibulum',
            'Vestibulum'
        )
    ),
    et_lacus_id: new Team(
        'Et Lacus Id',
        new Logo(
            'Et-Lacus-Id',
            'Et Lacus Id'
        )
    ),
    suspendisse: new Team(
        'Suspendisse',
        new Logo(
            'Suspendisse',
            'Suspendisse'
        )
    )
 } as const;