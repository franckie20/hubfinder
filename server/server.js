if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
        if (hubSkills =null){

            hubSkills = new Meteor.Collection("hubSkills");
            hubSkills.insert(
                [
                    { name: " java ", description: "oop taal", gebruiker: " server", aantalAanwezig: 1 },
                    { name: " .NET ", description: "oop taal", gebruiker: " server", aantalAanwezig: 1 },
                    { name: " HTML ", description: "oop taal", gebruiker: " server", aantalAanwezig: 1 },
                    { name: " PYTHON ", description: "oop taal", gebruiker: " server", aantalAanwezig: 1 }
                ],
                { ordered: false }
            )


        //testttttteeee


        }

    });
}

/*Meteor.methods({
    updateFrequency : function(letter,frequency){
        Letters.update({letter:letter},
            {$set:{frequency:frequency}});
    }
});
    */