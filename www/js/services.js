angular.module('starter.services', [])


.factory('Stats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var stats = [{
    id: 0,
    name: 'Steps Taken',
    subtitle: 'How many steps taken',
    value:555
  }, {
    id: 1,
    name: 'Activity',
    subtitle: 'How active you\'ve been',
    value:21
  }];

  return {
    all: function() {
      return stats;
    },
    remove: function(stat) {
      stats.splice(stats.indexOf(stat), 1);
    },
    get:function(statID) {
      // Look up the ID in stuff and either return that record or null
      // This variable will be returned after the forEach loop. It is null incase the ID doesn't exist
      var match = null;

      // As stuff is an Array, use a standard Array.prototype.forEach loop
      stats.forEach(function(stat) {
        // Compare this record's ID with the id argument passed to the Stuff.id function
        // If it matches, set the match variable to the entire record
        if (stat.id == statID) match = stat;
      });
      return match;
    }
  }
})

.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
});
