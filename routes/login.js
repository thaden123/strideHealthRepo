var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login', { title: 'Login' });
});

module.exports = router;



var options = {
    clientUserId: encodeURIComponent('UNIQUE_ID_FOR_YOUR_USER'),
    clientId: 'CLIENT_ID', // grab it from app settings page
    publicToken: '',  // Leave blank for new users

    finish: function(err, sessionTokenObject) {
        /* Called after user finishes connecting their health data
         You need to post `sessionTokenObject` to your server to then:
         1. Append your `clientSecret` to it
         2. Send send it to our server for user credentials

         Sending a POST request with jQuery might look like this
         (it's not necessary to use jQuery):
         */
        $.post('/your-servers-endpoint', sessionTokenObject, function(res){

        });

        // Include code here to refresh the page.

    },
    close: function() {
        /* Optional callback called when a user closes the popup
         without connecting any data sources */
    },
    error: function(err) {
        /* Optional callback called if an error occurs when loading
         the popup. */

        // `err` has fields: `code`, `message`, `detailedMessage`
    }
}
