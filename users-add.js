'use strict';

// eslint-disable-next-line no-undef
const util = require( 'util' );

// eslint-disable-next-line no-undef
const restify = require( 'restify-clients' );

var client = restify.createJsonClient( {
  // eslint-disable-next-line no-undef
  url: 'http://localhost:' + process.env.PORT,
  version: '*'
} );
//                        D4ED43C0-8BD6-4FE2-B358-7C0E230D11EF
client.basicAuth( 'them', 'D4ED43C0-8BD6-4FE2-B358-7C0E230D11EF' );

client.post( '/create-user', {
  username: "ant", password: "ant", provider: "local",
  familyName: "Einarrsdottir", givenName: "Ashildr", middleName: "",
  emails: [], photos: []
},
  ( err, req, res, obj ) => {
    if ( err ) console.error( err.stack );
    else console.log( 'Created ' + util.inspect( obj ) );
  } );