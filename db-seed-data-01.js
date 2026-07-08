/* user login credentials and role assign */

let Roles= [
    {
      "id": 1,
      "roleName": "PLAYER",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "roleName": "TOURNAMENT_ORGANIZER",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "roleName": "BRAND",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 4,
      "roleName": "INFLUENCER",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 5,
      "roleName": "ADMIN",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]
let Users =  [
    {
      "id": 1,
      "email": "admin@esportshub.com",
      "username": "admin",
      "passwordHash": "$2a$10$adminhash",
      "emailVerified": true,
      "status": "ACTIVE",
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z",
      "lastLoginAt": "2026-06-30T10:00:00Z"
    },
    {
      "id": 2,
      "email": "organizer1@esportshub.com",
      "username": "organizer1",
      "passwordHash": "$2a$10$organizerhash",
      "emailVerified": true,
      "status": "ACTIVE",
      "createdAt": "2026-01-05T09:00:00Z",
      "updatedAt": "2026-06-20T10:00:00Z",
      "lastLoginAt": "2026-06-30T11:30:00Z"
    },
    {
      "id": 3,
      "email": "brand1@esportshub.com",
      "username": "brand1",
      "passwordHash": "$2a$10$brandhash",
      "emailVerified": true,
      "status": "ACTIVE",
      "createdAt": "2026-01-08T09:00:00Z",
      "updatedAt": "2026-06-21T09:00:00Z",
      "lastLoginAt": "2026-06-30T09:45:00Z"
    },
    {
      "id": 4,
      "email": "influencer1@esportshub.com",
      "username": "influencer1",
      "passwordHash": "$2a$10$influencerhash",
      "emailVerified": true,
      "status": "ACTIVE",
      "createdAt": "2026-01-10T09:00:00Z",
      "updatedAt": "2026-06-22T08:00:00Z",
      "lastLoginAt": "2026-06-30T08:30:00Z"
    },
    {
      "id": 5,
      "email": "player1@esportshub.com",
      "username": "player1",
      "passwordHash": "$2a$10$player1hash",
      "emailVerified": true,
      "status": "ACTIVE",
      "createdAt": "2026-01-15T09:00:00Z",
      "updatedAt": "2026-06-25T09:00:00Z",
      "lastLoginAt": "2026-06-30T12:15:00Z"
    },
    {
      "id": 6,
      "email": "player2@esportshub.com",
      "username": "player2",
      "passwordHash": "$2a$10$player2hash",
      "emailVerified": true,
      "status": "ACTIVE",
      "createdAt": "2026-01-16T09:00:00Z",
      "updatedAt": "2026-06-25T09:00:00Z",
      "lastLoginAt": "2026-06-30T12:20:00Z"
    },
    {
      "id": 7,
      "email": "player3@esportshub.com",
      "username": "player3",
      "passwordHash": "$2a$10$player3hash",
      "emailVerified": false,
      "status": "PENDING",
      "createdAt": "2026-01-18T09:00:00Z",
      "updatedAt": "2026-06-25T09:00:00Z",
      "lastLoginAt": null
    }
  ]
let UserRoles =  [
    {
      "id": 1,
      "userId": 1,
      "roleId": 5,
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "userId": 2,
      "roleId": 2,
      "createdAt": "2026-01-05T09:00:00Z"
    },
    {
      "id": 3,
      "userId": 3,
      "roleId": 3,
      "createdAt": "2026-01-08T09:00:00Z"
    },
    {
      "id": 4,
      "userId": 4,
      "roleId": 4,
      "createdAt": "2026-01-10T09:00:00Z"
    },
    {
      "id": 5,
      "userId": 5,
      "roleId": 1,
      "createdAt": "2026-01-15T09:00:00Z"
    },
    {
      "id": 6,
      "userId": 6,
      "roleId": 1,
      "createdAt": "2026-01-16T09:00:00Z"
    },
    {
      "id": 7,
      "userId": 7,
      "roleId": 1,
      "createdAt": "2026-01-18T09:00:00Z"
    }
  ]


/* Different user profiles */
  
let UserProfile = [
    {
      "id": 1,
      "userId": 1,
      "firstName": "System",
      "lastName": "Admin",
      "profileImage": "profiles/admin.png",
      "bio": "Platform administrator.",
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "userId": 2,
      "firstName": "Arun",
      "lastName": "Kumar",
      "profileImage": "profiles/organizer1.png",
      "bio": "Professional esports tournament organizer.",
      "createdAt": "2026-01-05T09:00:00Z",
      "updatedAt": "2026-06-20T10:00:00Z"
    },
    {
      "id": 3,
      "userId": 3,
      "firstName": "Priya",
      "lastName": "Sharma",
      "profileImage": "profiles/brand1.png",
      "bio": "Marketing manager at HyperTech.",
      "createdAt": "2026-01-08T09:00:00Z",
      "updatedAt": "2026-06-21T09:00:00Z"
    },
    {
      "id": 4,
      "userId": 4,
      "firstName": "Rohit",
      "lastName": "Raj",
      "profileImage": "profiles/influencer1.png",
      "bio": "Gaming creator and livestreamer.",
      "createdAt": "2026-01-10T09:00:00Z",
      "updatedAt": "2026-06-22T08:00:00Z"
    },
    {
      "id": 5,
      "userId": 5,
      "firstName": "Karthik",
      "lastName": "S",
      "profileImage": "profiles/player1.png",
      "bio": "BGMI competitive player.",
      "createdAt": "2026-01-15T09:00:00Z",
      "updatedAt": "2026-06-25T09:00:00Z"
    },
    {
      "id": 6,
      "userId": 6,
      "firstName": "Ajay",
      "lastName": "R",
      "profileImage": "profiles/player2.png",
      "bio": "Valorant IGL.",
      "createdAt": "2026-01-16T09:00:00Z",
      "updatedAt": "2026-06-25T09:00:00Z"
    },
    {
      "id": 7,
      "userId": 7,
      "firstName": "Vignesh",
      "lastName": "K",
      "profileImage": "profiles/player3.png",
      "bio": "Upcoming esports player.",
      "createdAt": "2026-01-18T09:00:00Z",
      "updatedAt": "2026-06-25T09:00:00Z"
    }
  ]



let TournamentOrganizerDetails = [
    {
      "id": 1,
      "userId": 2,
      "mobileNumber": "+919876543210",
      "governmentIdUri": "documents/organizer/aadhaar_2.pdf",
      "selfieVerificationUri": "verification/selfie_2.jpg",
      "verificationStatus": "VERIFIED",
      "verifiedAt": "2026-01-12T10:00:00Z",
      "createdAt": "2026-01-05T09:00:00Z",
      "updatedAt": "2026-01-12T10:00:00Z"
    }
  ]
let BrandDetails = [
    {
      "id": 1,
      "userId": 3,
      "brandName": "HyperTech Gaming",
      "mobileNumber": "+919812345678",
      "websiteUrl": "https://www.hypertechgaming.com",
      "legalEntityIdentifier": "CIN-U72900TN2025PTC123456",
      "businessAddress": "12, OMR Road, Chennai, Tamil Nadu, India",
      "verificationStatus": "VERIFIED",
      "createdAt": "2026-01-08T09:00:00Z",
      "updatedAt": "2026-01-15T11:00:00Z"
    }
  ]
let InfluencerDetails =  [
    {
      "id": 1,
      "userId": 4,
      "mobileNumber": "+919900112233",
      "aboutYourself": "Professional gaming streamer specializing in BGMI, Valorant and esports tournaments. Creates gameplay videos, livestreams and brand promotions.",
      "accountStatus": "ACTIVE",
      "verificationStatus": "VERIFIED",
      "createdAt": "2026-01-10T09:00:00Z",
      "updatedAt": "2026-01-16T10:30:00Z"
    }
  ]
/* Social Media */

let SocialMediaPlatform =  [
    {
      "id": 1,
      "platformName": "YouTube",
      "urlPrefix": "https://youtube.com/@",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "platformName": "Instagram",
      "urlPrefix": "https://instagram.com/",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "platformName": "Facebook",
      "urlPrefix": "https://facebook.com/",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 4,
      "platformName": "X",
      "urlPrefix": "https://x.com/",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 5,
      "platformName": "Twitch",
      "urlPrefix": "https://twitch.tv/",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]
  
let StatusMaster = [
    {
      "id": 1,
      "statusType": "SOCIAL_MEDIA_ACCOUNT",
      "statusName": "PENDING",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "statusType": "SOCIAL_MEDIA_ACCOUNT",
      "statusName": "APPROVED",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "statusType": "SOCIAL_MEDIA_ACCOUNT",
      "statusName": "REJECTED",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 4,
      "statusType": "TOURNAMENT_REGISTRATION",
      "statusName": "PENDING",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 5,
      "statusType": "TOURNAMENT_REGISTRATION",
      "statusName": "APPROVED",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 6,
      "statusType": "TOURNAMENT_REGISTRATION",
      "statusName": "REJECTED",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]

let SocialMediaAccount = [
    {
      "id": 1,
      "userId": 4,
      "platformId": 1,
      "accountName": "RohitGaming",
      "profileUrl": "https://youtube.com/@RohitGaming",
      "followersCount": 0,
      "subscriberCount": 185000,
      "viewSubscriptionRatio": 3.85,
      "viewCommentRatio": 0.07,
      "acceptanceStatusId": 2,
      "createdAt": "2026-01-15T10:00:00Z",
      "updatedAt": "2026-06-15T09:00:00Z"
    },
    {
      "id": 2,
      "userId": 4,
      "platformId": 2,
      "accountName": "rohit_gaming",
      "profileUrl": "https://instagram.com/rohit_gaming",
      "followersCount": 126500,
      "subscriberCount": 0,
      "viewSubscriptionRatio": 2.90,
      "viewCommentRatio": 0.12,
      "acceptanceStatusId": 2,
      "createdAt": "2026-01-15T10:05:00Z",
      "updatedAt": "2026-06-15T09:00:00Z"
    },
    {
      "id": 3,
      "userId": 4,
      "platformId": 5,
      "accountName": "RohitLive",
      "profileUrl": "https://twitch.tv/RohitLive",
      "followersCount": 48500,
      "subscriberCount": 12400,
      "viewSubscriptionRatio": 2.15,
      "viewCommentRatio": 0.09,
      "acceptanceStatusId": 2,
      "createdAt": "2026-01-18T09:00:00Z",
      "updatedAt": "2026-06-16T09:00:00Z"
    },
    {
      "id": 4,
      "userId": 3,
      "platformId": 2,
      "accountName": "HyperTechGaming",
      "profileUrl": "https://instagram.com/HyperTechGaming",
      "followersCount": 45200,
      "subscriberCount": 0,
      "viewSubscriptionRatio": 1.25,
      "viewCommentRatio": 0.04,
      "acceptanceStatusId": 2,
      "createdAt": "2026-01-20T09:00:00Z",
      "updatedAt": "2026-06-20T09:00:00Z"
    },
    {
      "id": 5,
      "userId": 2,
      "platformId": 4,
      "accountName": "ArenaMasters",
      "profileUrl": "https://x.com/ArenaMasters",
      "followersCount": 9800,
      "subscriberCount": 0,
      "viewSubscriptionRatio": 0.95,
      "viewCommentRatio": 0.03,
      "acceptanceStatusId": 2,
      "createdAt": "2026-01-22T10:00:00Z",
      "updatedAt": "2026-06-20T10:00:00Z"
    }
  ]

/*influencer Games Details */
let Game = [
    {
      "id": 1,
      "gameName": "BGMI",
      "gameType": "Mobile",
      "gameMode": "Squad",
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "gameName": "Valorant",
      "gameType": "PC",
      "gameMode": "5v5",
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "gameName": "Call of Duty: Mobile",
      "gameType": "Mobile",
      "gameMode": "Battle Royale",
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 4,
      "gameName": "Free Fire MAX",
      "gameType": "Mobile",
      "gameMode": "Squad",
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 5,
      "gameName": "EA Sports FC 26",
      "gameType": "Console",
      "gameMode": "1v1",
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    }
  ]

let InfluencerGame = [
    {
      "id": 1,
      "influencerId": 1,
      "gameId": 1,
      "isPrimary": true,
      "createdAt": "2026-01-15T10:00:00Z"
    },
    {
      "id": 2,
      "influencerId": 1,
      "gameId": 2,
      "isPrimary": false,
      "createdAt": "2026-01-15T10:05:00Z"
    },
    {
      "id": 3,
      "influencerId": 1,
      "gameId": 3,
      "isPrimary": false,
      "createdAt": "2026-01-15T10:10:00Z"
    }
  ]
/* Tournament Details */
let TournamentCategory = [
    {
      "id": 1,
      "categoryName": "Mobile",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "categoryName": "PC",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "categoryName": "Console",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]
  
let TournamentType = [
    {
      "id": 1,
      "categoryId": 1,
      "typeName": "Solo",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "categoryId": 1,
      "typeName": "Duo",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "categoryId": 1,
      "typeName": "Squad",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 4,
      "categoryId": 2,
      "typeName": "5v5",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 5,
      "categoryId": 3,
      "typeName": "1v1",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]
  
let SeedingType = [
    {
      "id": 1,
      "name": "Random",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "name": "Rank Based",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "name": "Manual",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]
  
let Tournament = [
    {
      "id": 1,
      "organizerId": 2,
      "name": "BGMI Championship 2026",
      "description": "National level BGMI tournament for competitive teams.",
      "registrationStartDate": "2026-07-01T09:00:00Z",
      "registrationEndDate": "2026-07-15T23:59:59Z",
      "tournamentStartDate": "2026-07-20T10:00:00Z",
      "tournamentEndDate": "2026-07-25T20:00:00Z",
      "bannerFileId": 1,
      "categoryId": 1,
      "tournamentTypeId": 3,
      "maximumTeams": 64,
      "maximumPlayersPerTeam": 4,
      "seedingTypeId": 2,
      "entryFee": 500.00,
      "verificationRequired": true,
      "packageId": 2,
      "status": "OPEN",
      "createdAt": "2026-06-20T10:00:00Z",
      "updatedAt": "2026-06-25T12:00:00Z"
    },
    {
      "id": 2,
      "organizerId": 2,
      "name": "Valorant Masters",
      "description": "5v5 Valorant knockout tournament.",
      "registrationStartDate": "2026-08-01T09:00:00Z",
      "registrationEndDate": "2026-08-10T23:59:59Z",
      "tournamentStartDate": "2026-08-15T10:00:00Z",
      "tournamentEndDate": "2026-08-18T19:00:00Z",
      "bannerFileId": 2,
      "categoryId": 2,
      "tournamentTypeId": 4,
      "maximumTeams": 32,
      "maximumPlayersPerTeam": 5,
      "seedingTypeId": 1,
      "entryFee": 1000.00,
      "verificationRequired": true,
      "packageId": 2,
      "status": "OPEN",
      "createdAt": "2026-07-10T09:00:00Z",
      "updatedAt": "2026-07-10T09:00:00Z"
    },
    {
      "id": 3,
      "organizerId": 2,
      "name": "Free Fire Weekend Cup",
      "description": "Weekend Free Fire MAX tournament.",
      "registrationStartDate": "2026-09-01T09:00:00Z",
      "registrationEndDate": "2026-09-05T23:59:59Z",
      "tournamentStartDate": "2026-09-07T10:00:00Z",
      "tournamentEndDate": "2026-09-08T18:00:00Z",
      "bannerFileId": 3,
      "categoryId": 1,
      "tournamentTypeId": 3,
      "maximumTeams": 48,
      "maximumPlayersPerTeam": 4,
      "seedingTypeId": 1,
      "entryFee": 300.00,
      "verificationRequired": false,
      "packageId": 1,
      "status": "DRAFT",
      "createdAt": "2026-08-20T11:00:00Z",
      "updatedAt": "2026-08-20T11:00:00Z"
    }
  ]


let RulesCategory = [
    {
      "id": 1,
      "categoryName": "General",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "categoryName": "Gameplay",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "categoryName": "Fair Play",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 4,
      "categoryName": "Disqualification",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]
let TournamentRule = [
    {
      "id": 1,
      "tournamentId": 1,
      "categoryId": 1,
      "ruleText": "All players must complete identity verification before participating.",
      "createdBy": 2,
      "createdAt": "2026-06-25T10:00:00Z",
      "updatedAt": "2026-06-25T10:00:00Z"
    },
    {
      "id": 2,
      "tournamentId": 1,
      "categoryId": 2,
      "ruleText": "Only registered squad members are allowed to play.",
      "createdBy": 2,
      "createdAt": "2026-06-25T10:05:00Z",
      "updatedAt": "2026-06-25T10:05:00Z"
    },
    {
      "id": 3,
      "tournamentId": 1,
      "categoryId": 3,
      "ruleText": "Use of hacks, cheats or exploits will result in permanent ban.",
      "createdBy": 2,
      "createdAt": "2026-06-25T10:10:00Z",
      "updatedAt": "2026-06-25T10:10:00Z"
    },
    {
      "id": 4,
      "tournamentId": 2,
      "categoryId": 2,
      "ruleText": "Teams must report 30 minutes before match time.",
      "createdBy": 2,
      "createdAt": "2026-07-12T09:00:00Z",
      "updatedAt": "2026-07-12T09:00:00Z"
    },
    {
      "id": 5,
      "tournamentId": 2,
      "categoryId": 4,
      "ruleText": "Failure to join within 10 minutes will result in match forfeiture.",
      "createdBy": 2,
      "createdAt": "2026-07-12T09:05:00Z",
      "updatedAt": "2026-07-12T09:05:00Z"
    }
  ]
  
let PrizeCategory = [
    {
      "id": 1,
      "name": "Cash Prize",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "name": "Gaming Equipment",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "name": "Gift Voucher",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]
  
let TournamentPrize = [
    {
      "id": 1,
      "tournamentId": 1,
      "prizeCategoryId": 1,
      "positionName": "Champion",
      "rankOrder": 1,
      "prizeAmount": 100000.00,
      "prizeDescription": "Champion Cash Prize",
      "createdAt": "2026-06-25T11:00:00Z",
      "updatedAt": "2026-06-25T11:00:00Z"
    },
    {
      "id": 2,
      "tournamentId": 1,
      "prizeCategoryId": 1,
      "positionName": "Runner Up",
      "rankOrder": 2,
      "prizeAmount": 50000.00,
      "prizeDescription": "Runner Up Cash Prize",
      "createdAt": "2026-06-25T11:05:00Z",
      "updatedAt": "2026-06-25T11:05:00Z"
    },
    {
      "id": 3,
      "tournamentId": 1,
      "prizeCategoryId": 1,
      "positionName": "Second Runner Up",
      "rankOrder": 3,
      "prizeAmount": 25000.00,
      "prizeDescription": "Third Place Cash Prize",
      "createdAt": "2026-06-25T11:10:00Z",
      "updatedAt": "2026-06-25T11:10:00Z"
    },
    {
      "id": 4,
      "tournamentId": 2,
      "prizeCategoryId": 1,
      "positionName": "Champion",
      "rankOrder": 1,
      "prizeAmount": 150000.00,
      "prizeDescription": "Valorant Championship Prize",
      "createdAt": "2026-07-12T10:00:00Z",
      "updatedAt": "2026-07-12T10:00:00Z"
    },
    {
      "id": 5,
      "tournamentId": 2,
      "prizeCategoryId": 2,
      "positionName": "MVP",
      "rankOrder": 99,
      "prizeAmount": 0,
      "prizeDescription": "Premium Gaming Keyboard",
      "createdAt": "2026-07-12T10:05:00Z",
      "updatedAt": "2026-07-12T10:05:00Z"
    }
  ]

let TeamPosition = [
    {
      "id": 1,
      "name": "Captain",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "name": "Co-Captain",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "name": "Player",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 4,
      "name": "Substitute",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]
  
let Team = [
    {
      "id": 1,
      "ownerId": 5,
      "teamName": "Phoenix Warriors",
      "teamLogoFileId": 4,
      "createdAt": "2026-06-10T10:00:00Z",
      "updatedAt": "2026-06-10T10:00:00Z"
    },
    {
      "id": 2,
      "ownerId": 6,
      "teamName": "Shadow Legends",
      "teamLogoFileId": 5,
      "createdAt": "2026-06-12T11:00:00Z",
      "updatedAt": "2026-06-12T11:00:00Z"
    }
  ]
  
let TeamMember = [
    {
      "id": 1,
      "teamId": 1,
      "userId": 5,
      "positionId": 1,
      "joinedAt": "2026-06-10T10:00:00Z",
      "createdAt": "2026-06-10T10:00:00Z",
      "updatedAt": "2026-06-10T10:00:00Z"
    },
    {
      "id": 2,
      "teamId": 1,
      "userId": 6,
      "positionId": 2,
      "joinedAt": "2026-06-10T10:05:00Z",
      "createdAt": "2026-06-10T10:05:00Z",
      "updatedAt": "2026-06-10T10:05:00Z"
    },
    {
      "id": 3,
      "teamId": 1,
      "userId": 7,
      "positionId": 3,
      "joinedAt": "2026-06-10T10:10:00Z",
      "createdAt": "2026-06-10T10:10:00Z",
      "updatedAt": "2026-06-10T10:10:00Z"
    },
    {
      "id": 4,
      "teamId": 2,
      "userId": 6,
      "positionId": 1,
      "joinedAt": "2026-06-12T11:00:00Z",
      "createdAt": "2026-06-12T11:00:00Z",
      "updatedAt": "2026-06-12T11:00:00Z"
    },
    {
      "id": 5,
      "teamId": 2,
      "userId": 5,
      "positionId": 3,
      "joinedAt": "2026-06-12T11:05:00Z",
      "createdAt": "2026-06-12T11:05:00Z",
      "updatedAt": "2026-06-12T11:05:00Z"
    }
  ]

  /* Tournament Registration */

let TournamentRegistration = [
    {
      "id": 1,
      "tournamentId": 1,
      "teamId": 1,
      "registrationStatusId": 5,
      "registrationDate": "2026-07-02T10:30:00Z",
      "approvedBy": 2,
      "approvedDate": "2026-07-03T09:15:00Z",
      "createdAt": "2026-07-02T10:30:00Z",
      "updatedAt": "2026-07-03T09:15:00Z"
    },
    {
      "id": 2,
      "tournamentId": 1,
      "teamId": 2,
      "registrationStatusId": 4,
      "registrationDate": "2026-07-04T14:20:00Z",
      "approvedBy": null,
      "approvedDate": null,
      "createdAt": "2026-07-04T14:20:00Z",
      "updatedAt": "2026-07-04T14:20:00Z"
    },
    {
      "id": 3,
      "tournamentId": 2,
      "teamId": 2,
      "registrationStatusId": 5,
      "registrationDate": "2026-08-02T11:00:00Z",
      "approvedBy": 2,
      "approvedDate": "2026-08-03T10:00:00Z",
      "createdAt": "2026-08-02T11:00:00Z",
      "updatedAt": "2026-08-03T10:00:00Z"
    }
  ]
  
let TournamentRegistrationPayment = [
    {
      "id": 1,
      "registrationId": 1,
      "tournamentId": 1,
      "participantId": 5,
      "amount": 500.00,
      "paymentReference": "TRX-BGMI-100001",
      "paymentStatus": "SUCCESS",
      "paidDate": "2026-07-02T10:35:00Z",
      "createdAt": "2026-07-02T10:35:00Z"
    },
    {
      "id": 2,
      "registrationId": 2,
      "tournamentId": 1,
      "participantId": 6,
      "amount": 500.00,
      "paymentReference": "TRX-BGMI-100002",
      "paymentStatus": "PENDING",
      "paidDate": null,
      "createdAt": "2026-07-04T14:25:00Z"
    },
    {
      "id": 3,
      "registrationId": 3,
      "tournamentId": 2,
      "participantId": 6,
      "amount": 1000.00,
      "paymentReference": "TRX-VAL-100003",
      "paymentStatus": "SUCCESS",
      "paidDate": "2026-08-02T11:05:00Z",
      "createdAt": "2026-08-02T11:05:00Z"
    }
  ]
  
let TournamentAnnouncement =  [
    {
      "id": 1,
      "tournamentId": 1,
      "title": "Registration Open",
      "content": "Registration for BGMI Championship 2026 is now open.",
      "createdAt": "2026-07-01T09:00:00Z",
      "updatedAt": "2026-07-01T09:00:00Z"
    },
    {
      "id": 2,
      "tournamentId": 1,
      "title": "Room IDs",
      "content": "Room IDs and passwords will be shared 30 minutes before each match.",
      "createdAt": "2026-07-19T18:00:00Z",
      "updatedAt": "2026-07-19T18:00:00Z"
    },
    {
      "id": 3,
      "tournamentId": 2,
      "title": "Match Schedule",
      "content": "Valorant Masters schedule has been published.",
      "createdAt": "2026-08-12T10:00:00Z",
      "updatedAt": "2026-08-12T10:00:00Z"
    }
  ]
  
let TournamentFAQ = [
    {
      "id": 1,
      "tournamentId": 1,
      "userId": 5,
      "question": "Can we change a player after registration?",
      "answer": "Yes, before registration closes and subject to organizer approval.",
      "status": "ANSWERED",
      "createdAt": "2026-07-03T12:00:00Z",
      "updatedAt": "2026-07-03T12:30:00Z"
    },
    {
      "id": 2,
      "tournamentId": 1,
      "userId": 6,
      "question": "Is voice communication mandatory?",
      "answer": "No, but it is recommended for team coordination.",
      "status": "ANSWERED",
      "createdAt": "2026-07-05T15:10:00Z",
      "updatedAt": "2026-07-05T15:30:00Z"
    },
    {
      "id": 3,
      "tournamentId": 2,
      "userId": 6,
      "question": "Will spectators be allowed?",
      "answer": "Only registered officials and participants can join the custom lobby.",
      "status": "ANSWERED",
      "createdAt": "2026-08-04T11:20:00Z",
      "updatedAt": "2026-08-04T11:45:00Z"
    }
  ]


  /* Campain Module  */

let CampaignType = [
    {
      "id": 1,
      "name": "Brand Promotion",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "name": "Tournament Sponsorship",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "name": "Product Launch",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]
  
let Campaign = [
    {
      "id": 1,
      "brandId": 1,
      "campaignTypeId": 1,
      "campaignName": "HyperTech BGMI Creator Campaign",
      "gameId": 1,
      "startDate": "2026-07-10T09:00:00Z",
      "endDate": "2026-08-10T18:00:00Z",
      "description": "Influencer campaign promoting HyperTech gaming accessories.",
      "campaignThumbnailFileId": 6,
      "totalBudget": 500000.00,
      "influencerCost": 350000.00,
      "additionalExpenses": 150000.00,
      "status": "ACTIVE",
      "createdAt": "2026-07-01T09:00:00Z",
      "updatedAt": "2026-07-05T10:00:00Z"
    },
    {
      "id": 2,
      "brandId": 1,
      "campaignTypeId": 3,
      "campaignName": "Valorant Headset Launch",
      "gameId": 2,
      "startDate": "2026-08-15T09:00:00Z",
      "endDate": "2026-09-15T18:00:00Z",
      "description": "Launch campaign for the new HyperTech esports headset.",
      "campaignThumbnailFileId": 7,
      "totalBudget": 750000.00,
      "influencerCost": 500000.00,
      "additionalExpenses": 250000.00,
      "status": "PLANNED",
      "createdAt": "2026-08-01T09:00:00Z",
      "updatedAt": "2026-08-01T09:00:00Z"
    }
  ]
let CampaignPlatform = [
    {
      "id": 1,
      "campaignId": 1,
      // social media platform
      "platformId": 1
    },
    {
      "id": 2,
      "campaignId": 1,
      "platformId": 2
    },
    {
      "id": 3,
      "campaignId": 2,
      "platformId": 1
    },
    {
      "id": 4,
      "campaignId": 2,
      "platformId": 5
    }
  ]
  
let CampaignAsset = [
    {
      "id": 1,
      "campaignId": 1,
      "assetType": "Banner",
      "fileId": 8,
      "createdAt": "2026-07-02T10:00:00Z"
    },
    {
      "id": 2,
      "campaignId": 1,
      "assetType": "Logo",
      "fileId": 9,
      "createdAt": "2026-07-02T10:05:00Z"
    },
    {
      "id": 3,
      "campaignId": 2,
      "assetType": "Product Image",
      "fileId": 10,
      "createdAt": "2026-08-02T09:00:00Z"
    }
  ]
  
let CampaignDeliverable = [
    {
      "id": 1,
      "campaignId": 1,
      "fileId": 11,
      "createdAt": "2026-07-25T18:00:00Z"
    },
    {
      "id": 2,
      "campaignId": 1,
      "fileId": 12,
      "createdAt": "2026-07-30T20:00:00Z"
    },
    {
      "id": 3,
      "campaignId": 2,
      "fileId": 13,
      "createdAt": "2026-09-10T18:00:00Z"
    }
  ]

/* Collaborations Request */


let CollaborationRequest =  [
    {
      "id": 1,
      "senderId": 3,
      "receiverId": 4,
      "campaignId": 1,
      "title": "BGMI Creator Collaboration",
      "description": "Create one YouTube gameplay video and two Instagram reels promoting HyperTech gaming accessories during the BGMI Creator Campaign.",
      "proposedAmount": 120000.00,
      "status": "ACCEPTED",
      "createdAt": "2026-07-06T10:00:00Z",
      "updatedAt": "2026-07-07T15:30:00Z"
    },
    {
      "id": 2,
      "senderId": 3,
      "receiverId": 4,
      "campaignId": 2,
      "title": "Valorant Headset Launch Promotion",
      "description": "Produce one Twitch livestream, one YouTube review, and three social media posts showcasing the new HyperTech headset.",
      "proposedAmount": 180000.00,
      "status": "PENDING",
      "createdAt": "2026-08-05T09:30:00Z",
      "updatedAt": "2026-08-05T09:30:00Z"
    },
    {
      "id": 3,
      "senderId": 3,
      "receiverId": 4,
      "campaignId": 1,
      "title": "Tournament Highlight Video",
      "description": "Publish a highlight video covering the BGMI Championship finals with sponsor branding and social media promotion.",
      "proposedAmount": 90000.00,
      "status": "COMPLETED",
      "createdAt": "2026-07-28T11:00:00Z",
      "updatedAt": "2026-08-02T18:00:00Z"
    }
  ]

  /* payment module */


let PaymentMethod = [
    {
      "id": 1,
      "methodName": "UPI",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "methodName": "Credit Card",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "methodName": "Debit Card",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 4,
      "methodName": "Net Banking",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]
let TransactionType = [
    {
      "id": 1,
      "typeName": "Tournament Registration",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "typeName": "Tournament Package",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "typeName": "Campaign Payment",
      "createdAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 4,
      "typeName": "Subscription",
      "createdAt": "2026-01-01T09:00:00Z"
    }
  ]
  
let RevenueTransaction = [
    {
      "id": 1,
      "transactionTypeId": 1,
      "entityType": "TournamentRegistration",
      "entityId": 1,
      "referenceId": "REG-100001",
      "userId": 5,
      "amount": 500.00,
      "paymentMethodId": 1,
      "paymentReference": "UPI20260702001",
      "paymentStatus": "SUCCESS",
      "createdAt": "2026-07-02T10:35:00Z",
      "updatedAt": "2026-07-02T10:35:00Z"
    },
    {
      "id": 2,
      "transactionTypeId": 2,
      "entityType": "Tournament",
      "entityId": 1,
      "referenceId": "PKG-100001",
      "userId": 2,
      "amount": 4999.00,
      "paymentMethodId": 2,
      "paymentReference": "CC20260620001",
      "paymentStatus": "SUCCESS",
      "createdAt": "2026-06-20T12:00:00Z",
      "updatedAt": "2026-06-20T12:00:00Z"
    },
    {
      "id": 3,
      "transactionTypeId": 3,
      "entityType": "Campaign",
      "entityId": 1,
      "referenceId": "CMP-100001",
      "userId": 3,
      "amount": 120000.00,
      "paymentMethodId": 4,
      "paymentReference": "NB20260708001",
      "paymentStatus": "SUCCESS",
      "createdAt": "2026-07-08T15:00:00Z",
      "updatedAt": "2026-07-08T15:00:00Z"
    },
    {
      "id": 4,
      "transactionTypeId": 1,
      "entityType": "TournamentRegistration",
      "entityId": 2,
      "referenceId": "REG-100002",
      "userId": 6,
      "amount": 500.00,
      "paymentMethodId": 1,
      "paymentReference": "UPI20260704001",
      "paymentStatus": "PENDING",
      "createdAt": "2026-07-04T14:25:00Z",
      "updatedAt": "2026-07-04T14:25:00Z"
    }
  ]

let TournamentPackage = [
    {
      "id": 1,
      "name": "Starter",
      "price": 1999.00,
      "maxTeams": 32,
      "isActive": true,
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "name": "Professional",
      "price": 4999.00,
      "maxTeams": 64,
      "isActive": true,
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "name": "Enterprise",
      "price": 9999.00,
      "maxTeams": 128,
      "isActive": true,
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    }
  ]
  
let TournamentPayment = [
    {
      "id": 1,
      "organizerId": 2,
      "tournamentId": 1,
      "packageId": 2,
      "amount": 4999.00,
      "paymentReference": "PKG-20260620-001",
      "paymentStatus": "SUCCESS",
      "paidDate": "2026-06-20T12:00:00Z",
      "createdAt": "2026-06-20T12:00:00Z"
    },
    {
      "id": 2,
      "organizerId": 2,
      "tournamentId": 2,
      "packageId": 2,
      "amount": 4999.00,
      "paymentReference": "PKG-20260710-001",
      "paymentStatus": "SUCCESS",
      "paidDate": "2026-07-10T09:30:00Z",
      "createdAt": "2026-07-10T09:30:00Z"
    },
    {
      "id": 3,
      "organizerId": 2,
      "tournamentId": 3,
      "packageId": 1,
      "amount": 1999.00,
      "paymentReference": "PKG-20260820-001",
      "paymentStatus": "PENDING",
      "paidDate": null,
      "createdAt": "2026-08-20T11:15:00Z"
    }
  ]
  
let SubscriptionPlan = [
    {
      "id": 1,
      "name": "Creator Basic",
      "userType": "INFLUENCER",
      "price": 499.00,
      "durationDays": 30,
      "isActive": true,
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 2,
      "name": "Creator Pro",
      "userType": "INFLUENCER",
      "price": 1499.00,
      "durationDays": 90,
      "isActive": true,
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    },
    {
      "id": 3,
      "name": "Organizer Premium",
      "userType": "ORGANIZER",
      "price": 2999.00,
      "durationDays": 365,
      "isActive": true,
      "createdAt": "2026-01-01T09:00:00Z",
      "updatedAt": "2026-01-01T09:00:00Z"
    }
  ]
let UserSubscription = [
    {
      "id": 1,
      "userId": 4,
      "subscriptionPlanId": 2,
      "startDate": "2026-07-01T00:00:00Z",
      "endDate": "2026-09-29T23:59:59Z",
      "amountPaid": 1499.00,
      "status": "ACTIVE",
      "createdAt": "2026-07-01T00:00:00Z",
      "updatedAt": "2026-07-01T00:00:00Z"
    },
    {
      "id": 2,
      "userId": 2,
      "subscriptionPlanId": 3,
      "startDate": "2026-01-01T00:00:00Z",
      "endDate": "2026-12-31T23:59:59Z",
      "amountPaid": 2999.00,
      "status": "ACTIVE",
      "createdAt": "2026-01-01T00:00:00Z",
      "updatedAt": "2026-01-01T00:00:00Z"
    },
    {
      "id": 3,
      "userId": 5,
      "subscriptionPlanId": 1,
      "startDate": "2026-08-01T00:00:00Z",
      "endDate": "2026-08-30T23:59:59Z",
      "amountPaid": 499.00,
      "status": "EXPIRED",
      "createdAt": "2026-08-01T00:00:00Z",
      "updatedAt": "2026-08-30T23:59:59Z"
    }
  ]

/* File structure Optional only */

let Files = [
    {
      "id": 1,
      "fileName": "bgmi_championship_banner.png",
      "fileType": "image/png",
      "bucketName": "tournament-banners",
      "storagePath": "/tournaments/1/banner.png",
      "fileSize": 524288,
      "uploadedBy": 2,
      "createdAt": "2026-06-20T10:15:00Z"
    },
    {
      "id": 2,
      "fileName": "valorant_masters_banner.png",
      "fileType": "image/png",
      "bucketName": "tournament-banners",
      "storagePath": "/tournaments/2/banner.png",
      "fileSize": 498765,
      "uploadedBy": 2,
      "createdAt": "2026-07-10T09:10:00Z"
    },
    {
      "id": 3,
      "fileName": "freefire_weekend_banner.png",
      "fileType": "image/png",
      "bucketName": "tournament-banners",
      "storagePath": "/tournaments/3/banner.png",
      "fileSize": 486214,
      "uploadedBy": 2,
      "createdAt": "2026-08-20T11:05:00Z"
    },
    {
      "id": 4,
      "fileName": "phoenix_warriors_logo.png",
      "fileType": "image/png",
      "bucketName": "team-logos",
      "storagePath": "/teams/1/logo.png",
      "fileSize": 156320,
      "uploadedBy": 5,
      "createdAt": "2026-06-10T10:02:00Z"
    },
    {
      "id": 5,
      "fileName": "shadow_legends_logo.png",
      "fileType": "image/png",
      "bucketName": "team-logos",
      "storagePath": "/teams/2/logo.png",
      "fileSize": 149870,
      "uploadedBy": 6,
      "createdAt": "2026-06-12T11:02:00Z"
    },
    {
      "id": 6,
      "fileName": "bgmi_campaign_thumbnail.png",
      "fileType": "image/png",
      "bucketName": "campaigns",
      "storagePath": "/campaigns/1/thumbnail.png",
      "fileSize": 425870,
      "uploadedBy": 3,
      "createdAt": "2026-07-01T09:10:00Z"
    },
    {
      "id": 7,
      "fileName": "valorant_campaign_thumbnail.png",
      "fileType": "image/png",
      "bucketName": "campaigns",
      "storagePath": "/campaigns/2/thumbnail.png",
      "fileSize": 410240,
      "uploadedBy": 3,
      "createdAt": "2026-08-01T09:10:00Z"
    },
    {
      "id": 8,
      "fileName": "campaign_banner.jpg",
      "fileType": "image/jpeg",
      "bucketName": "campaign-assets",
      "storagePath": "/campaigns/1/assets/banner.jpg",
      "fileSize": 380412,
      "uploadedBy": 3,
      "createdAt": "2026-07-02T10:00:00Z"
    },
    {
      "id": 9,
      "fileName": "hypertech_logo.png",
      "fileType": "image/png",
      "bucketName": "campaign-assets",
      "storagePath": "/campaigns/1/assets/logo.png",
      "fileSize": 120430,
      "uploadedBy": 3,
      "createdAt": "2026-07-02T10:05:00Z"
    },
    {
      "id": 10,
      "fileName": "headset_product.png",
      "fileType": "image/png",
      "bucketName": "campaign-assets",
      "storagePath": "/campaigns/2/assets/product.png",
      "fileSize": 302120,
      "uploadedBy": 3,
      "createdAt": "2026-08-02T09:00:00Z"
    },
    {
      "id": 11,
      "fileName": "youtube_review.mp4",
      "fileType": "video/mp4",
      "bucketName": "campaign-deliverables",
      "storagePath": "/campaigns/1/deliverables/review.mp4",
      "fileSize": 125000000,
      "uploadedBy": 4,
      "createdAt": "2026-07-25T18:00:00Z"
    },
    {
      "id": 12,
      "fileName": "instagram_reel.mp4",
      "fileType": "video/mp4",
      "bucketName": "campaign-deliverables",
      "storagePath": "/campaigns/1/deliverables/reel.mp4",
      "fileSize": 48200000,
      "uploadedBy": 4,
      "createdAt": "2026-07-30T20:00:00Z"
    },
    {
      "id": 13,
      "fileName": "twitch_stream_highlight.mp4",
      "fileType": "video/mp4",
      "bucketName": "campaign-deliverables",
      "storagePath": "/campaigns/2/deliverables/highlight.mp4",
      "fileSize": 215000000,
      "uploadedBy": 4,
      "createdAt": "2026-09-10T18:00:00Z"
    }
  ]
/* Notification */

let Notification =  [
    {
      "id": 1,
      "userId": 2,
      "title": "Tournament Created",
      "message": "Your tournament 'BGMI Championship 2026' has been created successfully.",
      "isRead": true,
      "createdAt": "2026-06-20T10:05:00Z"
    },
    {
      "id": 2,
      "userId": 5,
      "title": "Registration Approved",
      "message": "Your team 'Phoenix Warriors' has been approved for BGMI Championship 2026.",
      "isRead": false,
      "createdAt": "2026-07-03T09:20:00Z"
    },
    {
      "id": 3,
      "userId": 6,
      "title": "Registration Pending",
      "message": "Your tournament registration is awaiting organizer approval.",
      "isRead": false,
      "createdAt": "2026-07-04T14:30:00Z"
    },
    {
      "id": 4,
      "userId": 3,
      "title": "Campaign Published",
      "message": "Your campaign 'HyperTech BGMI Creator Campaign' is now live.",
      "isRead": true,
      "createdAt": "2026-07-05T10:00:00Z"
    },
    {
      "id": 5,
      "userId": 4,
      "title": "Collaboration Request",
      "message": "You received a collaboration request for the HyperTech BGMI Creator Campaign.",
      "isRead": true,
      "createdAt": "2026-07-06T10:05:00Z"
    },
    {
      "id": 6,
      "userId": 3,
      "title": "Collaboration Accepted",
      "message": "Rohit Raj accepted your collaboration request.",
      "isRead": false,
      "createdAt": "2026-07-07T15:35:00Z"
    },
    {
      "id": 7,
      "userId": 4,
      "title": "Campaign Payment Received",
      "message": "₹120,000 has been credited for Campaign #1.",
      "isRead": false,
      "createdAt": "2026-07-08T15:05:00Z"
    },
    {
      "id": 8,
      "userId": 2,
      "title": "Tournament Package Activated",
      "message": "Professional Tournament Package has been activated successfully.",
      "isRead": true,
      "createdAt": "2026-06-20T12:05:00Z"
    },
    {
      "id": 9,
      "userId": 4,
      "title": "Subscription Activated",
      "message": "Your Creator Pro subscription is active until 2026-09-29.",
      "isRead": true,
      "createdAt": "2026-07-01T00:05:00Z"
    },
    {
      "id": 10,
      "userId": 1,
      "title": "New User Registered",
      "message": "A new tournament organizer account has completed verification.",
      "isRead": true,
      "createdAt": "2026-01-12T10:05:00Z"
    }
  ]

let AuditLog = [
    {
      "id": 1,
      "userId": 2,
      "entityName": "Tournament",
      "entityId": 1,
      "actionType": "CREATE",
      "oldValue": null,
      "newValue": {
        "name": "BGMI Championship 2026",
        "status": "OPEN"
      },
      "ipAddress": "192.168.1.10",
      "userAgent": "Chrome 138.0 / Windows 11",
      "createdAt": "2026-06-20T10:00:00Z"
    },
    {
      "id": 2,
      "userId": 2,
      "entityName": "Tournament",
      "entityId": 1,
      "actionType": "UPDATE",
      "oldValue": {
        "entryFee": 300
      },
      "newValue": {
        "entryFee": 500
      },
      "ipAddress": "192.168.1.10",
      "userAgent": "Chrome 138.0 / Windows 11",
      "createdAt": "2026-06-25T12:00:00Z"
    },
    {
      "id": 3,
      "userId": 3,
      "entityName": "Campaign",
      "entityId": 1,
      "actionType": "CREATE",
      "oldValue": null,
      "newValue": {
        "campaignName": "HyperTech BGMI Creator Campaign",
        "status": "ACTIVE"
      },
      "ipAddress": "192.168.1.20",
      "userAgent": "Edge 138.0 / Windows 11",
      "createdAt": "2026-07-01T09:00:00Z"
    }
]

/* AFFILIATE LINK AND ROI */

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


  /*
    CHAT MODULE
   */

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
