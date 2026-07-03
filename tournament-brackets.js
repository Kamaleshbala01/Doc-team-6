/* ====================================
   Data
==================================== */

const tournaments = [

    {
        tournament_id: "TRN-001",
        tournament_name: "BGMI Masters Cup",
        type: "BRACKET",

        teams: [

            { team_id:"T1", team_name:"Team Alpha" },
            { team_id:"T2", team_name:"Team Bravo" },
            { team_id:"T3", team_name:"Team Charlie" },
            { team_id:"T4", team_name:"Team Delta" },
            { team_id:"T5", team_name:"Team Echo" },
            { team_id:"T6", team_name:"Team Falcon" },
            { team_id:"T7", team_name:"Team Ghost" },
            { team_id:"T8", team_name:"Team Hydra" },
            { team_id:"T9", team_name:"Team Inferno" },
            { team_id:"T10", team_name:"Team Jaguar" },
            { team_id:"T11", team_name:"Team Kraken" },
            { team_id:"T12", team_name:"Team Legend" }

        ]
    },

    {
        tournament_id: "TRN-002",
        tournament_name: "Valorant Champions League",
        type: "LEADERBOARD",

        teams: [

            { team_id:"V1", team_name:"Phoenix Squad" },
            { team_id:"V2", team_name:"Shadow Reapers" },
            { team_id:"V3", team_name:"Night Raiders" },
            { team_id:"V4", team_name:"Velocity Esports" },
            { team_id:"V5", team_name:"Thunder X" },
            { team_id:"V6", team_name:"Venom Strike" },
            { team_id:"V7", team_name:"Nova Force" },
            { team_id:"V8", team_name:"Arcane Squad" }

        ]
    }
];

/* ====================================
   DOM
==================================== */

const tournamentGrid =
    document.getElementById(
        "tournamentGrid"
    );

const tournamentSelection =
    document.getElementById(
        "tournamentSelection"
    );

const bracketWorkspace =
    document.getElementById(
        "bracketWorkspace"
    );

const selectedTournament =
    document.getElementById(
        "selectedTournament"
    );

const teamList =
    document.getElementById(
        "teamList"
    );

const bracketView =
    document.getElementById(
        "bracketView"
    );

const leaderboardView =
    document.getElementById(
        "leaderboardView"
    );

const leaderboardBody =
    document.getElementById(
        "leaderboardBody"
    );

const auditLog =
    document.getElementById(
        "auditLog"
    );

const bracketBtn =
    document.getElementById(
        "bracketBtn"
    );

const leaderboardBtn =
    document.getElementById(
        "leaderboardBtn"
    );

const teamSearch =
    document.getElementById(
        "teamSearch"
    );

/* ====================================
   State
==================================== */

let currentTournament = null;
let draggedTeam = null;

/* ====================================
   Tournament Cards
==================================== */

function renderTournamentCards(){

    tournamentGrid.innerHTML = "";

    tournaments.forEach(tournament => {

        tournamentGrid.insertAdjacentHTML(

            "beforeend",

            `
            <div
                class="tournament-card"
            >

                <h3>
                    ${tournament.tournament_name}
                </h3>

                <p>
                    Type :
                    ${tournament.type}
                </p>

                <button
                    class="table-btn"
                    onclick="openTournament('${tournament.tournament_id}')"
                >
                    View
                </button>

            </div>
            `
        );

    });

}

/* ====================================
   Open Tournament
==================================== */

function openTournament(id){

    currentTournament =
        tournaments.find(
            item =>
            item.tournament_id === id
        );
        
showInfoToast(
    `${currentTournament.tournament_name} loaded`
);


    tournamentSelection.style.display =
        "none";

    bracketWorkspace.style.display =
        "block";

    selectedTournament.textContent =
        currentTournament.tournament_name;

    auditLog.innerHTML = "";

    renderTeams();

    if(
        currentTournament.type ===
        "BRACKET"
    ){

        showBracket();

    }
    else{

        showLeaderboard();

    }

}

/* ====================================
   Back
==================================== */

function goBack(){

    bracketWorkspace.style.display =
        "none";

    tournamentSelection.style.display =
        "block";
        
 showInfoToast(
        "Returned to tournament selection"
    );


}

/* ====================================
   Team Pool
==================================== */

function renderTeams(){

    teamList.innerHTML = "";

    currentTournament.teams.forEach(team => {

        teamList.insertAdjacentHTML(

            "beforeend",

            `
            <div
                class="team-card"
                draggable="true"
                data-id="${team.team_id}"
                data-name="${team.team_name}"
            >
                ${team.team_name}
            </div>
            `
        );

    });

    bindTeamDrag();

}

/* ====================================
   Team Search
==================================== */

teamSearch.addEventListener(
    "input",
    e => {

        const term =
            e.target.value.toLowerCase();

        document
        .querySelectorAll(
            ".team-card"
        )
        .forEach(card => {

            card.style.display =
                card.textContent
                .toLowerCase()
                .includes(term)
                ? "block"
                : "none";

        });

    }
);

/* ====================================
   Drag Teams
==================================== */

function bindTeamDrag(){

    document
    .querySelectorAll(
        ".team-card"
    )
    .forEach(card => {

        card.addEventListener(
            "dragstart",
            () => {
                
                showInfoToast(
                    `Selected ${card.dataset.name}`
                );


                draggedTeam = {
                    

                    id:
                    card.dataset.id,

                    name:
                    card.dataset.name

                };

            }
        );

    });

}

/* ====================================
   BRACKET
==================================== */

function showBracket(){

    bracketBtn.classList.add(
        "active"
    );

    leaderboardBtn.classList.remove(
        "active"
    );

    bracketView.style.display = "flex";
    leaderboardView.style.display = "none";

    renderBracket();
    
showInfoToast(
    "Bracket view activated"
);


}

function renderBracket(){

    bracketView.innerHTML = "";

    const rounds = [

        4,
        2,
        1

    ];

    rounds.forEach((matches,index) => {

        const round =
            document.createElement("div");

        round.className =
            "bracket-round";

        let html = `
            <h3
                class="round-title"
            >
                Round ${index+1}
            </h3>
        `;

        for(
            let i = 0;
            i < matches;
            i++
        ){

            html += `

            <div class="match">

                <div
                    class="match-card"
                >

                    <div
                        class="team-slot"
                    >
                        Drop Team
                    </div>

                    <div
                        class="team-slot"
                    >
                        Drop Team
                    </div>

                </div>

            </div>

            `;
        }

        round.innerHTML = html;

        bracketView.appendChild(
            round
        );

    });

    bindBracketDrop();

}

function bindBracketDrop(){

    document
    .querySelectorAll(
        ".team-slot"
    )
    .forEach(slot => {

        slot.addEventListener(
            "dragover",
            e => {

                e.preventDefault();

            }
        );

        slot.addEventListener(
            "drop",
            () => {

                if(!draggedTeam)
                    return;

                slot.textContent =
                    draggedTeam.name;

                addAudit(
                    `${draggedTeam.name} assigned to bracket`
                );
                
showSuccessToast(
    `${draggedTeam.name} assigned successfully`
);

            }
        );

    });

}

/* ====================================
   Leaderboard
==================================== */

function showLeaderboard(){

    bracketBtn.classList.remove(
        "active"
    );

    leaderboardBtn.classList.add(
        "active"
    );

    bracketView.style.display =
        "none";

    leaderboardView.style.display =
        "block";

    renderLeaderboard();
    
    
showInfoToast(
    "Leaderboard view activated"
);


}

function renderLeaderboard(){

    leaderboardBody.innerHTML =
        "";

    currentTournament.teams
    .forEach((team,index)=>{

        leaderboardBody
        .insertAdjacentHTML(

            "beforeend",

            `
            <tr
                class="leaderboard-row"
            >

                <td>
                    ${index+1}
                </td>

                <td
                    class="team-slot"
                >
                    ${team.team_name}
                </td>

                <td>
                    ${
                        Math.floor(
                            Math.random()*100
                        )
                    }
                </td>

                <td
                    class="
                    status-qualified
                    "
                >
                    Qualified
                </td>

            </tr>
            `
        );

    });

}

/* ====================================
   Mode Switch
==================================== */

bracketBtn.addEventListener(
    "click",
    showBracket
);

leaderboardBtn.addEventListener(
    "click",
    showLeaderboard
);

/* ====================================
   Audit Trail
==================================== */

function addAudit(action){

    const time =
        new Date()
        .toLocaleTimeString();

    auditLog.insertAdjacentHTML(

        "afterbegin",

        `
        <div
            class="audit-item"
        >

            <p>
                ${action}
            </p>

            <span>
                ${time}
            </span>

        </div>
        `
    );

}

/* ====================================
   Initial Load
==================================== */

renderTournamentCards();

function showSuccessToast(message) {
    Toastify({
        text: message,
        duration: 3000,
        gravity: "top",
        position: "right",
        close: true,
        stopOnFocus: true,
        style: {
            background: "#22C55E"
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
        stopOnFocus: true,
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
        stopOnFocus: true,
        style: {
            background: "#F59E0B"
        }
    }).showToast();
}
