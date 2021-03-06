angular.module('gdgXBoomerang')
.factory('Config', function () {
    return {
        // TODO Modify these to configure your app
        'name'          : 'GDG Ghana',
        'id'            : '117620641470438104052',
        'googleApi'     : 'AIzaSyDiLo2hSYg65hqbWqkk7k_uGmybjI7SpwQ',
        'pwaId'         : '5984308345831533409', // Picasa Web Album id, must belong to Google+ id above
        'domain'        : 'gdgghana.com',
        'twitter'       : 'GDGGhana',
        'facebook'      : '',
        'meetup'        : '',
        // Change to 'EEEE, MMMM d, y - H:mm' for 24 hour time format.
        'dateFormat'    : 'EEEE, MMMM d, y - H:mm ',
        'cover' : {
            title: 'Join the Official Mailing List',
            subtitle: 'Please take a moment to briefly tell us about yourself and your projects',
            button: {
                text: 'Join Now',
                url: 'https://docs.google.com/forms/d/1wqX7GDMWXWDcXfGkeD29rsvxfrca2V2D1rtM3tyC8b8/viewform?c=0&w=1'
            }

        },
        'activities': {
            techTalks: true,
            codeLabs: true,
            hackathons: true,
            devFests: true,
            appClinics: true,
            panels: true,
            designSprints: true,
            roundTables: true
        }
        // To update the snippet which is used for sharing, see the TODO in the index.html.
    };
});
