
//see : https://www.youtube.com/watch?v=TMKj0BxzVgw&t=23s

module.exports = (grunt)=> {

    //----- The Basics  -----
    grunt.registerTask('speak', ()=> {
        console.log("I'm speaking. : this is a test");
    });
    //in terminal : grunt speak

    grunt.registerTask('yell', ()=> {
        console.log("I'm yelling! : this is also a test");
    });
    //in terminal : grunt yell


    grunt.registerTask('both', ['speak', 'yell']);
    // in terminal : grunt both

    grunt.registerTask('default', ['speak', 'yell'])
    // in terminal : grunt --> no need for anything behind grunt in term
    //----- -----   -----   -----

};