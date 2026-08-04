# UI Design Prompts — Invictus Gaming & Esports Platform

Paste the **Design System** prompt first (as context/system instructions if the
tool supports it), then paste whichever **screen prompt** you need. Every
screen prompt repeats the core tokens so it also works standalone in tools
that only take one prompt at a time (v0, Galileo AI, Uizard, Figma AI,
Lovable, or a general LLM asked to write HTML/CSS).

---

## 0. Design System (paste this first / always)

```
Design a dark, futuristic esports/gaming SaaS platform UI called "Invictus."

COLOR PALETTE (use as CSS variables):
- Background base: #070B14 (near-black navy)
- Background secondary: #0F172A
- Surface / card glass: rgba(20,27,45,0.65)
- Primary purple: #7C3AED
- Primary purple light: #A855F7
- Secondary cyan: #06B6D4
- Accent pink/magenta: #EC4899
- Success green: #22C55E
- Warning amber: #F59E0B
- Danger red: #EF4444
- Text primary: #FFFFFF
- Text muted: #94A3B8
- Border: rgba(255,255,255,0.08)

BACKGROUND TREATMENT:
Solid #070B14 base with three soft radial-gradient glows blended in:
a purple glow (rgba(124,58,237,0.18)) at top-left (~15% 20%), a cyan glow
(rgba(6,182,212,0.18)) at bottom-right (~85% 80%), and a faint pink glow
(rgba(236,72,153,0.08)) dead-center. No hard edges, everything fades to
transparent — creates an ambient "deep space control room" feel.

SURFACES / CARDS:
Glassmorphism style: translucent dark panels (rgba(20,27,45,0.65)) with
18px border-radius, 1px hairline border in rgba(255,255,255,0.08),
backdrop-filter blur (10–20px), and a soft drop shadow
(0 10px 35px rgba(0,0,0,0.45)). On hover, cards lift slightly
(translateY(-4px)) and gain a colored glow (purple or cyan, 25px blur).

TYPOGRAPHY:
Font family: 'Inter', sans-serif. Weights 300–800. Headings bold/extra-bold
and tight; body text at 1.6 line-height in the muted gray (#94A3B8) for
secondary copy, pure white for primary copy and headings.

BUTTONS:
Primary button: pill/rounded-rectangle, diagonal (135deg) gradient background
running purple → light-purple → pink (#7C3AED → #A855F7 → #EC4899), white
text, icon + label, 12px vertical / 24px horizontal padding. On hover: lifts
up 3px and gains a strong pink glow shadow (0 0 30px rgba(236,72,153,0.6)).
Secondary button: same shape, transparent/glass background with a light
border, fills or glows on hover instead of using the gradient.

ICONOGRAPHY: Font Awesome solid/regular icon set throughout (controllers,
trophies, shields, wallets, users, charts).

OVERALL MOOD: premium competitive-gaming dashboard — think a cross between
a crypto-trading dashboard and an esports tournament broadcast overlay.
Confident, neon-accented, dark-mode-only, generous whitespace, rounded
corners everywhere, subtle glow instead of hard borders.
```

---

## 1. Landing / Marketing Home Page

```
Using the Invictus dark-glassmorphism design system (see above), design a
marketing landing page for an esports influencer-marketing & tournament
platform.

NAVBAR: fixed top bar, transparent/glass, logo on the left (game controller
icon + "Invictus" wordmark + small "Unified Esports Platform" tagline
underneath), center nav links (Home, Tournaments, Influencers, Brands,
About), right side has a ghost "Login" button and a gradient "Register"
button.

HERO SECTION: two-column layout.
- Left column: a small pill badge reading "🔥 India's Largest Gaming
  Community", a huge bold headline "Level Up Your [Gaming Journey]" where
  the last phrase is in the purple→pink gradient as text, a paragraph of
  supporting copy, and a primary gradient CTA button "Create Free Account"
  plus a secondary ghost button.
- Right column: a large glass card mockup of a player profile / stats
  widget, floating with a glow shadow, slightly rotated in 3D perspective.

FEATURE / VALUE SECTION: 3–4 column grid of glass stat/feature cards, each
with an icon in a colored circular badge, a bold number or title, and a
one-line description (e.g. tournaments hosted, prize money distributed,
active influencers, brands onboarded).

ROLE SHOWCASE SECTION: four glass cards side by side — "Players", "Brands",
"Influencers", "Tournament Organizers" — each with an icon, short pitch, and
"Learn more" link, on hover the card glows in a different accent color per
role.

FOOTER: dark, four columns (brand blurb + socials, Platform links, Support
links, Follow Us social icons), hairline divider, centered copyright line.

Keep all corners rounded (18px), all surfaces glassy/blurred, and the
ambient purple/cyan radial glow visible behind every section.
```

---

## 2. Login Page

```
Using the Invictus dark-glassmorphism design system, design a split-screen
login page.

LEFT PANEL (about 45% width, on large screens only): dark panel with the
Invictus logo top-left, a badge "🎮 Welcome Back Gamer", a large headline
"Continue Your [Gaming Journey]" (last words gradient-colored), a short
paragraph, and a checklist of 4 benefits each with a green check-circle
icon (e.g. "Participate in Live Tournaments", "Track Rankings &
Statistics").

RIGHT PANEL: centered glass card (max-width ~420px) containing:
- "Welcome Back" heading + "Sign in to your account" subtext
- Email field: label above, icon-prefixed rounded input box with a subtle
  border that turns red with an error message below when invalid
- Password field: icon-prefixed input with a show/hide eye-icon toggle
  button on the right edge
- Row with "Remember Me" checkbox on the left and "Forgot Password?" link
  (cyan) on the right
- Full-width primary gradient "Login" button
- "OR" divider with horizontal lines on each side
- Two full-width secondary/glass buttons: "Continue with Google",
  "Continue with Discord", each with the brand icon
- Footer line: "Don't have an account? Create Account" (link in gradient
  or cyan)

Background: the ambient radial-glow dark background from the design system,
plus a very subtle full-bleed background texture/image behind the whole
layout at low opacity.
```

---

## 3. Register Page (Player) & Brand Register Page

```
Using the Invictus dark-glassmorphism design system, design an account
registration page. Same split-screen structure as the Login page (left
brand/marketing panel with checklist benefits, right glass form card), but
the form card is taller and includes:
- Full Name, Username, Email Address, Mobile Number, Password, Confirm
  Password — each an icon-prefixed rounded input with its own red inline
  error message
- Password fields have a show/hide toggle icon
- A checkbox row: "I agree to the Terms & Conditions and Privacy Policy"
  with those two phrases as inline gradient/cyan links
- Primary gradient "Create Account" button
- A secondary outlined button below it: "Register as Brand" (building
  icon), offering an alternate registration path
- "OR" divider, then Google/Discord social buttons
- Footer link to Login

VARIANT — Brand Register: instead of the split screen, use a single
centered glass card (like a modal) titled "Brand Registration" /
"Register Your Brand" with a building icon in the header. Fields: Brand
Type (select dropdown), Brand Name, Brand Website URL, Legal Entity
Identifier, Email, Phone, Password, Confirm Password, Business Address
(textarea), Terms checkbox, primary gradient "Register Brand" button, and
a "Already registered? Login" footer link. Same input/icon/error styling
as the player register form.
```

---

## 4. Forgot Password / OTP Verification / Reset Password / Success

```
Using the Invictus dark-glassmorphism design system, design a 4-step
password-recovery flow, each as its own centered glass card (narrower than
the register card, ~420px), all sharing: logo header, a large circular icon
badge at the top (different icon per step) in a soft gradient-tinted
circle, a heading, and a short instructional paragraph.

STEP 1 — Forgot Password: key icon badge. One email input field. Primary
gradient button "Send OTP" with a paper-plane icon. Below it, a secondary
"Back to Login" button with a left-arrow icon. A small info box at the
bottom (icon + muted text) reminding the user to use their registered
email. Footer link to Register.

STEP 2 — OTP Verification: shield icon badge. Subtext shows the masked
email the code was sent to. Six individual square OTP input boxes in a
centered row, each large, monospaced, glass-bordered, glowing purple when
focused/filled. Primary gradient "Verify OTP" button with a check-circle
icon. Below: a live countdown timer "OTP expires in 01:47" in cyan, and a
disabled/enabled "Resend OTP" secondary button. Info box with a tip about
checking spam folders.

STEP 3 — Reset Password: lock icon badge. "New Password" and "Confirm
Password" fields with show/hide toggles. A password-requirements checklist
info box (shield icon) listing 5 rules (8+ chars, uppercase, lowercase,
number, special character) as a bulleted muted-text list. Primary gradient
"Reset Password" button with a key icon.

STEP 4 — Success: large green circular check-mark icon (glowing green,
success color #22C55E) centered at the top. Heading "Password Reset
Successful!" congratulatory paragraph. Info box reminding the user to keep
their password private. Primary gradient "Go to Login" button and a
secondary "Back to Home" button. A muted countdown line: "Redirecting to
Login in 5 seconds..."
```

---

## 5. Dashboard Shell (Sidebar + Topbar) — shared by every role

```
Using the Invictus dark-glassmorphism design system, design the shared
dashboard shell used across all role dashboards.

SIDEBAR: fixed left rail (~250px wide), full viewport height, slightly
darker glass than the main content, subtle right-edge border. Top has the
logo (controller icon + "Invictus" wordmark). Below it a vertical menu
list — each item is an icon + label in a rounded pill row; the active
route's row has a gradient purple-to-pink background fill with a soft
glow, inactive rows are transparent and light up subtly on hover. Bottom of
the sidebar has a divider then a "Logout" row with a door/exit icon.

TOPBAR: sits at the top of the main content area (not full-width, starts
after the sidebar). Left side shows a page title (e.g. "Welcome Back 👋")
and small muted subtitle beneath it. Right side shows a circular profile
avatar image next to the user's name, inside a subtle glass pill.

MAIN CONTENT AREA: dark background with the ambient radial glow, generous
padding, content organized in a responsive grid of glass cards below the
topbar.

Include a thin breadcrumb trail (Home / Section / Page) in muted gray text
directly under the topbar on inner pages, and a full-screen loading
overlay state: a semi-transparent dark blur over everything with a
glowing purple spinning ring and "Loading..." text centered.
```

---

## 6. Player (User) Dashboard

```
Using the Invictus dashboard shell (sidebar + topbar) from above, design
the Player/User home dashboard content area.

PROFILE BANNER: wide glass card at the top — circular profile photo on the
left, next to it the player's name (large, bold), a line of game tags
("BGMI • Valorant • COD Mobile"), and a small green "Verified Player" pill
with a check-circle icon.

QUICK STATS ROW: 4 equal glass stat-cards in a row, each with a large icon
at the top (trophy, medal, ranking star, wallet), a big bold number/value,
and a muted label underneath (e.g. "32 Tournaments Played", "18 Wins",
"#124 Current Rank", "₹24,500 Total Rewards"). Cards glow softly on hover.

Below that: two-column section — a "Recent Matches" list card (rows with
game icon, opponent/team name, W/L badge in green or red) and an
"Upcoming Tournaments" list card (rows with tournament name, date, entry
status pill).
```

---

## 7. Brand Dashboard

```
Using the Invictus dashboard shell, design the Brand role's dashboard
content area.

QUICK STATS ROW: 4 glass stat-cards — Active Campaigns (bullhorn icon),
Influencers Reached (users icon), Total Spend (wallet icon), Avg. ROI
(chart-line icon) — each large bold value + muted label, cyan/purple icon
accents.

CAMPAIGN TABLE / CARD LIST: a glass panel titled "Your Campaigns" showing
rows/cards for each campaign — campaign title, budget, an influencer-count
badge, and a status pill (color-coded: gray "Draft", green "Active", blue
"Completed"). Each row has a subtle hover highlight and a "View" action
icon on the right.

Add a secondary section with a horizontal bar or donut chart card (glass
panel) visualizing spend by campaign, using the purple/cyan/pink palette
for chart segments.
```

---

## 8. Tournament Organizer Dashboard

```
Using the Invictus dashboard shell, design the Tournament Organizer's
dashboard content area.

QUICK STATS ROW: 4 glass stat-cards — Active Tournaments (trophy icon),
Registered Teams (people-group icon), Matches Today (gamepad icon), Total
Prize Pool (sack-dollar icon).

RECENT TOURNAMENTS TABLE: glass card with a table/list of tournaments —
columns for Name, Game, Teams, Status (color pill: green "Live", cyan
"Upcoming", gray "Completed"), Prize Pool. Rows have hover glow.

TWO-COLUMN LOWER SECTION:
- "Latest Team Registrations" glass card — rows with team name, game
  badge, verification status pill (amber "Pending" / green "Verified")
- "Recent Activity" glass card — a vertical timeline/feed with small dot
  markers and short activity lines ("Tournament Published", "Sponsor
  Joined", "25 Teams Registered"...), newest at top, connected by a thin
  vertical line in the gradient colors.
```

---

## 9. Admin Dashboard

```
Using the Invictus dashboard shell, design the Admin role's dashboard
content area — the most data-dense screen in the platform.

QUICK STATS ROW: 4 glass stat-cards — Total Users (users icon), Total
Brands (building icon), Total Influencers (star icon), Active Tournaments
(trophy icon) — large numbers with comma separators, small trend arrows in
green/red next to each.

RECENT ACTIVITY FEED: a wide glass card titled "Recent Activity" — a
vertical list of system events, each row with a small colored dot/icon on
the left (approval = purple, publish = cyan, verification = green, payout
= amber), the event text in white, and a muted relative timestamp on the
right ("12 min ago", "1 hr ago").

Optionally add a summary chart card (line or bar chart in the gradient
palette) showing platform growth over time, and a compact "Pending
Approvals" glass card listing items awaiting admin action with quick
Approve/Reject icon buttons.
```

---

## 10. Placeholder / "Coming Soon" Page

```
Using the Invictus dashboard shell, design a minimal placeholder/empty
state for feature pages not yet built. Keep the sidebar and topbar from the
shell. Below the breadcrumb, show a large centered bold heading with the
page name (e.g. "Create Campaign Page") and, optionally, a muted subtext
"This page is coming soon." No other content — plenty of empty dark space
with the ambient glow visible, so it still feels intentional rather than
broken.
```

---

## Tips for using these with different tools

- **v0.dev / Lovable / Bolt / Claude with Artifacts** — paste the Design
  System block, then a screen prompt, and ask for React + Tailwind or plain
  HTML/CSS output.
- **Figma AI / Uizard / Galileo AI** — these work best with the screen
  prompts alone (they don't need the raw hex-variable framing); keep the
  "COLOR PALETTE" and "BACKGROUND TREATMENT" lines, drop the CSS-variable
  phrasing.
- **Midjourney / DALL·E (for mockup art, not code)** — condense each screen
  prompt into one dense paragraph and append: `dark UI dashboard mockup,
  glassmorphism, purple and cyan neon glow, Inter font, 4k, high detail,
  Figma-style --ar 16:9`.
- Reuse the exact hex codes every time — that's what keeps every generated
  screen visually consistent with each other.
