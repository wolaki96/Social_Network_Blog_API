const users = [
    {
        "username": "Iia_Wolak",
        "email": "itsme@gmail.com",
        "thoughts": [],
        "friends": [],
        "__v": 0
      },
      {
        "username": "Katie.Seed",
        "email": "friendo@friends.com",
        "thoughts": [],
        "friends": [],
        "__v": 0
      },
      {
      "username": "Emmett__White",
      "email": "boyfriendo@friends.com",
      "thoughts": [],
      "friends": [],
      "__v": 0
      }
    ];
    const comments = [
        {
          "commentText": "Wow today was tough...",
          "username": "Iia_Wolak",
          "createdAt": "2022-11-30T09:38:12.076+00:00",
          "replies": [
            {
              "replyBody": "Tell me about it :/",
              "username": "Emmett__White",
              "replyId": "",
              "createdAt": "",
            }
          ],
          "__v": 0
        },
    
      ];
      
      // Export the functions for use in seed.js
      module.exports = { users, comments };