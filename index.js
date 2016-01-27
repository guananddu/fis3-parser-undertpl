const _ = require( 'underscore' );

module.exports = function ( content, file, settings ) {

    // merge configuration
    _.extend( _.templateSettings, settings );

    return _.template( content.toString() ).source;

};