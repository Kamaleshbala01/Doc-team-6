// /* ===========================================
//    GAMEARENA TOURNAMENT ORGANIZER DASHBOARD
// =========================================== */
// // Wait until page loads
// document.addEventListener("DOMContentLoaded", () => {
//     initializeCharts();
//     initializeSidebar();
//     initializeSearch();
//     initializeCards();
//     initializeTable();
//     animateStats();
// });
// /* ===========================================
//    REGISTRATION LINE CHART
// =========================================== */
// function initializeCharts() {
//     // Registration Chart
//     const registrationCanvas = document.getElementById("registrationChart");
//     if (registrationCanvas) {
//         new Chart(registrationCanvas, {
//             type: "line",
//             data: {
//                 labels: [
//                     "1","5","10","15","20","25","30"
//                 ],
//                 datasets: [
//                     {
//                         label: "Registrations",
//                         data: [
//                             40,
//                             85,
//                             120,
//                             180,
//                             210,
//                             260,
//                             310
//                         ],
//                         borderColor: "#7C3AED",
//                         backgroundColor: "rgba(124,58,237,.15)",
//                         borderWidth: 3,
//                         tension: .4,
//                         fill: true,
//                         pointRadius: 5,
//                         pointBackgroundColor: "#06B6D4"
//                     }
//                 ]
//             },
//             options: {
//                 responsive: true,
//                 plugins: {
//                     legend: {
//                         display: false
//                     }
//                 },
//                 scales: {
//                     x: {
//                         grid: {
//                             color: "#334155"
//                         },
//                         ticks: {
//                             color: "#94A3B8"
//                         }
//                     },
//                     y: {
//                         grid: {
//                             color: "#334155"
//                         },
//                         ticks: {
//                             color: "#94A3B8"
//                         }
//                     }
//                 }
//             }
//         });
//     }
//     // Tournament Status
//     const statusCanvas = document.getElementById("statusChart");
//     if (statusCanvas) {
//         new Chart(statusCanvas, {
//             type: "doughnut",
//             data: {
//                 labels: [
//                     "Upcoming",
//                     "Live",
//                     "Completed"
//                 ],
//                 datasets: [
//                     {
//                         data: [
//                             6,
//                             2,
//                             10
//                         ],
//                         backgroundColor: [
//                             "#06B6D4",
//                             "#22C55E",
//                             "#7C3AED"
//                         ],
//                         borderWidth: 0
//                     }
//                 ]
//             },
//             options: {
//                 cutout: "70%",
//                 plugins: {
//                     legend: {
//                         labels: {
//                             color: "#F8FAFC"
//                         }
//                     }
//                 }
//             }
//         });
//     }
// }
// /* ===========================================
//    SIDEBAR
// =========================================== */
// function initializeSidebar() {
//     const menuItems = document.querySelectorAll(".sidebar li");
//     menuItems.forEach(item => {
//         item.addEventListener("click", () => {
//             menuItems.forEach(i =>
//                 i.classList.remove("active")
//             );
//             item.classList.add("active");
//         });
//     });
// }
// /* ===========================================
//    SEARCH
// =========================================== */
// function initializeSearch() {
//     const search = document.querySelector(".search-box input");
//     if (!search) return;
//     search.addEventListener("keyup", function () {
//         const value = this.value.toLowerCase();
//         const rows = document.querySelectorAll(".tournament-table tbody tr");
//         rows.forEach(row => {
//             row.style.display = row.innerText.toLowerCase().includes(value)
//                 ? ""
//                 : "none";
//         });
//     });
// }
// /* ===========================================
//    CARD HOVER
// =========================================== */
// function initializeCards() {
//     const cards = document.querySelectorAll(
//         ".card,.stat-card,.action-card"
//     );
//     cards.forEach(card => {
//         card.addEventListener("mouseenter", () => {
//             card.style.transform = "translateY(-6px)";
//         });
//         card.addEventListener("mouseleave", () => {
//             card.style.transform = "";
//         });
//     });
// }
// /* ===========================================
//    TABLE BUTTONS
// =========================================== */
// function initializeTable() {
//     const buttons = document.querySelectorAll(".table-btn");
//     buttons.forEach(button => {
//         button.addEventListener("click", () => {
//             alert("Tournament Details Page");
//         });
//     });
// }
// /* ===========================================
//    ANIMATE STATS
// =========================================== */
// function animateStats() {
//     const stats = document.querySelectorAll(".stat-card h2");
//     stats.forEach(stat => {
//         let text = stat.innerText;
//         let number = parseInt(text.replace(/\D/g, ""));
//         if (isNaN(number)) return;
//         let count = 0;
//         const interval = setInterval(() => {
//             count += Math.ceil(number / 35);
//             if (count >= number) {
//                 stat.innerText = text;
//                 clearInterval(interval);
//             } else {
//                 if (text.includes("₹")) {
//                     stat.innerText = "₹" + count;
//                 }
//                 else {
//                     stat.innerText = count;
//                 }
//             }
//         }, 20);
//     });
// }
// /* ===========================================
//    NOTIFICATION
// =========================================== */
// const notificationButton = document.querySelector(
//     ".fa-bell"
// );
// if (notificationButton) {
//     notificationButton.addEventListener("click", () => {
//         alert("No new notifications.");
//     });
// }
// /* ===========================================
//    MESSAGE
// =========================================== */
// const messageButton = document.querySelector(
//     ".fa-envelope"
// );
// if (messageButton) {
//     messageButton.addEventListener("click", () => {
//         alert("Opening Messages...");
//     });
// }
// /* ===========================================
//    QUICK ACTIONS
// =========================================== */
// document.querySelectorAll(".action-card").forEach(button => {
//     button.addEventListener("click", () => {
//         const action = button.innerText.trim();
//         alert(action);
//     });
// });
// /* ===========================================
//    CREATE TOURNAMENT BUTTON
// =========================================== */
// const createButton = document.querySelector(".primary-btn");
// if (createButton) {
//     createButton.addEventListener("click", () => {
//         window.location.href = "create-tournament.html";
//     });
// }
// /* ===========================================
//    PAGE FADE IN
// =========================================== */
// document.body.style.opacity = 0;
// window.onload = () => {
//     document.body.style.transition = ".35s";
//     document.body.style.opacity = 1;
// };

// const createButtons = document.querySelector("#createbtn");
// if (createButtons) {
//     createButtons.addEventListener("click", () => {
//         window.location.href = "create-tournament.html";
//     });
// }
// const maangeTeams = document.querySelector("#manageTeam");
// if (maangeTeams) {
//     maangeTeams.addEventListener("click", () => {
//         window.location.href = "teams-participation.html";
//     });
// }

// const inviteSponsor = document.querySelector("#inviteSponsor");
// if (inviteSponsor) {
//     inviteSponsor.addEventListener("click", () => {
//         window.location.href = "tournament-sponsors.html";
//     });
// }

// const exportBtn =
//     document.getElementById(
//         "exportReportBtn"
//     );

// const exportModal =
//     document.getElementById(
//         "exportModal"
//     );

// const closeExportModal =
//     document.getElementById(
//         "closeExportModal"
//     );

// const cancelExportBtn =
//     document.getElementById(
//         "cancelExportBtn"
//     );

// const confirmExportBtn =
//     document.getElementById(
//         "confirmExportBtn"
//     );

// const toast =
//     document.getElementById(
//         "toast"
//     );

// if(exportBtn){

//     exportBtn.addEventListener(
//         "click",
//         () => {

//             exportModal.classList.add(
//                 "show"
//             );

//         }
//     );
// }

// function closeExport(){

//     exportModal.classList.remove(
//         "show"
//     );
// }

// if(closeExportModal){

//     closeExportModal.addEventListener(
//         "click",
//         closeExport
//     );
// }

// if(cancelExportBtn){

//     cancelExportBtn.addEventListener(
//         "click",
//         closeExport
//     );
// }

// if(confirmExportBtn){

//     confirmExportBtn.addEventListener(
//         "click",
//         () => {

//             closeExport();

//             toast.classList.add(
//                 "show"
//             );

//             setTimeout(() => {

//                 toast.classList.remove(
//                     "show"
//                 );

//             },3000);

//         }
//     );
// }

/* ===========================================
   TOASTIFY HELPERS
=========================================== */
function showSuccess(message) {
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

function showError(message) {
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

function showWarning(message) {
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

function showInfo(message) {
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

/* ===========================================
   GAMEARENA TOURNAMENT ORGANIZER DASHBOARD
=========================================== */

document.addEventListener("DOMContentLoaded", () => {
    initializeCharts();
    initializeSidebar();
    initializeSearch();
    initializeCards();
    initializeTable();
    animateStats();
});

/* ===========================================
   REGISTRATION LINE CHART
=========================================== */
function initializeCharts() {

    const registrationCanvas =
        document.getElementById("registrationChart");

    if (registrationCanvas) {

        new Chart(registrationCanvas, {
            type: "line",
            data: {
                labels: ["1", "5", "10", "15", "20", "25", "30"],
                datasets: [{
                    label: "Registrations",
                    data: [40, 85, 120, 180, 210, 260, 310],
                    borderColor: "#7C3AED",
                    backgroundColor: "rgba(124,58,237,.15)",
                    borderWidth: 3,
                    tension: .4,
                    fill: true,
                    pointRadius: 5,
                    pointBackgroundColor: "#06B6D4"
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: "#334155"
                        },
                        ticks: {
                            color: "#94A3B8"
                        }
                    },
                    y: {
                        grid: {
                            color: "#334155"
                        },
                        ticks: {
                            color: "#94A3B8"
                        }
                    }
                }
            }
        });
    }

    const statusCanvas =
        document.getElementById("statusChart");

    if (statusCanvas) {

        new Chart(statusCanvas, {
            type: "doughnut",
            data: {
                labels: [
                    "Upcoming",
                    "Live",
                    "Completed"
                ],
                datasets: [{
                    data: [6, 2, 10],
                    backgroundColor: [
                        "#06B6D4",
                        "#22C55E",
                        "#7C3AED"
                    ],
                    borderWidth: 0
                }]
            },
            options: {
                cutout: "70%",
                plugins: {
                    legend: {
                        labels: {
                            color: "#F8FAFC"
                        }
                    }
                }
            }
        });
    }
}

/* ===========================================
   SIDEBAR
=========================================== */
function initializeSidebar() {

    const menuItems =
        document.querySelectorAll(".sidebar li");

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            menuItems.forEach(i =>
                i.classList.remove("active")
            );

            item.classList.add("active");
        });
    });
}

/* ===========================================
   SEARCH
=========================================== */
function initializeSearch() {

    const search =
        document.querySelector(".search-box input");

    if (!search) return;

    search.addEventListener("keyup", function () {

        const value =
            this.value.toLowerCase();

        const rows =
            document.querySelectorAll(".tournament-table tbody tr");

        let visibleRows = 0;

        rows.forEach(row => {

            const match =
                row.innerText
                    .toLowerCase()
                    .includes(value);

            row.style.display =
                match ? "" : "none";

            if (match) visibleRows++;
        });
    });
}

/* ===========================================
   CARD HOVER
=========================================== */
function initializeCards() {

    const cards =
        document.querySelectorAll(
            ".card,.stat-card,.action-card"
        );

    cards.forEach(card => {

        card.addEventListener("mouseenter", () => {
            card.style.transform = "translateY(-6px)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.transform = "";
        });
    });
}

/* ===========================================
   TABLE BUTTONS
=========================================== */
function initializeTable() {

    const buttons =
        document.querySelectorAll(".table-btn");

    buttons.forEach(button => {

        button.addEventListener("click", () => {
            showInfo("Opening tournament details...");
        });
    });
}

/* ===========================================
   ANIMATE STATS
=========================================== */
function animateStats() {

    const stats =
        document.querySelectorAll(".stat-card h2");

    stats.forEach(stat => {

        let text = stat.innerText;

        let number =
            parseInt(text.replace(/\D/g, ""));

        if (isNaN(number)) return;

        let count = 0;

        const interval = setInterval(() => {

            count += Math.ceil(number / 35);

            if (count >= number) {

                stat.innerText = text;

                clearInterval(interval);

            } else {

                if (text.includes("₹")) {
                    stat.innerText = "₹" + count;
                } else {
                    stat.innerText = count;
                }
            }

        }, 20);
    });
}

/* ===========================================
   NOTIFICATION
=========================================== */
const notificationButton =
    document.querySelector(".fa-bell");

if (notificationButton) {

    notificationButton.addEventListener("click", () => {
        showInfo("No new notifications.");
    });
}

/* ===========================================
   MESSAGE
=========================================== */
const messageButton =
    document.querySelector(".fa-envelope");

if (messageButton) {

    messageButton.addEventListener("click", () => {
        showInfo("Opening messages...");
    });
}

/* ===========================================
   QUICK ACTIONS
=========================================== */
document.querySelectorAll(".action-card")
    .forEach(button => {

        button.addEventListener("click", () => {

            const action =
                button.innerText.trim();

            showSuccess(`${action} selected`);
        });
    });

/* ===========================================
   CREATE TOURNAMENT BUTTON
=========================================== */
const createButton =
    document.querySelector(".primary-btn");

if (createButton) {

    createButton.addEventListener("click", () => {

        showSuccess(
            "Redirecting to tournament creation..."
        );

        setTimeout(() => {
            window.location.href =
                "create-tournament.html";
        }, 500);
    });
}

/* ===========================================
   PAGE FADE IN
=========================================== */
document.body.style.opacity = 0;

window.onload = () => {

    document.body.style.transition = ".35s";
    document.body.style.opacity = 1;
};

/* ===========================================
   QUICK LINKS
=========================================== */
const createButtons =
    document.querySelector("#createbtn");

if (createButtons) {

    createButtons.addEventListener("click", () => {

        showSuccess(
            "Opening tournament creation..."
        );

        setTimeout(() => {
            window.location.href =
                "create-tournament.html";
        }, 500);
    });
}

const maangeTeams =
    document.querySelector("#manageTeam");

if (maangeTeams) {

    maangeTeams.addEventListener("click", () => {

        showInfo(
            "Opening team management..."
        );

        setTimeout(() => {
            window.location.href =
                "teams-participation.html";
        }, 500);
    });
}

const inviteSponsor =
    document.querySelector("#inviteSponsor");

if (inviteSponsor) {

    inviteSponsor.addEventListener("click", () => {

        showInfo(
            "Opening sponsor management..."
        );

        setTimeout(() => {
            window.location.href =
                "tournament-sponsors.html";
        }, 500);
    });
}

/* ===========================================
   EXPORT REPORT MODAL
=========================================== */
const exportBtn =
    document.getElementById("exportReportBtn");

const exportModal =
    document.getElementById("exportModal");

const closeExportModal =
    document.getElementById("closeExportModal");

const cancelExportBtn =
    document.getElementById("cancelExportBtn");

const confirmExportBtn =
    document.getElementById("confirmExportBtn");

if (exportBtn) {

    exportBtn.addEventListener(
        "click",
        () => {
            exportModal.classList.add("show");
        }
    );
}

function closeExport() {

    if (exportModal) {
        exportModal.classList.remove("show");
    }
}

if (closeExportModal) {

    closeExportModal.addEventListener(
        "click",
        closeExport
    );
}

if (cancelExportBtn) {

    cancelExportBtn.addEventListener(
        "click",
        closeExport
    );
}

if (confirmExportBtn) {

    confirmExportBtn.addEventListener(
        "click",
        () => {

            closeExport();

            showSuccess(
                "Report exported successfully."
            );
        }
    );
}