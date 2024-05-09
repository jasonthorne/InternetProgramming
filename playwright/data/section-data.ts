import {teamData, teamType} from '../data/team-data';
import {staffData} from '../data/staff-data';

class NewsUpdate{
    constructor(
        readonly heading: string,
        readonly text: string
    ){}
}

class Result{
    constructor(
        readonly home_team: ResultTeam,
        readonly away_team: ResultTeam
    ){}
}

class ResultTeam{
    constructor(
        readonly team: teamType,
        readonly score: string
    ){}
}

export const sectionData = {
    news_updates: [
        new NewsUpdate(
            'Lorem ipsum dolor sit amet', 
            `Mauris purus nunc, laoreet a bibendum vel, venenatis id felis. 
            Proin pulvinar finibus tristique. Quisque nisl ipsum, tristique non vulputate vitae, congue at nulla. 
            Donec ultrices pharetra diam, et mollis nisl sodales a. Sed viverra vitae metus ultrices elementum. 
            Fusce rutrum odio at arcu rhoncus efficitur. Sed id tellus vitae justo consectetur mattis. 
            Suspendisse eu urna eget nulla malesuada rhoncus non eget metus. 
            Duis fringilla erat arcu, nec sagittis odio commodo in. Aliquam mattis leo at dolor feugiat, vel porttitor quam gravida. 
            Mauris imperdiet sollicitudin nulla.`
        ),
        new NewsUpdate(
            'Phasellus vel mauris mi', 
            `Curabitur eget commodo lacus. 
            Proin fermentum, mauris sit amet sollicitudin pharetra, mi leo tincidunt velit, eget semper justo turpis ut orci. 
            Vestibulum vehicula consectetur metus ac vehicula. Cras nec placerat justo. Aenean vitae nulla enim. 
            Praesent sollicitudin dui eget quam semper molestie. 
            Pellentesque sollicitudin consectetur tincidunt.`
        ),
        new NewsUpdate(
            'Sed ultricies elementum justo in egestas', 
            `Sed ornare est ac gravida tincidunt. 
            Phasellus maximus ligula in turpis posuere euismod. Proin at iaculis ipsum, a malesuada metus. 
            Duis at erat id neque cursus condimentum tristique sit amet dui. Sed vel iaculis odio. 
            Sed sed erat eu augue molestie tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Phasellus a purus sem.`
        ),
        new NewsUpdate(
            'Nam vitae commodo leo', 
            `Quisque consequat porta dolor, vitae imperdiet arcu aliquam ut. 
            In neque elit, finibus ac turpis vel, consequat varius tellus. Proin ornare tortor id diam condimentum mollis. 
            Aliquam erat volutpat. Pellentesque pharetra libero vel venenatis ornare. 
            Mauris aliquam, erat ut sollicitudin mattis, nisi mi pulvinar libero, et dictum enim ligula vitae augue.`
        )
    ],
    fixtures: {
        text: 'Donec pretium sed nisl sodales commodo. Aenean lectus nisl, condimentum at dictum suscipit, eleifend sit amet ante.',
        results: [
            new Result(
                new ResultTeam(teamData.lorem_ipsum, '9'),
                new ResultTeam(teamData.sed_sit_amet,'0')
            ),
            new Result(
                new ResultTeam(teamData.aliquam_dictum, '2'),
                new ResultTeam(teamData.nunc_lacus, '1')
            ),
            new Result(
                new ResultTeam(teamData.pellentesque, '0'),
                new ResultTeam(teamData.diam_arcu, '0')
            ),
            new Result(
                new ResultTeam(teamData.maecenas, '1'),
                new ResultTeam(teamData.donec_vitae, '0')
            ),
            new Result(
                new ResultTeam(teamData.ultricies_turpis, '1'),
                new ResultTeam(teamData.vestibulum, '1')
            ),
            new Result(
                new ResultTeam(teamData.et_lacus_id, '3'),
                new ResultTeam(teamData.suspendisse, '2')
            )
        ]
    },
    admin: {
        text: `Ut sagittis urna nec eros maximus, in iaculis lacus sollicitudin. Suspendisse in dui et mi cursus fermentum quis et nulla. 
        Donec bibendum ipsum nec lacinia consectetur. Phasellus rutrum est at est iaculis, in venenatis dui placerat. 
        Proin tempor felis justo, vel dapibus erat semper at. Mauris nec libero et dolor gravida cursus. 
        Ut id ligula volutpat, ultrices lorem vitae, consectetur nulla. Donec sit amet ex et ligula fermentum placerat. Nulla facilisi.`,
        staff: {
            chairperson: staffData.chairperson,
            secretary: staffData.secretary,
            treasurer: staffData.treasurer
        }
    }
} as const;