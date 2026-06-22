2# Doc-team-6

Business Objective

Background

Scope

Stakeholders

Business Requirements

Functional Requirements

Non-Functional Requirements

Dependencies

Risks

Glossary


Fake Engagement Detection (using likes, views, subscribers)
ROI Calculation (affiliate link income analysis)
Influencer Recommendation (category, subscribers, views filtering)

Requirements
      ↓
Product Backlog
      ↓
Sprint Planning
      ↓
System Design
      ↓
Development
      ↓
Testing
      ↓
Sprint Review
      ↓
Sprint Retrospective
      ↓
Deployment
      ↓
Maintenance

Why Agile SDLC for This Project?

I chose the Agile Software Development Life Cycle (SDLC) because the requirements of the Influencer Marketing Analytics Platform may evolve over time. New features such as advanced filtering, analytics dashboards, messaging, verification workflows, and future AI recommendations can be added incrementally. Agile allows continuous feedback from stakeholders, faster delivery of working modules, easier adaptation to changing requirements, and improved product quality through iterative development and testing.

Benefits of Agile for this Project

Incremental development of features.

Faster delivery through sprints.

Easy handling of changing requirements.

Continuous testing and feedback.

Better collaboration among team members.

Reduced project risk.



---

Agile SDLC Flow for Influencer Marketing Analytics Platform

┌─────────────────────────────┐
│ 1. Requirement Gathering    │
│ - Influencer Requirements   │
│ - Brand Requirements        │
│ - Admin Requirements        │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 2. Product Backlog Creation │
│ - User Stories              │
│ - Feature Prioritization    │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 3. Sprint Planning          │
│ - Select Features           │
│ - Define Sprint Goals       │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 4. System Design            │
│ - Use Case Diagram          │
│ - Database Design           │
│ - UI/UX Design              │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 5. Sprint Development       │
│ Sprint 1: Authentication    │
│ Sprint 2: Influencer Module │
│ Sprint 3: Brand Module      │
│ Sprint 4: Admin Module      │
│ Sprint 5: Analytics Module  │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 6. Testing                  │
│ - Unit Testing              │
│ - Integration Testing       │
│ - System Testing            │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 7. Sprint Review            │
│ - Demo to Stakeholders      │
│ - Collect Feedback          │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 8. Sprint Retrospective     │
│ - Analyze Improvements      │
│ - Team Discussion           │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 9. Deployment               │
│ - Release Platform          │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ 10. Maintenance             │
│ - Bug Fixes                 │
│ - Feature Enhancements      │
│ - Performance Monitoring    │
└─────────────────────────────┘

Sprint Breakdown for Your Project

Sprint 1

User Registration & Login

Role Management (Influencer, Brand, Admin)


Sprint 2

Influencer Profile Creation

Promotion Pricing

Portfolio Management


Sprint 3

Brand Profile Creation

Search & Filter Influencers


Sprint 4

Collaboration Requests

Messaging System

Notifications


Sprint 5

Admin Verification Module

Reports & Analytics Dashboard


Sprint 6

Final Testing

Deployment

Documentation


Viva Answer (Short)

"Agile SDLC was chosen because the project requirements can change frequently. It enables iterative development through sprints, continuous testing, regular stakeholder feedback, and faster delivery of modules such as Influencer Management, Brand Management, and Admin Verification. This improves flexibility, quality, and project success."









1. Authentication and User Creation
FR 01: Influencer Registration
The influencer shall be able to register by providing name, email, contact number, gaming/esports category, social media handles, and password.
FR 02: Influencer Login
The influencer shall be able to log in using registered email/username and password.
FR 03: Brand Registration
The brand shall be able to register by providing company name, email, contact details, industry type, and password.
FR 04: Brand Login
The brand shall be able to log in using registered credentials.
FR 05: Forgot Password
Users shall be able to reset their password through email verification.
FR 06: Account Verification
The system shall verify newly registered influencer and brand accounts before activation.
2. Influencer Profile Management
FR 07: Create Influencer Profile
Influencers shall be able to create their professional profile.
FR 08: Update Influencer Profile
Influencers shall be able to edit profile information at any time.
FR 09: Add Social Media Handles
Influencers shall be able to add and manage their social media accounts.
FR 10: Manage Portfolio and Achievements
Influencers shall be able to upload achievements, tournament records, certifications, and portfolio details.
FR 11: Set Promotion Prices
Influencers shall be able to define pricing for different promotional activities.
FR 12: View Profile Status
Influencers shall be able to view account verification and profile completion status.
3. Brand Profile Management
FR 13: Create Brand Profile
Brands shall be able to create company profiles.
FR 14: Update Brand Profile
Brands shall be able to edit company information and branding details.
FR 15: Upload Brand Details
Brands shall be able to upload logos, descriptions, and promotional information.
FR 16: Manage Favorite Influencers
Brands shall be able to maintain a shortlist of preferred influencers.
4. Influencer Discovery and Search
FR 17: Search Influencers
Brands shall be able to search influencers using keywords.
FR 18: Filter Influencers
Brands shall be able to filter influencers based on category, audience size, engagement rate, and price range.
FR 19: View Influencer Profiles
Brands shall be able to view detailed influencer profiles.
FR 20: View Influencer Pricing
Brands shall be able to view influencer promotion pricing.
5. Collaboration Management
FR 21: Send Collaboration Requests
Brands shall be able to send collaboration requests to influencers.
FR 22: View Collaboration Requests
Influencers shall be able to view incoming collaboration requests.
FR 23: Accept Collaboration Requests
Influencers shall be able to accept collaboration requests.
FR 24: Reject Collaboration Requests
Influencers shall be able to reject collaboration requests.
FR 25: Manage Collaboration Status
The system shall maintain collaboration statuses such as Pending, Accepted, Rejected, Active, and Completed.
FR 26: View Collaboration History
Users shall be able to view previous collaborations.
FR 27: Cancel Collaboration Requests
Brands shall be able to withdraw pending collaboration requests.
6. Messaging and Communication
FR 28: Real-Time Messaging
Brands and influencers shall be able to communicate through chat.
FR 29: Send Messages
Users shall be able to send text messages within the platform.
FR 30: Receive Messages
Users shall receive messages from connected collaborators.
FR 31: View Chat History
Users shall be able to access previous conversations.
7. Notifications Management
FR 32: Collaboration Notifications
The system shall notify users regarding collaboration requests and updates.
FR 33: Message Notifications
The system shall notify users when new messages are received.
FR 34: Account Status Notifications
The system shall notify users about verification and account approval status.
8. Campaign Tracking and Analytics
FR 35: Track Campaign Progress
Brands shall be able to monitor ongoing campaign progress.
FR 36: Track Campaign Performance
Brands shall be able to view campaign performance metrics.
FR 37: View Influencer Analytics Dashboard
Influencers shall be able to access analytics dashboards showing collaboration and engagement statistics.
FR 38: Generate Reports
The system shall generate campaign and collaboration reports.
FR 39: View Analytics Reports
Brands and influencers shall be able to view analytics and performance reports.
9. Administration Functions
FR 40: Verify Influencers
Admin shall verify influencer accounts.
FR 41: Verify Brands
Admin shall verify brand accounts.
FR 42: Approve or Reject Accounts
Admin shall approve or reject newly registered accounts.
FR 43: Manage Users
Admin shall manage user accounts and platform access.
FR 44: Monitor Platform Activities
Admin shall monitor user activities and platform operations.
FR 45: View Reports and Analytics
Admin shall access platform-wide reports and analytics.
FR 46: Manage Categories
Admin shall create, update, and delete gaming and esports categories.
FR 47: Manage Platform Settings
Admin shall configure platform settings and policies.
FR 48: Suspend or Reactivate Accounts
Admin shall suspend or reactivate user accounts when necessary.
