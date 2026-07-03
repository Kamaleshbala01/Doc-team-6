let organizerSponsors = [
    {
        organizer_id: "ORG-001",
        sponsor_id: "SPN-001",
        sponsorship_start_date: "2026-01-01",
        sponsorship_end_date: "2026-12-31",
        amount: 500000
    },
    {
        organizer_id: "ORG-001",
        sponsor_id: "SPN-002",
        sponsorship_start_date: "2026-02-15",
        sponsorship_end_date: "2026-11-30",
        amount: 350000
    }
];

const sponsors = [
    {
        sponsor_id: "SPN-001",
        name: "TechNova Solutions",
        amount: 323000
    },
    {
        sponsor_id: "SPN-002",
        name: "Elite Energy Pvt Ltd",
        amount: 550000
    },
    {
        sponsor_id: "SPN-003",
        name: "Skyline Telecom",
        amount: 480000
    },
    {
        sponsor_id: "SPN-004",
        name: "Velocity Motors",
        amount: 270000
    },
    {
        sponsor_id: "SPN-005",
        name: "FreshMart Retail",
        amount: 760000
    },
    {
        sponsor_id: "SPN-006",
        name: "Zenith Pharmaceuticals",
        amount: 830000
    },
    {
        sponsor_id: "SPN-007",
        name: "BlueWave Beverages",
        amount: 990000
    },
    {
        sponsor_id: "SPN-008",
        name: "NextGen Finance",
        amount: 120000
    },
    {
        sponsor_id: "SPN-009",
        name: "Pixel Media Group",
        amount: 430000
    },
    {
        sponsor_id: "SPN-010",
        name: "Global Logistics Ltd",
        amount: 530000
    }
];

const CURRENT_ORGANIZER = "ORG-001";

/* ==========================
   DOM
========================== */

const mySponsorsBody =
    document.getElementById(
        "mySponsorsBody"
    );

const allSponsorsBody =
    document.getElementById(
        "allSponsorsBody"
    );

const mySponsorSearch =
    document.getElementById(
        "mySponsorSearch"
    );

const allSponsorSearch =
    document.getElementById(
        "allSponsorSearch"
    );

const popupMessages =
    document.getElementById(
        "popupMessages"
    );

const sponsorTitle =
    document.getElementById(
        "chatSponsorName"
    );

const messageInput =
    document.getElementById(
        "chatMessageInput"
    );

const sendButton =
    document.getElementById(
        "sendMessageBtn"
    );

/* ==========================
   Helpers
========================== */

function formatAmount(amount){

    return `₹${amount.toLocaleString(
        "en-IN"
    )}`;

}

/* ==========================
   My Sponsors
========================== */

function renderMySponsors(
    searchTerm = ""
){

    mySponsorsBody.innerHTML = "";

    const mySponsors =
        organizerSponsors.filter(
            item =>
                item.organizer_id ===
                CURRENT_ORGANIZER
        );

    mySponsors.forEach(contract => {

        const sponsor =
            sponsors.find(
                sponsor =>
                    sponsor.sponsor_id ===
                    contract.sponsor_id
            );

        if (!sponsor) return;

        if (
            !sponsor.name
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                )
        ) {
            return;
        }

        mySponsorsBody.insertAdjacentHTML(
            "beforeend",
            `
            <tr>

                <td>
                    ${sponsor.name}
                </td>

                <td>
                    ${formatAmount(
                        sponsor.amount
                    )}
                </td>

                <td>
                    ${contract.sponsorship_start_date}
                </td>

                <td>
                    ${contract.sponsorship_end_date}
                </td>

                <td>

                    <button
                        class="table-btn open-chat"
                        data-sponsor="${sponsor.name}"
                    >
                        Chat
                    </button>

                </td>

            </tr>
            `
        );

    });

    bindChatButtons();
}

/* ==========================
   All Sponsors
========================== */

function renderAllSponsors(
    searchTerm = ""
){

    allSponsorsBody.innerHTML = "";

    sponsors.forEach(sponsor => {

        if (
            !sponsor.name
                .toLowerCase()
                .includes(
                    searchTerm.toLowerCase()
                )
        ) {
            return;
        }

        allSponsorsBody.insertAdjacentHTML(
            "beforeend",
            `
            <tr>

                <td>
                    ${sponsor.name}
                </td>

                <td>
                    ${formatAmount(
                        sponsor.amount
                    )}
                </td>

                <td>

                    <button
                        class="table-btn open-chat"
                        data-sponsor="${sponsor.name}"
                    >
                        Chat
                    </button>

                </td>

            </tr>
            `
        );

    });

    bindChatButtons();
}

/* ==========================
   Search
========================== */

mySponsorSearch.addEventListener(
    "input",
    e => {

        renderMySponsors(
            e.target.value
        );

    }
);

allSponsorSearch.addEventListener(
    "input",
    e => {

        renderAllSponsors(
            e.target.value
        );

    }
);

/* ==========================
   Chat Dummy Responses
========================== */

const responses = [

    "Thank you for contacting us.",

    "Can you share event details?",

    "We are interested in sponsorship opportunities.",

    "Please provide audience reach statistics.",

    "Let's schedule a discussion.",

    "Our marketing team will review this.",

    "Thanks for the proposal.",

    "Can you share sponsorship packages?",

    "What is the expected participant count?",

    "We'll get back to you shortly."

];

/* ==========================
   Chat Button
========================== */

function bindChatButtons(){

    document
        .querySelectorAll(".open-chat")
        .forEach(btn => {

            btn.onclick = () => {

                openSponsorChat(
                    btn.dataset.sponsor
                );

            };

        });

}

/* ==========================
   Send Message
========================== */

// sendButton.addEventListener(
//     "click",
//     sendMessage
// );

// messageInput.addEventListener(
//     "keypress",
//     e => {

//         if(e.key === "Enter"){

//             sendMessage();

//         }

//     }
// );

function sendMessage(){

    const message =
        messageInput.value.trim();

    if(!message) return;

    popupMessages.insertAdjacentHTML(
        "beforeend",
        `
        <div class="msg user">
            ${message}
        </div>
        `
    );

    messageInput.value = "";

    popupMessages.scrollTop =
        popupMessages.scrollHeight;

    setTimeout(() => {

        const reply =
            responses[
                Math.floor(
                    Math.random() *
                    responses.length
                )
            ];

        popupMessages.insertAdjacentHTML(
            "beforeend",
            `
            <div class="msg sponsor">
                ${reply}
            </div>
            `
        );

        popupMessages.scrollTop =
            popupMessages.scrollHeight;

    }, 800);

}

/* ==========================
   Initial Load
========================== */

renderMySponsors();
renderAllSponsors();

const chatPanel =
    document.getElementById(
        "chatPanel"
    );

function showPlaceholder(){

    chatPanel.innerHTML = `
    
        <div class="chat-placeholder">

            <i
                class="fa-solid fa-comments"
                style="
                    font-size:48px;
                    color:var(--primary);
                "
            ></i>

            <h3 style="margin-top:16px;">
                Sponsor Conversations
            </h3>

            <p>
                Click any Chat button from the sponsor
                list to start a conversation.
            </p>

        </div>

    `;
}

function openSponsorChat(sponsorName){

    chatPanel.innerHTML = `

        <div class="chat-header">

            <h3>
                ${sponsorName}
            </h3>

            <button
                class="close-chat-btn"
                id="closeChatBtn"
            >
                <i class="fa-solid fa-xmark"></i>
            </button>

        </div>

        <div
            id="popupMessages"
            class="chat-messages"
        >

            <div class="msg sponsor">
                Hello! Thanks for contacting us.
            </div>

        </div>

        <div class="chat-input">

            <input
                type="text"
                id="chatMessageInput"
                placeholder="Type a message..."
            >

            <button
                id="sendMessageBtn"
            >
                <i class="fa-solid fa-paper-plane"></i>
            </button>

        </div>

    `;

    document
        .getElementById(
            "closeChatBtn"
        )
        .addEventListener(
            "click",
            showPlaceholder
        );

    bindChatControls();
}
function bindChatControls(){

    const popupMessages =
        document.getElementById(
            "popupMessages"
        );

    const messageInput =
        document.getElementById(
            "chatMessageInput"
        );

    const sendButton =
        document.getElementById(
            "sendMessageBtn"
        );

    sendButton.addEventListener(
        "click",
        () => {

            const text =
                messageInput.value.trim();

            if(!text) return;

            popupMessages.insertAdjacentHTML(
                "beforeend",
                `
                <div class="msg user">
                    ${text}
                </div>
                `
            );

            messageInput.value = "";

            setTimeout(() => {

                const reply =
                    responses[
                        Math.floor(
                            Math.random() *
                            responses.length
                        )
                    ];

                popupMessages.insertAdjacentHTML(
                    "beforeend",
                    `
                    <div class="msg sponsor">
                        ${reply}
                    </div>
                    `
                );

                popupMessages.scrollTop =
                    popupMessages.scrollHeight;

            },800);

        }
    );

    messageInput.addEventListener(
        "keypress",
        e => {

            if(e.key === "Enter"){

                sendButton.click();

            }

        }
    );
}