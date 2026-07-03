/* =====================================
   Tournament Data
===================================== */

const tournaments = [

    {
        id: 1,
        name: "BGMI Masters Cup",
        announcements: generateAnnouncements(8)
    },

    {
        id: 2,
        name: "Valorant Championship",
        announcements: generateAnnouncements(6)
    },

    {
        id: 3,
        name: "COD Mobile League",
        announcements: generateAnnouncements(10)
    },

    {
        id: 4,
        name: "Free Fire Clash",
        announcements: generateAnnouncements(7)
    },

    {
        id: 5,
        name: "PUBG Pro Series",
        announcements: generateAnnouncements(9)
    },

    {
        id: 6,
        name: "Apex Legends Showdown",
        announcements: generateAnnouncements(5)
    },

    {
        id: 7,
        name: "Rocket League Arena",
        announcements: generateAnnouncements(8)
    },

    {
        id: 8,
        name: "FIFA Global Cup",
        announcements: generateAnnouncements(6)
    },

    {
        id: 9,
        name: "Dota 2 Grand Finals",
        announcements: generateAnnouncements(10)
    },

    {
        id: 10,
        name: "CS2 Premier League",
        announcements: generateAnnouncements(7)
    }

];

/* =====================================
   Dummy Announcements Generator
===================================== */

function generateAnnouncements(count){

    const titles = [

        "Match Schedule Released",
        "Registration Closed",
        "Prize Pool Updated",
        "Round 1 Fixtures Announced",
        "Room IDs Published",
        "Semi Finals Update",
        "Final Match Reminder",
        "New Tournament Rules",
        "Check-In Started",
        "Live Stream Details"

    ];

    const bodies = [

        "Please review the latest tournament update and prepare accordingly.",

        "All participants are requested to follow tournament guidelines.",

        "Important information regarding upcoming matches has been published.",

        "Check the tournament dashboard for match timings and schedule.",

        "Please arrive before your match time to avoid disqualification.",

        "Updated tournament details are now available.",

        "Thank you for participating in our tournament.",

        "Review the latest schedule and announcements.",

        "Match room details have been shared with participants.",

        "Stay tuned for additional tournament updates."

    ];

    const announcements = [];

    for(let i = 0; i < count; i++){

        announcements.push({

            title:
                titles[
                    Math.floor(
                        Math.random() *
                        titles.length
                    )
                ],

            body:
                bodies[
                    Math.floor(
                        Math.random() *
                        bodies.length
                    )
                ],

            created:
                `${Math.floor(
                    Math.random() * 12 + 1
                )} day(s) ago`

        });

    }

    return announcements;

}

/* =====================================
   DOM
===================================== */

const tournamentGrid =
    document.getElementById(
        "tournamentGrid"
    );

const tournamentList =
    document.getElementById(
        "tournamentList"
    );

const announcementView =
    document.getElementById(
        "announcementView"
    );

const announcementList =
    document.getElementById(
        "announcementList"
    );

const tournamentTitle =
    document.getElementById(
        "tournamentTitle"
    );

const modal =
    document.getElementById(
        "announcementModal"
    );

const createAnnouncementBtn =
    document.getElementById(
        "createAnnouncementBtn"
    );

const closeModalBtn =
    document.getElementById(
        "closeModalBtn"
    );

const publishBtn =
    document.getElementById(
        "publishBtn"
    );

const announcementTitle =
    document.getElementById(
        "announcementTitle"
    );

const announcementBody =
    document.getElementById(
        "announcementBody"
    );

/* =====================================
   State
===================================== */

let currentTournament = null;

/* =====================================
   Render Tournament Cards
===================================== */

function renderTournaments(){

    tournamentGrid.innerHTML = "";

    tournaments.forEach(tournament => {

        tournamentGrid.insertAdjacentHTML(

            "beforeend",

            `
            <div
                class="tournament-card"
                data-id="${tournament.id}"
            >

                <h3>
                    ${tournament.name}
                </h3>

                <p>
                    ${tournament.announcements.length}
                    Announcements
                </p>

                <button
                    class="table-btn tournament-view-btn"
                    data-id="${tournament.id}"
                >
                    View
                </button>

            </div>
            `

        );

    });

    bindTournamentEvents();

}

/* =====================================
   Bind Tournament Buttons
===================================== */

function bindTournamentEvents(){

    document
        .querySelectorAll(
            ".tournament-view-btn"
        )
        .forEach(btn => {

            btn.addEventListener(
                "click",
                () => {

                    openAnnouncements(
                        Number(
                            btn.dataset.id
                        )
                    );

                }
            );

        });

}

/* =====================================
   Open Tournament
===================================== */

function openAnnouncements(id){

    currentTournament =
        tournaments.find(
            item =>
                item.id === id
        );
        
showInfoToast(
    `Opened ${currentTournament.name}`
);


    tournamentList.style.display =
        "none";

    announcementView.style.display =
        "block";

    tournamentTitle.textContent =
        currentTournament.name;

    renderAnnouncements();

}

/* =====================================
   Back
===================================== */

function goBack(){

    tournamentList.style.display =
        "block";

    announcementView.style.display =
        "none";

        
  showInfoToast(
        "Returned to tournaments list"
    );


}

/* =====================================
   Render Announcements
===================================== */

function renderAnnouncements(){

    announcementList.innerHTML = "";

    if(
        !currentTournament ||
        currentTournament.announcements.length === 0
    ){
        showInfoToast(
    "No announcements available"
);

        announcementList.innerHTML = `
        
            <div class="empty-announcement">

                <i class="fa-solid fa-bullhorn"></i>

                <h3>
                    No Announcements
                </h3>

                <p>
                    Create the first announcement.
                </p>

            </div>

        `;

        return;
    }

    currentTournament.announcements
        .forEach(item => {

            announcementList.insertAdjacentHTML(

                "beforeend",

                `
                <div
                    class="card announcement-card"
                >

                    <h3>
                        ${item.title}
                    </h3>

                    <p>
                        ${item.body}
                    </p>

                    <span>
                        ${item.created}
                    </span>

                </div>
                `

            );

        });

}

/* =====================================
   Open Modal
===================================== */

createAnnouncementBtn.addEventListener(

    "click",

    () => {

        modal.classList.add("show");
        
showInfoToast(
    "Create a new announcement"
);


    }

);

/* =====================================
   Close Modal
===================================== */

closeModalBtn.addEventListener(

    "click",

    () => {

        modal.classList.remove(
            "show"
        );
        
showInfoToast(
    "Announcement creation cancelled"
);

    }

);

modal.addEventListener(

    "click",

    event => {

        if(event.target === modal){

            modal.classList.remove(
                "show"
            );

        }

    }

);

/* =====================================
   Publish Announcement
===================================== */

publishBtn.addEventListener(

    "click",

    () => {

        const title =
            announcementTitle.value.trim();

        const body =
            announcementBody.value.trim();

        const titleError =
    document.getElementById(
        "titleError"
    );

const bodyError =
    document.getElementById(
        "bodyError"
    );

titleError.textContent = "";
bodyError.textContent = "";

announcementTitle.classList.remove(
    "input-error"
);

announcementBody.classList.remove(
    "input-error"
);

let hasError = false;

            if(!title){

                titleError.textContent =
                    "Announcement title is required.";

                announcementTitle.classList.add(
                    "input-error"
                );

                hasError = true;
            }

            if(!body){

                bodyError.textContent =
                    "Announcement content is required.";

                announcementBody.classList.add(
                    "input-error"
                );

                hasError = true;
            }

            if(hasError){
                
showWarningToast(
        "Please complete all required fields"
    );

                return;
            }
        currentTournament
            .announcements
            .unshift({

                title,

                body,

                created:"Just now"

            });

        announcementTitle.value = "";
        announcementBody.value = "";

        modal.classList.remove(
            "show"
        );

        renderAnnouncements();
        renderTournaments();
        
showSuccessToast(
    "Announcement published successfully"
);


    }

);

announcementTitle.addEventListener(
    "focus",
    () => {

        announcementTitle.classList.remove(
            "input-error"
        );

        document.getElementById(
            "titleError"
        ).textContent = "";

    }
);

announcementBody.addEventListener(
    "focus",
    () => {

        announcementBody.classList.remove(
            "input-error"
        );

        document.getElementById(
            "bodyError"
        ).textContent = "";

    }
);

/* =====================================
   Initial Load
===================================== */

renderTournaments();

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

function showErrorToast(message) {
    Toastify({
        text: message,
        duration: 4000,
        gravity: "top",
        position: "right",
        close: true,
        stopOnFocus: true,
        style: {
            background: "#EF4444"
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
