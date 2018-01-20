module.exports =
[
  {
    "_id": "1",
    "username": "User1",
    "email": "user1@google.com",
    "status": "active", // active | suspended | disabled
    "registeredTimestamp": 1514362064916,
    "subscriptionEndTimestamp": 1516954126536,
    "additionalInfo": {
      "customField1": "customValue1"
    }
  },
  {
    "_id": "2",
    "username": "User2",
    "email": "user2@google.com",
    "status": "disabled", // active | suspended | disabled
    "registeredTimestamp": 1514362064916,
    "subscriptionEndTimestamp": 1516954126536,
    "additionalInfo": {
      "customField1": "customValue1"
    }
  },
  {
    "_id": "3",
    "username": "User3",
    "email": "user2@google.com",
    "status": "suspended", // active | suspended | disabled
    "registeredTimestamp": 1514362064916,
    "subscriptionEndTimestamp": 1516000000000,
    "additionalInfo": {
      "customField1": "customValue1"
    }
  }
];
