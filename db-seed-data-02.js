/*

USER modules

*/


let USERS =  [
    {
      "id": 1001,
      "email": "organizer@gamerhub.com",
      "username": "touradmin",
      "passwordHash": "$2b$12$ORG_HASH",
      "emailVerified": true,
      "status": "Active",
      "createdAt": "2026-01-01T10:00:00Z",
      "updatedAt": "2026-01-01T10:00:00Z",
      "lastLoginAt": "2026-07-01T09:30:00Z"
    },
    {
      "id": 1002,
      "email": "brand@redbull.com",
      "username": "redbullgaming",
      "passwordHash": "$2b$12$BRAND_HASH",
      "emailVerified": true,
      "status": "Active",
      "createdAt": "2026-01-02T10:00:00Z",
      "updatedAt": "2026-06-01T10:00:00Z",
      "lastLoginAt": "2026-07-01T10:30:00Z"
    },
    {
      "id": 1003,
      "email": "streamer@youtube.com",
      "username": "prostreamer",
      "passwordHash": "$2b$12$INF_HASH",
      "emailVerified": true,
      "status": "Active",
      "createdAt": "2026-01-03T10:00:00Z",
      "updatedAt": "2026-06-01T10:00:00Z",
      "lastLoginAt": "2026-07-02T11:00:00Z"
    }
  ]


let USER_PROFILE =  [
    {
      "id": 1,
      "userId": 1001,
      "firstName": "Raj",
      "lastName": "Kumar",
      "profileImage": "19010",
      "bio": "Professional Tournament Organizer",
      "createdAt": "2026-01-01T10:00:00Z",
      "updatedAt": "2026-01-01T10:00:00Z"
    },
    {
      "id": 2,
      "userId": 1002,
      "firstName": "Arjun",
      "lastName": "Mehta",
      "profileImage": "19011",
      "bio": "Gaming Brand Manager",
      "createdAt": "2026-01-01T10:00:00Z",
      "updatedAt": "2026-01-01T10:00:00Z"
    },
    {
      "id": 3,
      "userId": 1003,
      "firstName": "Vikram",
      "lastName": "Gaming",
      "profileImage": "19012",
      "bio": "BGMI Influencer",
      "createdAt": "2026-01-01T10:00:00Z",
      "updatedAt": "2026-01-01T10:00:00Z"
    }
  ]

let TOURNAMENT_ORGANIZER_DETAILS = [
    {
      "id": 2001,
      "userId": 1001,
      "mobileNumber": "9876543210",
      "governmentIdUri": "files/kyc/aadhar1001.pdf",
      "selfieVerificationUri": "files/selfie/selfie1001.jpg",
      "verificationStatus": "Verified",
      "verifiedAt": "2026-01-05T12:00:00Z",
      "createdAt": "2026-01-01T10:00:00Z",
      "updatedAt": "2026-01-05T12:00:00Z"
    }
  ]


let BRAND_DETAILS = 
[
    {
      "id": 3001,
      "userId": 1002,
      "brandName": "Red Bull Gaming",
      "mobileNumber": "9999988888",
      "websiteUrl": "https://redbull.com",
      "legalEntityIdentifier": "RBG-IND-001",
      "businessAddress": "Bangalore, India",
      "verificationStatus": "Verified",
      "createdAt": "2026-01-02T10:00:00Z",
      "updatedAt": "2026-01-10T10:00:00Z"
    }
  ]

let INFLUENCER_DETAILS = [
    {
      "id": 4001,
      "userId": 1003,
      "mobileNumber": "9000090000",
      "aboutYourself": "Professional BGMI streamer with 300K audience.",
      "accountStatus": "Active",
      "verificationStatus": "Verified",
      "createdAt": "2026-01-03T10:00:00Z",
      "updatedAt": "2026-01-10T10:00:00Z"
    }
]

/*
Tournament module
*/

let Tournament_Category = [
    
{
  "id": 8001,
  "categoryName": "BRACKETS",
  "createdAt": "2026-03-01T10:00:00Z"
}

]

let TournamentType = [
{
  "id": 8101,
  "categoryId": 8001,
  "typeName": "ROUND_ROBIN",
  "createdAt": "2026-03-01T10:05:00Z"
}
]

let SeedingType = [
{
  "id": 8201,
  "name": "Random",
  "createdAt": "2026-03-01T10:10:00Z"
}
]

let RulesCategory = [
{
  "id": 9101,
  "categoryName": "Gameplay Rules",
  "createdAt": "2026-03-15T10:00:00Z"
}
]

let TournamentRule = [
  {
    "id": 9201,
    "tournamentId": 9001,
    "categoryId": 9101,
    "ruleText": "Only registered team members can participate.",
    "createdBy": 1001,
    "createdAt": "2026-03-15T11:00:00Z",
    "updatedAt": "2026-03-15T11:00:00Z"
  },
  {
    "id": 9202,
    "tournamentId": 9001,
    "categoryId": 9101,
    "ruleText": "Use of hacks or cheats will result in disqualification.",
    "createdBy": 1001,
    "createdAt": "2026-03-15T11:05:00Z",
    "updatedAt": "2026-03-15T11:05:00Z"
  }
]

let PrizeCategory = [
{
  "id": 9301,
  "name": "FIRST_PRICE",
  "createdAt": "2026-03-16T10:00:00Z"
}
]

let SOCIAL_MEDIA_PLATFORM = 
[
    {
      "id": 1,
      "platformName": "YouTube",
      "urlPrefix": "https://youtube.com/",
      "createdAt": "2026-01-01T00:00:00Z"
    }
]

let TournamentPrize = [
  {
    "id": 9401,
    "tournamentId": 9001,
    "prizeCategoryId": 9301,
    "rankOrder": 1,
    "prizeAmount": 50000,
    "prizeDescription": "Champion Prize",
    "createdAt": "2026-03-16T11:00:00Z",
    "updatedAt": "2026-03-16T11:00:00Z"
  },
  {
    "id": 9402,
    "tournamentId": 9001,
    "prizeCategoryId": 9301,
    "rankOrder": 2,
    "prizeAmount": 25000,
    "prizeDescription": "Second Position",
    "createdAt": "2026-03-16T11:05:00Z",
    "updatedAt": "2026-03-16T11:05:00Z"
  }
]

let SOCIAL_MEDIA_ACCOUNT = 
[
    {
      "id": 5001,
      "userId": 1003,
      "platformId": 1,
      "accountName": "ProStreamerYT",
      "profileUrl": "https://youtube.com/prostreameryt",
      "followersCount": 250000,
      "subscriberCount": 250000,
      "viewSubscriptionRatio": 1.65,
      "viewCommentRatio": 0.12,
      "acceptanceStatusId": 1,
      "createdAt": "2026-01-04T10:00:00Z",
      "updatedAt": "2026-06-01T10:00:00Z"
    }
]


let TOURNAMENT_DETAILS = [
    {
      "id": 9001,
      "organizerId": 1001,
      "name": "BGMI Championship 2026",
      "description": "India Open Championship",
      "registrationStartDate": "2026-06-01T00:00:00Z",
      "registrationEndDate": "2026-06-20T00:00:00Z",
      "tournamentStartDate": "2026-07-01T00:00:00Z",
      "tournamentEndDate": "2026-07-05T00:00:00Z",
      "bannerFileId": 19001,
      "categoryId": 8001,
      "tournamentTypeId": 8101,
      "maximumTeams": 64,
      "maximumPlayersPerTeam": 4,
      "seedingTypeId": 8201,
      "entryFee": 100,
      "verificationRequired": true,
      "packageId": 8301,
      "status": "Published",
      "createdAt": "2026-03-01T10:00:00Z",
      "updatedAt": "2026-03-02T10:00:00Z"
    }
  ]

let TEAM = [
    {
      "id": 10001,
      "ownerId": 1004,
      "teamName": "Phoenix Squad",
      "teamLogoFileId": 19003,
      "createdAt": "2026-06-03T10:00:00Z",
      "updatedAt": "2026-06-03T10:00:00Z"
    }
  ]

let TEAM_MEMBERS = [
    {
      "id": 1,
      "teamId": 10001,
      "userId": 1004,
      "positionId": 1,
      "joinedAt": "2026-06-04T10:00:00Z",
      "createdAt": "2026-06-04T10:00:00Z",
      "updatedAt": "2026-06-04T10:00:00Z"
    },
    {
      "id": 2,
      "teamId": 10001,
      "userId": 1005,
      "positionId": 2,
      "joinedAt": "2026-06-04T10:20:00Z",
      "createdAt": "2026-06-04T10:20:00Z",
      "updatedAt": "2026-06-04T10:20:00Z"
    }
  ]

let TOURNAMENT_REGISTRATION = 
[
    {
      "id": 11001,
      "tournamentId": 9001,
      "teamId": 10001,
      "registrationStatusId": 1,
      "registrationDate": "2026-06-10T10:00:00Z",
      "approvedBy": 1001,
      "approvedDate": "2026-06-11T10:00:00Z",
      "createdAt": "2026-06-10T10:00:00Z",
      "updatedAt": "2026-06-11T10:00:00Z"
    }
  ]


let TOURNAMENT_REGISTRATION_PAYMENT = [
    {
      "id": 12001,
      "registrationId": 11001,
      "tournamentId": 9001,
      "participantId": 1004,
      "amount": 100,
      "paymentReference": "PAY001",
      "paymentStatus": "Success",
      "paidDate": "2026-06-10T09:00:00Z",
      "createdAt": "2026-06-10T09:00:00Z"
    },
    {
      "id": 12002,
      "registrationId": 11001,
      "tournamentId": 9001,
      "participantId": 1005,
      "amount": 100,
      "paymentReference": "PAY002",
      "paymentStatus": "Success",
      "paidDate": "2026-06-10T09:05:00Z",
      "createdAt": "2026-06-10T09:05:00Z"
    }
  ]




let CREATE_CAMPAIGN = 
[
    {
      "id": 14001,
      "brandId": 3001,
      "campaignTypeId": 1,
      "campaignName": "RedBull BGMI Push",
      "gameId": 6001,
      "startDate": "2026-06-01",
      "endDate": "2026-08-01",
      "description": "Influencer promotion campaign",
      "campaignThumbnailFileId": 19002,
      "totalBudget": 100000,
      "influencerCost": 70000,
      "additionalExpenses": 30000,
      "status": "Active",
      "createdAt": "2026-05-01T10:00:00Z",
      "updatedAt": "2026-06-01T10:00:00Z"
    }
  ]

let COLLABORATION_REQUEST = [
    {
      "id": 15001,
      "senderId": 1002,
      "receiverId": 1003,
      "campaignId": 14001,
      "title": "BGMI Sponsored Stream",
      "description": "Need 3 sponsored live streams",
      "proposedAmount": 25000,
      "status": "Accepted",
      "createdAt": "2026-06-05T10:00:00Z",
      "updatedAt": "2026-06-06T10:00:00Z"
    }
  ]

let CONVERSATION = [
    {
      "id": 21001,
      "conversationType": "Direct",
      "name": "Campaign Discussion",
      "description": "Brand and Influencer discussion",
      "groupImageFileId": null,
      "createdBy": 1002,
      "createdAt": "2026-06-05T10:05:00Z",
      "updatedAt": "2026-06-05T10:05:00Z"
    }
  ]


let CONVERSATION_PARTICIPANT = 
[
    {
      "id": 1,
      "conversationId": 21001,
      "userId": 1002,
      "isAdmin": true,
      "isMuted": false,
      "joinedAt": "2026-06-05T10:05:00Z",
      "leftAt": null,
      "createdAt": "2026-06-05T10:05:00Z"
    },
    {
      "id": 2,
      "conversationId": 21001,
      "userId": 1003,
      "isAdmin": false,
      "isMuted": false,
      "joinedAt": "2026-06-05T10:05:00Z",
      "leftAt": null,
      "createdAt": "2026-06-05T10:05:00Z"
    }
  ]

let MESSAGE = 
[
    {
      "id": 22001,
      "conversationId": 21001,
      "senderId": 1002,
      "messageType": "Text",
      "content": "Hi, interested in promoting our campaign?",
      "replyMessageId": null,
      "isEdited": false,
      "editedAt": null,
      "isDeleted": false,
      "deletedAt": null,
      "createdAt": "2026-06-05T10:07:00Z"
    },
    {
      "id": 22002,
      "conversationId": 21001,
      "senderId": 1003,
      "messageType": "Text",
      "content": "Yes, let's discuss the budget.",
      "replyMessageId": 22001,
      "isEdited": false,
      "editedAt": null,
      "isDeleted": false,
      "deletedAt": null,
      "createdAt": "2026-06-05T10:08:00Z"
    }
  ]


let MESSAGE_READ_STATUS = 
[
    {
      "id": 1,
      "messageId": 22001,
      "userId": 1003,
      "readAt": "2026-06-05T10:08:00Z"
    }
  ]

let MESSAGE_REACTION = [
    {
      "id": 1,
      "messageId": 22001,
      "userId": 1003,
      "reaction": "👍",
      "createdAt": "2026-06-05T10:09:00Z"
    }
  ]

let PAYMENT_METHOD = [
    {
      "id": 1,
      "methodName": "Razorpay"
    }
]

let TRANSACTION_TYPE = [
    {
      "id": 1,
      "typeName": "CampaignPayment"
    }
  ]



let REVENUE_TRANSACTION = 
[
    {
      "id": 16001,
      "transactionTypeId": 1,
      "entityType": "Campaign",
      "entityId": 14001,
      "referenceId": "COLLAB-15001",
      "userId": 1003,
      "amount": 25000,
      "paymentMethodId": 1,
      "paymentReference": "PAY_ABC123",
      "paymentStatus": "Success",
      "createdAt": "2026-06-10T10:00:00Z",
      "updatedAt": "2026-06-10T10:00:00Z"
    }
  ]


let SUBSCRIPTION_PLAN = 
[
    {
      "id": 17001,
      "name": "Influencer Pro",
      "price": 999
    }
  ]

let USER_SUBSCRIPTION =  [
    {
      "id": 18001,
      "userId": 1003,
      "subscriptionPlanId": 17001,
      "amountPaid": 999,
      "status": "Active"
    }
  ]



let AUDIT_LOG = [

    {
      "id": 26001,
      "userId": 1001,
      "entityName": "Tournament",
      "entityId": 9001,
      "actionType": "CREATE",
      "oldValue": null,
      "newValue": {
        "name": "BGMI Championship 2026"
      },
      "ipAddress": "10.10.10.1",
      "userAgent": "Chrome",
      "createdAt": "2026-03-01T10:00:00Z"
    },
    {
      "id": 26002,
      "userId": 1002,
      "entityName": "Campaign",
      "entityId": 14001,
      "actionType": "CREATE",
      "oldValue": null,
      "newValue": {
        "campaignName": "RedBull BGMI Push"
      },
      "ipAddress": "10.10.10.2",
      "userAgent": "Firefox",
      "createdAt": "2026-05-01T10:00:00Z"
    }
  ]




let NOTIFICATION = [
    {
      "id": 20001,
      "userId": 1003,
      "title": "Campaign Invitation",
      "message": "You have received a new collaboration request."
    }
  ]








let AFFILIATE_CAMPAIGN =  
[
    {
      "id": 23001,
      "brandId": 3001,
      "campaignName": "RedBull Referral Program",
      "description": "Track influencer traffic",
      "startDate": "2026-06-01",
      "endDate": "2026-08-01",
      "status": "Active",
      "createdAt": "2026-06-01T10:00:00Z",
      "updatedAt": "2026-06-01T10:00:00Z"
    }
  ]

let AFFILIATE_LINK = 
[
    {
      "id": 24001,
      "affiliateCampaignId": 23001,
      "assignedUserId": 1003,
      "assignedUserType": "Influencer",
      "linkName": "ProStreamer Referral",
      "destinationUrl": "https://redbull.com/bgmi",
      "shortCode": "RB2026PS",
      "status": "Active",
      "createdAt": "2026-06-01T11:00:00Z",
      "updatedAt": "2026-06-01T11:00:00Z"
    }
  ]

let AFFILIATE_CLICK =  [
    {
      "id": 25001,
      "affiliateLinkId": 24001,
      "sessionId": "SESS123456",
      "visitorIp": "49.204.20.10",
      "country": "India",
      "city": "Chennai",
      "deviceType": "Mobile",
      "browser": "Chrome",
      "refererUrl": "https://youtube.com/prostreameryt",
      "clickedAt": "2026-06-15T14:00:00Z"
    }
  ]

let FILES = 
[
    {
      "id": 19001,
      "fileName": "bgmi-banner.jpg",
      "fileType": "image/jpeg",
      "bucketName": "tournament-assets",
      "storagePath": "/2026/banner/bgmi-banner.jpg",
      "fileSize": 2048000,
      "uploadedBy": 1001,
      "createdAt": "2026-03-01T10:00:00Z"
    },
    {
      "id": 19002,
      "fileName": "campaign-banner.jpg",
      "fileType": "image/jpeg",
      "bucketName": "campaign-assets",
      "storagePath": "/campaigns/banner.jpg",
      "fileSize": 3048000,
      "uploadedBy": 1002,
      "createdAt": "2026-04-01T10:00:00Z"
    }
  ]




























