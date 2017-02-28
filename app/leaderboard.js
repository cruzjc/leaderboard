PlayerList=new Mongo.Collection('players');

console.log("hello cruel world")

if(Meteor.isClient){
  console.log("Hello client");
  Template.leaderboard.helpers({
    'player': function(){
      return PlayerList.find();
    },

    'otherHelperFunction': function(){
      return "Some other function";
    },

    'selectedClass': function(){
      var playerId = this._id;
      var selectedPlayer = Session.get('selectedPlayer');
      if(playerId == selectedPlayer){
        return "selected"
      }
    }
  });

  Template.leaderboard.events({
    'click .player': function(){
      console.log("You clicked a .player element");
      var playerId = this._id;
      Session.set('selectedPlayer', playerId);
      var selectedPlayer = Session.get('selectedPlayer');
      console.log(selectedPlayer);
    }
  });


}

if(Meteor.isServer){
  console.log("Hello server");
}