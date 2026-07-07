Performance Requirements​

 The system must respond quickly, handle heavy traffic, and process real-time operations
efficiently.​

Security Requirements​

 The system must protect user data through encryption, secure authentication, and role-
based access control.​

Reliability Requirements​

 The system must remain available, stable, and handle errors safely without exposing
sensitive details.​

Usability Requirements​

 The platform must be easy to use, responsive on all devices, and provide a consistent and
accessible user experience.
Maintainability Requirements​

The system must use a modular, well-structured design that supports easy updates, logging,
and API versioning.​

Scalability Requirements​

The platform must scale horizontally to support large user volumes, high data loads, and
auto-scaling during peak events.​

Data Integrity Requirements​

The system must validate inputs, maintain consistent data, and ensure secure, lossless
transactions.

Master UI Design Prompt – Esports & Gaming Platform

Design a modern, premium, dark-themed esports and gaming platform with a consistent UI across all screens.

Color Palette

- Primary Background: #0D1117 (Deep Charcoal)
- Secondary Background: #161B22 (Dark Slate)
- Surface/Card: #1F2937
- Primary Accent: #7C3AED (Electric Purple)
- Secondary Accent: #06B6D4 (Cyber Cyan)
- Success: #22C55E
- Warning: #F59E0B
- Error: #EF4444
- Primary Text: #F8FAFC (Off White)
- Secondary Text: #94A3B8
- Borders: #334155

Design Style

- Premium gaming aesthetic.
- Minimalistic with futuristic cyber elements.
- Soft glow effects on primary buttons and important cards.
- Rounded corners (12–16px).
- Soft shadows with subtle neon highlights.
- Glassmorphism only for overlays and popups.
- Spacious layout with excellent readability.
- High contrast for accessibility.

Typography

- Bold headings.
- Clean sans-serif font (Inter, Poppins, or Manrope).
- Large section titles.
- Medium-weight body text.
- Consistent spacing and hierarchy.

Buttons

- Primary: Purple gradient (#7C3AED → #9333EA) with subtle glow.
- Secondary: Dark background with cyan border.
- Danger: Red.
- Success: Green.
- Hover: Slight scale (1.03x) and brighter glow.

Cards

- Dark surfaces.
- 12–16px border radius.
- Thin border.
- Soft shadow.
- Hover lift animation.
- Consistent padding (20–24px).

Icons

- Outline style.
- Cyan or white.
- Consistent stroke width.
- Gaming-inspired but minimal.

Navigation

- Sticky top navigation.
- Left sidebar on desktop.
- Bottom navigation on mobile.
- Active menu highlighted with purple accent and glowing indicator.

Inputs

- Dark input fields.
- Cyan focus border.
- Rounded corners.
- Clear labels and placeholder text.

Animations

- Smooth transitions (200–300ms).
- Fade-in page transitions.
- Hover elevation.
- Progress bars with animated gradients.
- Skeleton loading placeholders.

Overall Feel

The interface should resemble a professional esports platform similar to Discord, Steam, Riot Games, and modern gaming dashboards. Every page must reuse the same color palette, spacing, typography, button styles, cards, icons, and interaction patterns to ensure a cohesive user experience.


SCHEMA


// ========================================
// USER & ROLE MANAGEMENT
// ========================================

Table Users {
  id integer [pk, increment]
  email varchar [unique, not null]
  username varchar [unique, not null]
  passwordHash varchar [not null]
  emailVerified boolean
  status varchar

  createdAt timestamp
  updatedAt timestamp
  lastLoginAt timestamp
}

Table Roles {
  id integer [pk, increment]
  roleName varchar [unique]

  createdAt timestamp
}

Table UserRoles {
  id integer [pk, increment]
  userId integer [not null]
  roleId integer [not null]

  createdAt timestamp
}

Table UserProfile {
  id integer [pk, increment]
  userId integer [unique, not null]

  firstName varchar
  lastName varchar
  profileImage varchar
  bio text

  createdAt timestamp
  updatedAt timestamp
}

// ========================================
// ORGANIZER / BRAND / INFLUENCER
// ========================================

Table TournamentOrganizerDetails {
  id integer [pk, increment]
  userId integer [not null]

  mobileNumber varchar
  governmentIdUri varchar
  selfieVerificationUri varchar

  verificationStatus varchar
  verifiedAt timestamp

  createdAt timestamp
  updatedAt timestamp
}

Table BrandDetails {
  id integer [pk, increment]
  userId integer [not null]

  brandName varchar
  mobileNumber varchar
  websiteUrl varchar
  legalEntityIdentifier varchar
  businessAddress text

  verificationStatus varchar

  createdAt timestamp
  updatedAt timestamp
}

Table InfluencerDetails {
  id integer [pk, increment]
  userId integer [not null]

  mobileNumber varchar
  aboutYourself text

  accountStatus varchar
  verificationStatus varchar

  createdAt timestamp
  updatedAt timestamp
}

// ========================================
// SOCIAL MEDIA
// ========================================

Table SocialMediaPlatform {
  id integer [pk, increment]
  platformName varchar
  urlPrefix varchar

  createdAt timestamp
}

Table SocialMediaAccount {
  id integer [pk, increment]
  userId integer [not null]
  platformId integer [not null]

  accountName varchar
  profileUrl varchar

  followersCount bigint
  subscriberCount bigint

  viewSubscriptionRatio decimal
  viewCommentRatio decimal

  acceptanceStatusId integer

  createdAt timestamp
  updatedAt timestamp
}

Table StatusMaster {
  id integer [pk, increment]
  statusType varchar
  statusName varchar

  createdAt timestamp
}

// ========================================
// GAMES
// ========================================

Table Game {
  id integer [pk, increment]

  gameName varchar
  gameType varchar
  gameMode varchar

  createdAt timestamp
  updatedAt timestamp
}

Table InfluencerGame {
  id integer [pk, increment]

  influencerId integer
  gameId integer

  isPrimary boolean

  createdAt timestamp
}

// ========================================
// TOURNAMENT MASTER
// ========================================

Table TournamentCategory {
  id integer [pk, increment]

  categoryName varchar

  createdAt timestamp
}

Table TournamentType {
  id integer [pk, increment]

  categoryId integer
  typeName varchar

  createdAt timestamp
}

Table SeedingType {
  id integer [pk, increment]

  name varchar

  createdAt timestamp
}

Table Tournament {
  id integer [pk, increment]

  organizerId integer

  name varchar
  description text

  registrationStartDate datetime
  registrationEndDate datetime

  tournamentStartDate datetime
  tournamentEndDate datetime

  bannerFileId integer

  categoryId integer
  tournamentTypeId integer

  maximumTeams integer
  maximumPlayersPerTeam integer

  seedingTypeId integer

  entryFee decimal

  verificationRequired boolean

  packageId integer

  status varchar

  createdAt timestamp
  updatedAt timestamp
}

// ========================================
// RULES & PRIZES
// ========================================

Table RulesCategory {
  id integer [pk, increment]

  categoryName varchar

  createdAt timestamp
}

Table TournamentRule {
  id integer [pk, increment]

  tournamentId integer
  categoryId integer

  ruleText text

  createdBy integer

  createdAt timestamp
  updatedAt timestamp
}

Table PrizeCategory {
  id integer [pk, increment]

  name varchar

  createdAt timestamp
}

Table TournamentPrize {
  id integer [pk, increment]

  tournamentId integer
  prizeCategoryId integer

  positionName varchar
  rankOrder integer

  prizeAmount decimal
  prizeDescription text

  createdAt timestamp
  updatedAt timestamp
}

// ========================================
// TEAMS
// ========================================

Table Team {
  id integer [pk, increment]

  ownerId integer

  teamName varchar
  teamLogoFileId integer

  createdAt timestamp
  updatedAt timestamp
}

Table TeamPosition {
  id integer [pk, increment]

  name varchar

  createdAt timestamp
}

Table TeamMember {
  id integer [pk, increment]

  teamId integer
  userId integer

  positionId integer

  joinedAt timestamp

  createdAt timestamp
  updatedAt timestamp
}

// ========================================
// TOURNAMENT REGISTRATION
// ========================================

Table TournamentRegistration {
  id integer [pk, increment]

  tournamentId integer
  teamId integer

  registrationStatusId integer

  registrationDate timestamp

  approvedBy integer
  approvedDate timestamp

  createdAt timestamp
  updatedAt timestamp
}

Table TournamentRegistrationPayment {
  id integer [pk, increment]

  registrationId integer
  tournamentId integer

  participantId integer

  amount decimal

  paymentReference varchar
  paymentStatus varchar

  paidDate timestamp

  createdAt timestamp
}

// ========================================
// ANNOUNCEMENTS & FAQ
// ========================================

Table TournamentAnnouncement {
  id integer [pk, increment]

  tournamentId integer

  title varchar
  content text

  createdAt timestamp
  updatedAt timestamp
}

Table TournamentFAQ {
  id integer [pk, increment]

  tournamentId integer
  userId integer

  question text
  answer text

  status varchar

  createdAt timestamp
  updatedAt timestamp
}

// ========================================
// CAMPAIGNS
// ========================================

Table CampaignType {
  id integer [pk, increment]

  name varchar

  createdAt timestamp
}

Table Campaign {
  id integer [pk, increment]

  brandId integer
  campaignTypeId integer

  campaignName varchar

  gameId integer

  startDate datetime
  endDate datetime

  description text

  campaignThumbnailFileId integer

  totalBudget decimal
  influencerCost decimal
  additionalExpenses decimal

  status varchar

  createdAt timestamp
  updatedAt timestamp
}

Table CampaignPlatform {
  id integer [pk, increment]

  campaignId integer
  platformId integer
}

Table CampaignAsset {
  id integer [pk, increment]

  campaignId integer

  assetType varchar
  fileId integer

  createdAt timestamp
}

Table CampaignDeliverable {
  id integer [pk, increment]

  campaignId integer

  fileId integer

  createdAt timestamp
}

// ========================================
// COLLABORATION
// ========================================

Table CollaborationRequest {
  id integer [pk, increment]

  senderId integer
  receiverId integer

  campaignId integer

  title varchar
  description text

  proposedAmount decimal

  status varchar

  createdAt timestamp
  updatedAt timestamp
}

// ========================================
// PAYMENTS
// ========================================

Table PaymentMethod {
  id integer [pk, increment]

  methodName varchar

  createdAt timestamp
}

Table TransactionType {
  id integer [pk, increment]

  typeName varchar

  createdAt timestamp
}

Table RevenueTransaction {
  id integer [pk, increment]

  transactionTypeId integer

  entityType varchar
  entityId integer

  referenceId varchar

  userId integer

  amount decimal

  paymentMethodId integer

  paymentReference varchar
  paymentStatus varchar

  createdAt timestamp
  updatedAt timestamp
}

// ========================================
// TOURNAMENT PACKAGES
// ========================================

Table TournamentPackage {
  id integer [pk, increment]

  name varchar
  price decimal
  maxTeams integer
  isActive boolean

  createdAt timestamp
  updatedAt timestamp
}

Table TournamentPayment {
  id integer [pk, increment]

  organizerId integer
  tournamentId integer
  packageId integer

  amount decimal

  paymentReference varchar
  paymentStatus varchar

  paidDate timestamp

  createdAt timestamp
}

// ========================================
// SUBSCRIPTION
// ========================================

Table SubscriptionPlan {
  id integer [pk, increment]

  name varchar
  userType varchar

  price decimal
  durationDays integer

  isActive boolean

  createdAt timestamp
  updatedAt timestamp
}

Table UserSubscription {
  id integer [pk, increment]

  userId integer
  subscriptionPlanId integer

  startDate timestamp
  endDate timestamp

  amountPaid decimal

  status varchar

  createdAt timestamp
  updatedAt timestamp
}

// ========================================
// FILE STORAGE
// ========================================

Table Files {
  id integer [pk, increment]

  fileName varchar
  fileType varchar
  bucketName varchar
  storagePath varchar

  fileSize bigint

  uploadedBy integer

  createdAt timestamp
}

// ========================================
// NOTIFICATIONS
// ========================================

Table Notification {
  id integer [pk, increment]

  userId integer

  title varchar
  message text

  isRead boolean

  createdAt timestamp
}

// ========================================
// AUDIT LOG
// ========================================

Table AuditLog {
  id integer [pk, increment]

  userId integer

  entityName varchar
  entityId integer

  actionType varchar

  oldValue json
  newValue json

  ipAddress varchar
  userAgent text

  createdAt timestamp
}

// ========================================
// REAL-TIME MESSAGING MODULE
// Supports:
// 1. Individual Chat
// 2. Group Chat
// 3. Message Reply
// 4. Read Receipts
// 5. Attachments
// 6. Reactions
// 7. Online Presence
// ========================================

Table Conversation {
  id integer [pk, increment]

  conversationType varchar [not null, note: 'Direct | Group']

  name varchar
  description text

  groupImageFileId integer

  createdBy integer [not null]

  createdAt timestamp
  updatedAt timestamp
}

Table ConversationParticipant {
  id bigint [pk, increment]

  conversationId integer [not null]
  userId integer [not null]

  isAdmin boolean
  isMuted boolean

  joinedAt timestamp
  leftAt timestamp

  createdAt timestamp
}

Table Message {
  id bigint [pk, increment]

  conversationId integer [not null]

  senderId integer [not null]

  messageType varchar [not null, note: 'Text | Image | Video | File | System']

  content text

  replyMessageId bigint

  isEdited boolean
  editedAt timestamp

  isDeleted boolean
  deletedAt timestamp

  createdAt timestamp
}

Table MessageAttachment {
  id bigint [pk, increment]

  messageId bigint [not null]
  fileId integer [not null]

  createdAt timestamp
}

Table MessageReadStatus {
  id bigint [pk, increment]

  messageId bigint [not null]
  userId integer [not null]

  readAt timestamp
}

Table MessageReaction {
  id bigint [pk, increment]

  messageId bigint [not null]
  userId integer [not null]

  reaction varchar [note: '👍 ❤️ 😂 🔥 😢 😮']

  createdAt timestamp
}

Table UserPresence {
  userId integer [pk]

  isOnline boolean

  currentSocketId varchar

  lastSeenAt timestamp

  updatedAt timestamp
}

Table ConversationPinnedMessage {
  id bigint [pk, increment]

  conversationId integer [not null]
  messageId bigint [not null]

  pinnedBy integer

  pinnedAt timestamp
}

Table ConversationSettings {
  id integer [pk, increment]

  conversationId integer [unique]

  allowMemberMessaging boolean
  allowMemberInvite boolean
  onlyAdminCanPost boolean

  createdAt timestamp
  updatedAt timestamp
}

// ========================================
// RELATIONSHIPS
// ========================================

Ref: Conversation.createdBy > Users.id

Ref: ConversationParticipant.conversationId > Conversation.id
Ref: ConversationParticipant.userId > Users.id

Ref: Message.conversationId > Conversation.id
Ref: Message.senderId > Users.id

Ref: Message.replyMessageId > Message.id

Ref: MessageAttachment.messageId > Message.id
Ref: MessageAttachment.fileId > Files.id

Ref: MessageReadStatus.messageId > Message.id
Ref: MessageReadStatus.userId > Users.id

Ref: MessageReaction.messageId > Message.id
Ref: MessageReaction.userId > Users.id

Ref: UserPresence.userId > Users.id

Ref: ConversationPinnedMessage.conversationId > Conversation.id
Ref: ConversationPinnedMessage.messageId > Message.id
Ref: ConversationPinnedMessage.pinnedBy > Users.id

Ref: ConversationSettings.conversationId > Conversation.id


// ========================================
// RELATIONSHIPS
// ========================================

Ref: UserRoles.userId > Users.id
Ref: UserRoles.roleId > Roles.id

Ref: UserProfile.userId > Users.id

Ref: TournamentOrganizerDetails.userId > Users.id
Ref: BrandDetails.userId > Users.id
Ref: InfluencerDetails.userId > Users.id

Ref: SocialMediaAccount.userId > Users.id
Ref: SocialMediaAccount.platformId > SocialMediaPlatform.id
Ref: SocialMediaAccount.acceptanceStatusId > StatusMaster.id

Ref: InfluencerGame.influencerId > InfluencerDetails.id
Ref: InfluencerGame.gameId > Game.id

Ref: TournamentType.categoryId > TournamentCategory.id

Ref: Tournament.organizerId > Users.id
Ref: Tournament.categoryId > TournamentCategory.id
Ref: Tournament.tournamentTypeId > TournamentType.id
Ref: Tournament.seedingTypeId > SeedingType.id
Ref: Tournament.packageId > TournamentPackage.id

Ref: TournamentRule.tournamentId > Tournament.id
Ref: TournamentRule.categoryId > RulesCategory.id

Ref: TournamentPrize.tournamentId > Tournament.id
Ref: TournamentPrize.prizeCategoryId > PrizeCategory.id

Ref: Team.ownerId > Users.id

Ref: TeamMember.teamId > Team.id
Ref: TeamMember.userId > Users.id
Ref: TeamMember.positionId > TeamPosition.id

Ref: TournamentRegistration.tournamentId > Tournament.id
Ref: TournamentRegistration.teamId > Team.id
Ref: TournamentRegistration.registrationStatusId > StatusMaster.id

Ref: TournamentRegistrationPayment.registrationId > TournamentRegistration.id

Ref: TournamentAnnouncement.tournamentId > Tournament.id

Ref: TournamentFAQ.tournamentId > Tournament.id
Ref: TournamentFAQ.userId > Users.id

Ref: Campaign.brandId > BrandDetails.id
Ref: Campaign.campaignTypeId > CampaignType.id
Ref: Campaign.gameId > Game.id

Ref: CampaignPlatform.campaignId > Campaign.id
Ref: CampaignPlatform.platformId > SocialMediaPlatform.id

Ref: CampaignAsset.campaignId > Campaign.id
Ref: CampaignDeliverable.campaignId > Campaign.id

Ref: CollaborationRequest.senderId > Users.id
Ref: CollaborationRequest.receiverId > Users.id
Ref: CollaborationRequest.campaignId > Campaign.id

Ref: RevenueTransaction.transactionTypeId > TransactionType.id
Ref: RevenueTransaction.userId > Users.id
Ref: RevenueTransaction.paymentMethodId > PaymentMethod.id

Ref: TournamentPayment.organizerId > Users.id
Ref: TournamentPayment.tournamentId > Tournament.id
Ref: TournamentPayment.packageId > TournamentPackage.id

Ref: UserSubscription.userId > Users.id
Ref: UserSubscription.subscriptionPlanId > SubscriptionPlan.id

Ref: Notification.userId > Users.id

Ref: AuditLog.userId > Users.id
