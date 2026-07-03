let data = [
{
        id : "9f4b3c27-1e6a-4d88-a2f3-7c9e5b1d4a60",
        name: "BGMI Masters Cup",
        description: "3 round elimination tournament",
        game: "BGMI",
        status: "Live",
        teams: 32,
        prize: "₹75,000",
        organizer: "GameArena",
        format: "Leaderboard",
        startDate: "20 May 2026",
        endDate: "25 May 2026",
        verification: "Yes"
    },
{
        id : "2d7a8f91-5c34-4eab-9f62-1b8d7e3c5a49",
        name: "Valorant Showdown",
        description: "Single elimination bracket",
        game: "Valorant",
        status: "Upcoming",
        teams: 16,
        prize: "₹30,000",
        organizer: "GameArena",
        format: "Single Elimination",
        startDate: "15 Aug 2026",
        endDate: "18 Aug 2026",
        verification: "Yes"
    },
{
        id : "e6c1f8a3-2b49-4d7e-8a15-9f3c6b2d7e8",      
        name: "CODM League",
        description: "League format tournament",
        game: "CODM",
        status: "Completed",
        teams: 64,
        prize: "₹40,000",
        organizer: "GameArena",
        format: "Leaderboard",
        startDate: "10 Jun 2026",
        endDate: "20 Jun 2026",
        verification: "No"
    }

];

let registrationDetails = [
  {
    "registration_id": "REG-001",
    "team_id": "TEAM-101",
    "tournament_id": "9f4b3c27-1e6a-4d88-a2f3-7c9e5b1d4a60",
    "registration_date": "2026-07-01T09:00:00Z",
    "registration_status": "CONFIRMED",
    "payment_status": "PAID",
    "entry_fee": 5000,
    "team_size": 11
  },
  {
    "registration_id": "REG-002",
    "team_id": "TEAM-102",
    "tournament_id": "2d7a8f91-5c34-4eab-9f62-1b8d7e3c5a49",
    "registration_date": "2026-07-01T09:05:00Z",
    "registration_status": "PENDING",
    "payment_status": "UNPAID",
    "entry_fee": 5500,
    "team_size": 12
  },
  {
    "registration_id": "REG-003",
    "team_id": "TEAM-103",
    "tournament_id": "e6c1f8a3-2b49-4d7e-8a15-9f3c6b2d7e84",
    "registration_date": "2026-07-01T09:10:00Z",
    "registration_status": "CONFIRMED",
    "payment_status": "PAID",
    "entry_fee": 6000,
    "team_size": 13
  },
  {
    "registration_id": "REG-004",
    "team_id": "TEAM-104",
    "tournament_id": "9f4b3c27-1e6a-4d88-a2f3-7c9e5b1d4a60",
    "registration_date": "2026-07-01T09:15:00Z",
    "registration_status": "CONFIRMED",
    "payment_status": "PAID",
    "entry_fee": 6500,
    "team_size": 14
  },
  {
    "registration_id": "REG-005",
    "team_id": "TEAM-105",
    "tournament_id": "2d7a8f91-5c34-4eab-9f62-1b8d7e3c5a49",
    "registration_date": "2026-07-01T09:20:00Z",
    "registration_status": "PENDING",
    "payment_status": "UNPAID",
    "entry_fee": 7000,
    "team_size": 15
  },
  {
    "registration_id": "REG-006",
    "team_id": "TEAM-106",
    "tournament_id": "e6c1f8a3-2b49-4d7e-8a15-9f3c6b2d7e84",
    "registration_date": "2026-07-01T09:25:00Z",
    "registration_status": "CONFIRMED",
    "payment_status": "PAID",
    "entry_fee": 5000,
    "team_size": 10
  },
  {
    "registration_id": "REG-007",
    "team_id": "TEAM-107",
    "tournament_id": "9f4b3c27-1e6a-4d88-a2f3-7c9e5b1d4a60",
    "registration_date": "2026-07-01T09:30:00Z",
    "registration_status": "CONFIRMED",
    "payment_status": "PAID",
    "entry_fee": 5500,
    "team_size": 11
  },
  {
    "registration_id": "REG-008",
    "team_id": "TEAM-108",
    "tournament_id": "2d7a8f91-5c34-4eab-9f62-1b8d7e3c5a49",
    "registration_date": "2026-07-01T09:35:00Z",
    "registration_status": "PENDING",
    "payment_status": "UNPAID",
    "entry_fee": 6000,
    "team_size": 12
  },
  {
    "registration_id": "REG-009",
    "team_id": "TEAM-109",
    "tournament_id": "e6c1f8a3-2b49-4d7e-8a15-9f3c6b2d7e84",
    "registration_date": "2026-07-01T09:40:00Z",
    "registration_status": "CONFIRMED",
    "payment_status": "PAID",
    "entry_fee": 6500,
    "team_size": 13
  },
  {
    "registration_id": "REG-010",
    "team_id": "TEAM-110",
    "tournament_id": "9f4b3c27-1e6a-4d88-a2f3-7c9e5b1d4a60",
    "registration_date": "2026-07-01T09:45:00Z",
    "registration_status": "CONFIRMED",
    "payment_status": "PAID",
    "entry_fee": 7000,
    "team_size": 14
  }
];

let teamTable = [
  {
    "team_id": "TEAM-101",
    "team_name": "Chennai Warriors"
  },
  {
    "team_id": "TEAM-102",
    "team_name": "Madurai Titans"
  },
  {
    "team_id": "TEAM-103",
    "team_name": "Coimbatore Kings"
  },
  {
    "team_id": "TEAM-104",
    "team_name": "Trichy Strikers"
  },
  {
    "team_id": "TEAM-105",
    "team_name": "Salem Eagles"
  },
  {
    "team_id": "TEAM-106",
    "team_name": "Vellore Vikings"
  },
  {
    "team_id": "TEAM-107",
    "team_name": "Tirunelveli Thunder"
  },
  {
    "team_id": "TEAM-108",
    "team_name": "Erode Panthers"
  },
  {
    "team_id": "TEAM-109",
    "team_name": "Thoothukudi Sharks"
  },
  {
    "team_id": "TEAM-110",
    "team_name": "Kanchipuram Knights"
  }
];

let teamDetails = [
  { "member_id": "MEM-1001", "team_id": "TEAM-101", "player_name": "Arun Kumar", "role": "Captain" },
  { "member_id": "MEM-1002", "team_id": "TEAM-101", "player_name": "Karthik S", "role": "Player" },
  { "member_id": "MEM-1003", "team_id": "TEAM-101", "player_name": "Vignesh R", "role": "Player" },
  { "member_id": "MEM-1004", "team_id": "TEAM-101", "player_name": "Praveen M", "role": "Player" },
  { "member_id": "MEM-1005", "team_id": "TEAM-101", "player_name": "Sathish K", "role": "Player" },

  { "member_id": "MEM-1006", "team_id": "TEAM-102", "player_name": "Manoj Kumar", "role": "Captain" },
  { "member_id": "MEM-1007", "team_id": "TEAM-102", "player_name": "Ajith R", "role": "Player" },
  { "member_id": "MEM-1008", "team_id": "TEAM-102", "player_name": "Lokesh P", "role": "Player" },
  { "member_id": "MEM-1009", "team_id": "TEAM-102", "player_name": "Dinesh V", "role": "Player" },

  { "member_id": "MEM-1010", "team_id": "TEAM-103", "player_name": "Naveen S", "role": "Captain" },
  { "member_id": "MEM-1011", "team_id": "TEAM-103", "player_name": "Hari P", "role": "Player" },
  { "member_id": "MEM-1012", "team_id": "TEAM-103", "player_name": "Saravanan K", "role": "Player" },
  { "member_id": "MEM-1013", "team_id": "TEAM-103", "player_name": "Madhan R", "role": "Player" },
  { "member_id": "MEM-1014", "team_id": "TEAM-103", "player_name": "Bharath J", "role": "Player" },

  { "member_id": "MEM-1015", "team_id": "TEAM-104", "player_name": "Suresh B", "role": "Captain" },
  { "member_id": "MEM-1016", "team_id": "TEAM-104", "player_name": "Ragul M", "role": "Player" },
  { "member_id": "MEM-1017", "team_id": "TEAM-104", "player_name": "Vasanth K", "role": "Player" },
  { "member_id": "MEM-1018", "team_id": "TEAM-104", "player_name": "Prakash R", "role": "Player" },

  { "member_id": "MEM-1019", "team_id": "TEAM-105", "player_name": "Rajesh Kumar", "role": "Captain" },
  { "member_id": "MEM-1020", "team_id": "TEAM-105", "player_name": "Ganesh P", "role": "Player" },
  { "member_id": "MEM-1021", "team_id": "TEAM-105", "player_name": "Vijay M", "role": "Player" },
  { "member_id": "MEM-1022", "team_id": "TEAM-105", "player_name": "Kiran S", "role": "Player" },
  { "member_id": "MEM-1023", "team_id": "TEAM-105", "player_name": "Ashok V", "role": "Player" },

  { "member_id": "MEM-1024", "team_id": "TEAM-106", "player_name": "Mohan R", "role": "Captain" },
  { "member_id": "MEM-1025", "team_id": "TEAM-106", "player_name": "Dharan K", "role": "Player" },
  { "member_id": "MEM-1026", "team_id": "TEAM-106", "player_name": "Kishore P", "role": "Player" },
  { "member_id": "MEM-1027", "team_id": "TEAM-106", "player_name": "Nithin S", "role": "Player" },

  { "member_id": "MEM-1028", "team_id": "TEAM-107", "player_name": "Aravind M", "role": "Captain" },
  { "member_id": "MEM-1029", "team_id": "TEAM-107", "player_name": "Ramesh K", "role": "Player" },
  { "member_id": "MEM-1030", "team_id": "TEAM-107", "player_name": "Senthil P", "role": "Player" },
  { "member_id": "MEM-1031", "team_id": "TEAM-107", "player_name": "Dharun V", "role": "Player" },
  { "member_id": "MEM-1032", "team_id": "TEAM-107", "player_name": "Yogesh R", "role": "Player" },

  { "member_id": "MEM-1033", "team_id": "TEAM-108", "player_name": "Jagan T", "role": "Captain" },
  { "member_id": "MEM-1034", "team_id": "TEAM-108", "player_name": "Pranav S", "role": "Player" },
  { "member_id": "MEM-1035", "team_id": "TEAM-108", "player_name": "Abishek K", "role": "Player" },
  { "member_id": "MEM-1036", "team_id": "TEAM-108", "player_name": "Harish M", "role": "Player" },

  { "member_id": "MEM-1037", "team_id": "TEAM-109", "player_name": "Gokul R", "role": "Captain" },
  { "member_id": "MEM-1038", "team_id": "TEAM-109", "player_name": "Janarthan P", "role": "Player" },
  { "member_id": "MEM-1039", "team_id": "TEAM-109", "player_name": "Prem K", "role": "Player" },
  { "member_id": "MEM-1040", "team_id": "TEAM-109", "player_name": "Varun S", "role": "Player" },
  { "member_id": "MEM-1041", "team_id": "TEAM-109", "player_name": "Naren V", "role": "Player" },

  { "member_id": "MEM-1042", "team_id": "TEAM-110", "player_name": "Deepak R", "role": "Captain" },
  { "member_id": "MEM-1043", "team_id": "TEAM-110", "player_name": "Sanjay K", "role": "Player" },
  { "member_id": "MEM-1044", "team_id": "TEAM-110", "player_name": "Balaji P", "role": "Player" },
  { "member_id": "MEM-1045", "team_id": "TEAM-110", "player_name": "Naveen M", "role": "Player" },
  { "member_id": "MEM-1046", "team_id": "TEAM-110", "player_name": "Karthick V", "role": "Player" }
]


function renderTournaments() {

    const tableBody =
        document.getElementById(
            "tournamentTableBody"
        );

    tableBody.innerHTML = "";

    data.forEach((tournament, index) => {

        tableBody.innerHTML += `

            <tr
                class="tournament-row"
                data-id="${index}"
            >

                <td>
                    ${tournament.name}
                </td>

                <td>
                    ${tournament.game}
                </td>

                <td>
                    <span class="badge ${tournament.status.toLowerCase()}">
                        ${tournament.status}
                    </span>
                </td>

                <td>
                    ${tournament.teams}
                </td>

                <td>
                    ${tournament.startDate}
                </td>

                <td>
                    ${tournament.prize}
                </td>

            </tr>

        `;

    });

    attachTournamentEvents();
}
const popup =
    document.getElementById(
        "tournamentPopupOverlay"
    );

const popupContent =
    document.getElementById(
        "popupContent"
    );

function openTournamentPopup(id) {

    const tournament = data[id];

    if (!tournament) return;

    popupContent.innerHTML = `

        <div class="popup-section">

            <h3>Tournament Overview</h3>

            <div class="popup-grid">

                <div class="popup-item">
                    <span>Tournament Name</span>
                    <strong>${tournament.name}</strong>
                </div>

                <div class="popup-item">
                    <span>Game</span>
                    <strong>${tournament.game}</strong>
                </div>

                <div class="popup-item">
                    <span>Status</span>
                    <strong>${tournament.status}</strong>
                </div>

                <div class="popup-item">
                    <span>Format</span>
                    <strong>${tournament.format}</strong>
                </div>

                <div class="popup-item">
                    <span>Teams</span>
                    <strong>${tournament.teams}</strong>
                </div>

                <div class="popup-item">
                    <span>Prize Pool</span>
                    <strong>${tournament.prize}</strong>
                </div>

                <div class="popup-item">
                    <span>Organizer</span>
                    <strong>${tournament.organizer}</strong>
                </div>

                <div class="popup-item">
                    <span>Verification</span>
                    <strong>${tournament.verification}</strong>
                </div>

                <div class="popup-item">
                    <span>Start Date</span>
                    <strong>${tournament.startDate}</strong>
                </div>

                <div class="popup-item">
                    <span>End Date</span>
                    <strong>${tournament.endDate}</strong>
                </div>

            </div>

        </div>

        <div class="popup-section">

            <h3>Description</h3>

            <div class="popup-item">

                <strong>
                    ${tournament.description}
                </strong>

            </div>

        </div>

    `;

    popup.classList.add("active");
}
function attachTournamentEvents() {

    document
        .querySelectorAll(".tournament-row")
        .forEach(row => {

            row.addEventListener("click", () => {

                const id =
                    Number(row.dataset.id);

                openTournamentPopup(id);

            });

        });

}
document
    .getElementById(
        "closeTournamentPopup"
    )
    .addEventListener("click", () => {

        popup.classList.remove("active");

    });

popup.addEventListener("click", e => {

    if (e.target === popup) {

        popup.classList.remove("active");

    }

});
renderTournaments();