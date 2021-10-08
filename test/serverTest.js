describe( 'Express.js server app', () => {
    it( 'should understand basic mathematical principles', ( done ) => {
        if (5 === 5) {
            done();
        } else {
            done( new Error( 'An error occured!' ) );
        }
    } );
} );
