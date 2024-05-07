import {teamData} from '../data/team-data';
import {staffData} from '../data/staff-data';

export const sectionData = {
    news_updates: [
        {
            heading: 'Lorem ipsum dolor sit amet', 
            text: `Mauris purus nunc, laoreet a bibendum vel, venenatis id felis. 
            Proin pulvinar finibus tristique. Quisque nisl ipsum, tristique non vulputate vitae, congue at nulla. 
            Donec ultrices pharetra diam, et mollis nisl sodales a. Sed viverra vitae metus ultrices elementum. 
            Fusce rutrum odio at arcu rhoncus efficitur. Sed id tellus vitae justo consectetur mattis. 
            Suspendisse eu urna eget nulla malesuada rhoncus non eget metus. 
            Duis fringilla erat arcu, nec sagittis odio commodo in. Aliquam mattis leo at dolor feugiat, vel porttitor quam gravida. 
            Mauris imperdiet sollicitudin nulla.`
        },
        {
            heading: 'Phasellus vel mauris mi', 
            text: `Curabitur eget commodo lacus. 
            Proin fermentum, mauris sit amet sollicitudin pharetra, mi leo tincidunt velit, eget semper justo turpis ut orci. 
            Vestibulum vehicula consectetur metus ac vehicula. Cras nec placerat justo. Aenean vitae nulla enim. 
            Praesent sollicitudin dui eget quam semper molestie. 
            Pellentesque sollicitudin consectetur tincidunt.`
        },
        {
            heading: 'Sed ultricies elementum justo in egestas', 
            text: `Sed ornare est ac gravida tincidunt. 
            Phasellus maximus ligula in turpis posuere euismod. Proin at iaculis ipsum, a malesuada metus. 
            Duis at erat id neque cursus condimentum tristique sit amet dui. Sed vel iaculis odio. 
            Sed sed erat eu augue molestie tincidunt. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. 
            Phasellus a purus sem.`
        },
        {
            heading: 'Nam vitae commodo leo', 
            text: `Quisque consequat porta dolor, vitae imperdiet arcu aliquam ut. 
            In neque elit, finibus ac turpis vel, consequat varius tellus. Proin ornare tortor id diam condimentum mollis. 
            Aliquam erat volutpat. Pellentesque pharetra libero vel venenatis ornare. 
            Mauris aliquam, erat ut sollicitudin mattis, nisi mi pulvinar libero, et dictum enim ligula vitae augue.`
        }
    ],
    fixtures: {
        text: 'Donec pretium sed nisl sodales commodo. Aenean lectus nisl, condimentum at dictum suscipit, eleifend sit amet ante.',
        results: [
            {
                home_team: {
                    team: teamData.lorem_ipsum,
                    score: '9'
                },
                away_team: {
                    team: teamData.sed_sit_amet,
                    score: '0'
               }
            },
            {
                home_team: {
                    team: teamData.aliquam_dictum,
                    score: '2'
                },
                away_team: {
                   team: teamData.nunc_lacus,
                    score: '1'
               }
            },
            {
                home_team: {
                    team: teamData.pellentesque,
                    score: '0'
                },
                away_team: {
                   team: teamData.diam_arcu,
                    score: '0'
               }
            },
            {
                home_team: {
                    team: teamData.maecenas,
                    score: '1'
                },
                away_team: {
                   team: teamData.donec_vitae,
                    score: '0'
               }
            },
            {
                home_team: {
                    team: teamData.ultricies_turpis,
                    score: '1'
                },
                away_team: {
                   team: teamData.vestibulum,
                    score: '1'
               }
            },
            {
                home_team: {
                    team: teamData.et_lacus_id,
                    score: '3'
                },
                away_team: {
                   team: teamData.suspendisse,
                    score: '2'
               }
            }
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