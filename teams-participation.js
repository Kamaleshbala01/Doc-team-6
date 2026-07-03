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
    "registration_status": "Pending",
    "payment_status": "PAID",
    "entry_fee": 5000,
    "team_size": 5
  },
  {
    "registration_id": "REG-002",
    "team_id": "TEAM-102",
    "tournament_id": "2d7a8f91-5c34-4eab-9f62-1b8d7e3c5a49",
    "registration_date": "2026-07-01T09:05:00Z",
    "registration_status": "Pending",
    "payment_status": "UNPAID",
    "entry_fee": 5500,
    "team_size": 4
  },
  {
    "registration_id": "REG-003",
    "team_id": "TEAM-103",
    "tournament_id": "e6c1f8a3-2b49-4d7e-8a15-9f3c6b2d7e84",
    "registration_date": "2026-07-01T09:10:00Z",
    "registration_status": "Verified",
    "payment_status": "PAID",
    "entry_fee": 6000,
    "team_size": 5
  },
  {
    "registration_id": "REG-004",
    "team_id": "TEAM-104",
    "tournament_id": "9f4b3c27-1e6a-4d88-a2f3-7c9e5b1d4a60",
    "registration_date": "2026-07-01T09:15:00Z",
    "registration_status": "Pending",
    "payment_status": "PAID",
    "entry_fee": 6500,
    "team_size": 4
  },
  {
    "registration_id": "REG-005",
    "team_id": "TEAM-105",
    "tournament_id": "2d7a8f91-5c34-4eab-9f62-1b8d7e3c5a49",
    "registration_date": "2026-07-01T09:20:00Z",
    "registration_status": "Pending",
    "payment_status": "UNPAID",
    "entry_fee": 7000,
    "team_size": 5
  },
  {
    "registration_id": "REG-006",
    "team_id": "TEAM-106",
    "tournament_id": "e6c1f8a3-2b49-4d7e-8a15-9f3c6b2d7e84",
    "registration_date": "2026-07-01T09:25:00Z",
    "registration_status": "Verified",
    "payment_status": "PAID",
    "entry_fee": 5000,
    "team_size": 4
  },
  {
    "registration_id": "REG-007",
    "team_id": "TEAM-107",
    "tournament_id": "9f4b3c27-1e6a-4d88-a2f3-7c9e5b1d4a60",
    "registration_date": "2026-07-01T09:30:00Z",
    "registration_status": "Pending",
    "payment_status": "PAID",
    "entry_fee": 5500,
    "team_size": 5
  },
  {
    "registration_id": "REG-008",
    "team_id": "TEAM-108",
    "tournament_id": "2d7a8f91-5c34-4eab-9f62-1b8d7e3c5a49",
    "registration_date": "2026-07-01T09:35:00Z",
    "registration_status": "Pending",
    "payment_status": "UNPAID",
    "entry_fee": 6000,
    "team_size": 4
  },
  {
    "registration_id": "REG-009",
    "team_id": "TEAM-109",
    "tournament_id": "e6c1f8a3-2b49-4d7e-8a15-9f3c6b2d7e84",
    "registration_date": "2026-07-01T09:40:00Z",
    "registration_status": "Verified",
    "payment_status": "PAID",
    "entry_fee": 6500,
    "team_size": 5
  },
  {
    "registration_id": "REG-010",
    "team_id": "TEAM-110",
    "tournament_id": "9f4b3c27-1e6a-4d88-a2f3-7c9e5b1d4a60",
    "registration_date": "2026-07-01T09:45:00Z",
    "registration_status": "Pending",
    "payment_status": "PAID",
    "entry_fee": 7000,
    "team_size": 5
  }
];

let teamTable = [
  {
    "team_id": "TEAM-101",
    "team_name": "Chennai Warriors",
    "verification_status" : "Pending"
  },
  {
    "team_id": "TEAM-102",
    "team_name": "Madurai Titans",
    "verification_status" : "Pending",
  },
  {
    "team_id": "TEAM-103",
    "team_name": "Coimbatore Kings",
    "verification_status" : "Verified"
  },
  {
    "team_id": "TEAM-104",
    "team_name": "Trichy Strikers",
    "verification_status" : "Pending"
  },
  {
    "team_id": "TEAM-105",
    "team_name": "Salem Eagles",
    "verification_status" : "Pending"
  },
  {
    "team_id": "TEAM-106",
    "team_name": "Vellore Vikings",
    "verification_status" : "Verified"
  },
  {
    "team_id": "TEAM-107",
    "team_name": "Tirunelveli Thunder",
    "verification_status" : "Pending"
  },
  {
    "team_id": "TEAM-108",
    "team_name": "Erode Panthers",
    "verification_status" : "Pending"
  },
  {
    "team_id": "TEAM-109",
    "team_name": "Thoothukudi Sharks",
    "verification_status" : "Verified"
  },
  {
    "team_id": "TEAM-110",
    "team_name": "Kanchipuram Knights",
    "verification_status" : "Pending"
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

// ========================================
// Statistics
// ========================================

let totalTeams = 0;
let totalParticipants = 0;
let verifiedTeams = 0;

let pendingTeams = 0;

let verifiedParticipants = 0;
let pendingParticipants = 0;

let avgTeamSize = 0;

let tournamentCount = 0;


function updateHeaderDetails(){
            totalTeams = teamTable.length;
             totalParticipants = teamDetails.length;
            verifiedTeams = registrationDetails.filter(
            item => item.registration_status === "Verified"
        ).length;

            pendingTeams = registrationDetails.filter(
            item => item.registration_status === "Pending"
        ).length;

        avgTeamSize =
        totalTeams > 0
            ? (
                registrationDetails.reduce(
                    (sum, item) => sum + item.team_size,
                    0
                ) / totalTeams
            ).toFixed(1)
            : 0;

        tournamentCount = new Set(
        registrationDetails.map(
            item => item.tournament_id
        )
    ).size;

    verifiedParticipants =
    registrationDetails
        .filter(
            item =>
                item.registration_status === "Verified"
        )
        .reduce(
            (sum, item) =>
                sum + item.team_size,
            0
        );

pendingParticipants =
    registrationDetails
        .filter(
            item =>
                item.registration_status === "Pending"
        )
        .reduce(
            (sum, item) =>
                sum + item.team_size,
            0
        );

}


// ========================================
// Populate Stats
// ========================================


function updateHeaderDetailsHTML(){
    document.getElementById("totalTeams").textContent =
    totalTeams;

document.getElementById("totalParticipants").textContent =
    totalParticipants;

document.getElementById("verifiedTeams").textContent =
    verifiedTeams;

document.getElementById("pendingTeams").textContent =
    pendingTeams;

document.getElementById("avgTeamSize").textContent =
    avgTeamSize;

document.getElementById("totalTournaments").textContent =
    tournamentCount;

// document.getElementById("participantCount").textContent =
//     totalParticipants;



document.getElementById(
    "verifiedParticipantCount"
).textContent =
    verifiedParticipants;

document.getElementById(
    "pendingParticipantCount"
).textContent =
    pendingParticipants;

}

updateHeaderDetails();
updateHeaderDetailsHTML();



// ========================================
// Helper Functions
// ========================================

function getRegistration(teamId) {
    return registrationDetails.find(
        item => item.team_id === teamId
    );
}

function getTeamMembers(teamId) {
    return teamDetails.filter(
        item => item.team_id === teamId
    );
}

function getCaptain(teamId) {
    const captain = teamDetails.find(
        item =>
            item.team_id === teamId &&
            item.role.toLowerCase() === "captain"
    );

    return captain
        ? captain.player_name
        : "N/A";
}

function getTeamStatus(teamId) {

    let team = registrationDetails.filter((data) => {
        if(data.team_id === teamId) return data;
    });

    if(!team && team.length < 1) return "invalid Team";
    console.log("registration details : " + team[0].registration_status);
    
    return team[0].registration_status;
}


// ========================================
// Render Teams Table
// ========================================

const teamTableBody =
    document.getElementById(
        "teamTableBody"
    );

function renderTeams(
    searchTerm = ""
) {

    teamTableBody.innerHTML = "";

    const filteredTeams =
        teamTable.filter(team =>
            team.team_name.toLowerCase()
            .includes(searchTerm.toLowerCase())
        );

    if (filteredTeams.length === 0) {
        showWarningToast("No teams found.");

        teamTableBody.innerHTML = `
            <tr>
                <td colspan="6" style="text-align:center;padding:20px;">
                    No Teams Found
                </td>
            </tr>
        `;

        return;
    }

    filteredTeams.forEach(team => {

        const members =
            getTeamMembers(team.team_id);

        const captain =
            getCaptain(team.team_id);

        const registration =
            getRegistration(team.team_id);

        const status =
            getTeamStatus(team.team_id);

        const teamSize =
            registration?.team_size ??
            members.length;

        const date =
            registration
                ? new Date(
                    registration.registration_date
                ).toLocaleDateString()
                : "-";

        let badgeClass =
            status === "Verified"
                ? "live"
                : "upcoming";

        teamTableBody.insertAdjacentHTML(
            "beforeend",
            `
            
                <tr
                    class="team-list"
                    data-team-id="${team.team_id}"
                >

                <td>${team.team_name}</td>

                <td>
                  ${findTournamentname(team.team_id)}
                </td>

                <td>
                    ${members.length}
                </td>

                <td>
                    <span class="badge ${badgeClass}">
                        ${status}
                    </span>
                </td>

                <td>
                    ${date}
                </td>
            </tr>
            `
        );

    });

    bindTeamEvents();

}

renderTeams();

function findTournamentname(team_id){

    let TeamRegisteredTorunament = registrationDetails.filter(data =>{
        console.log("flag 1  : " + data.team_id);
        if(data.team_id === team_id) {
            return data;
        }
    });

    if(TeamRegisteredTorunament && TeamRegisteredTorunament.length < 1) return "Tournament Name not found";

    let torunamentId = TeamRegisteredTorunament[0].tournament_id;

    let torunamentObj = data.filter(d =>{
        if(d.id === torunamentId) return d;
    })

   if(torunamentObj && torunamentObj.length < 1) return "Tournament Name not found";

   return torunamentObj[0].name;
    
}



// ========================================
// Team Search
// ========================================

const searchInput =
    document.getElementById(
        "teamSearch"
    );

if (searchInput) {

    searchInput.addEventListener(
        "keyup",
        (event) => {

            renderTeams(
                event.target.value
            );

        }
    );

}


// ========================================
// Recent Teams
// ========================================

const recentTeamsContainer =
    document.getElementById(
        "recentTeams"
    );

function renderRecentTeams() {

    if (!recentTeamsContainer)
        return;

    recentTeamsContainer.innerHTML = "";

    const recentTeams =
        [...teamTable]
            .reverse()
            .slice(0, 5);

    recentTeams.forEach(
        (team, index) => {

            const captain =
                getCaptain(team.team_id);

            recentTeamsContainer.insertAdjacentHTML(
                "beforeend",
                `
                <div class="registration-item">

                    <img src=https://i.pravatar.cc/40?img=${index + 1}>

                    <div>
                        <h4>
                            ${team.team_name}
                        </h4>

                        <p>
                            Captain: ${captain}
                        </p>
                    </div>

                </div>
                `
            );

        }
    );
}

renderRecentTeams();


// ========================================
// Quick Calculation Logs
// ========================================

console.table(teamTable);

console.log(
    "Total Teams:",
    totalTeams
);

console.log(
    "Total Participants:",
    totalParticipants
);

console.log(
    "Verified Teams:",
    verifiedTeams
);

console.log(
    "Pending Teams:",
    pendingTeams
);


const modal =
    document.getElementById("teamModal");

function bindTeamEvents(){

    document
        .querySelectorAll(".team-list")
        .forEach(row => {

            row.onclick = () => {

                const teamId =
                    row.dataset.teamId;

                openTeamPopup(teamId);

            };

        });

}


renderTeams();

let selectedTeamId = null;
function openTeamPopup(teamId){

    selectedTeamId = teamId;
    const team =
        teamTable.find(
            t => t.team_id === teamId
        );

    const registration =
        registrationDetails.find(
            r => r.team_id === teamId
        );

    const members =
        teamDetails
            .filter(
                item => item.team_id === teamId
            )
            .sort((a,b) => {

                if(a.role === "Captain") return -1;
                if(b.role === "Captain") return 1;

                return 0;
            });

    document.getElementById(
        "popupTeamName"
    ).textContent =
        team.team_name;

    document.getElementById(
        "popupTournament"
    ).textContent =
        findTournamentname(teamId);

    document.getElementById(
        "popupStatus"
    ).textContent =
        registration.registration_status;

    document.getElementById(
        "popupPlayers"
    ).textContent =
        members.length;

    const tbody =
        document.getElementById(
            "popupMemberTable"
        );

    tbody.innerHTML = "";

    members.forEach(member => {

        tbody.insertAdjacentHTML(
            "beforeend",
            `
            <tr class="${
                member.role === 'Captain'
                ? 'captain-row'
                : ''
            }">

                <td>
                    ${member.member_id}
                </td>

                <td>
                    ${member.player_name}
                </td>

                <td>
                    ${member.role}
                </td>

            </tr>
            `
        );

    });
    showInfoToast(`Viewing ${team.team_name}`);

    modal.classList.add("show");
}
document
.getElementById("closeModal")
.addEventListener(
    "click",
    () => {
        selectedTeamId = null;
        modal.classList.remove("show");
        showInfoToast("Team details closed");
    }
);

modal.addEventListener(
    "click",
    e => {

        if(e.target === modal){
            selectedTeamId = null;
            modal.classList.remove("show");
            showInfoToast("Team details closed");
        }

    }
);


document
.getElementById("approveBtn")
.addEventListener(
    "click",
    () => {

        const registration =
            registrationDetails.find(
                item => item.team_id === selectedTeamId
            );

        if(registration){

            if(registration.registration_status === "Verifed"){
                
    showWarningToast(
        "This team is already verified."
    )

            }
            else{

            registration.registration_status =
                "Verified";
                
showSuccessToast(
    `Team ${selectedTeamId} approved successfully`
);

            }
                


            console.log(
                "Updated Registration:",
                registration
            );
        }

        renderTeams();
        updateHeaderDetails();
        updateHeaderDetailsHTML();

        modal.classList.remove("show");
        showInfoToast("Team details closed");

    }
);

function showSuccessToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        close: true,
        style: {
            background: "#22C55E"
        }
    }).showToast();
}

function showErrorToast(message) {
    Toastify({
        text: message,
        duration: 4000,
        gravity: "top",
        position: "right",
        close: true,
        style: {
            background: "#EF4444"
        }
    }).showToast();
}

function showInfoToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        close: true,
        style: {
            background: "#06B6D4"
        }
    }).showToast();
}

function showWarningToast(message) {
    Toastify({
        text: message,
        duration: 3500,
        gravity: "top",
        position: "right",
        close: true,
        style: {
            background: "#F59E0B"
        }
    }).showToast();
}