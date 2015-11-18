PlayerList = new Mongo.Collection('players');


if (Meteor.isClient) {



	Template.leaderboard.helpers({
	    'player': function(){
	        return PlayerList.find()
	    }
	});

	Template.addPlayerForm.events({
            'submit form': function(event){
                    event.preventDefault();
                    var playerNameVar = event.target.playerAddName.value;
                    PlayerList.insert({
                    name: playerNameVar,
                    score: 0
                        });
                }
        })

}