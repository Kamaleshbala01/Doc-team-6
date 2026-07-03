/* ==========================
   STEPS NAVIGATION
========================== */

let currentStep = 0;

const steps = document.querySelectorAll(".step");
const stepContents = document.querySelectorAll(".step-content");

const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

function showStep(index) {

    stepContents.forEach(content => {
        content.classList.remove("active");
    });

    steps.forEach(step => {
        step.classList.remove("active");
    });

    stepContents[index].classList.add("active");
    steps[index].classList.add("active");

    prevBtn.style.display = index === 0 ? "none" : "inline-block";

    if(index === stepContents.length - 1){
        nextBtn.innerText = "Finish";
    }else{
        nextBtn.innerText = "Next →";



    }
}

showStep(currentStep);

/* NEXT */

nextBtn.addEventListener("click", () => {

    if(currentStep < stepContents.length - 1){
            const validator = window[`validateStep${currentStep + 1}`];

            if (validator && !validator()) {
                return;
            }
        
        currentStep++;
        showStep(currentStep);

    } else {

        openReviewModal();
    }

});

/* PREVIOUS */

prevBtn.addEventListener("click", () => {

    if(currentStep > 0){

        currentStep--;

        showStep(currentStep);
    }

});

/* ==========================
   REVIEW MODAL
========================== */

const reviewModal = document.getElementById("reviewModal");

document
.getElementById("reviewBtn")
?.addEventListener("click", openReviewModal);

document
.getElementById("closeReview")
?.addEventListener("click", () => {

    reviewModal.style.display = "none";
});

/* OPEN REVIEW */

function openReviewModal(){

    generateReview();
    showInfoToast("Review generated successfully");

    reviewModal.style.display = "flex";
}

/* ==========================
   GET FORM VALUES
========================== */

function getFormData(){

    const inputs = document.querySelectorAll(
        ".step-content input, .step-content select, .step-content textarea"
    );

    let data = {};

    inputs.forEach((field,index) => {

        let key = field.previousElementSibling
            ? field.previousElementSibling.innerText
            : `field${index}`;

        data[key] = field.value;
    });

    return data;
}

/* ==========================
   GENERATE REVIEW
========================== */

function generateReview(){

    const data = getFormData();

    let html = "";

    html += `
        <div class="review-section">

            <h3>Tournament Summary</h3>
    `;

    Object.keys(data).forEach(key => {

        html += `
            <div class="review-row">

                <div class="review-label">
                    ${key}
                </div>

                <div class="review-value">
                    ${data[key] || "-"}
                </div>

            </div>
        `;
    });

    html += `</div>`;

    document.getElementById("reviewContent").innerHTML = html;
}

/* ==========================
   SAVE DRAFT
========================== */

function saveDraft(){

    const data = getFormData();

    localStorage.setItem(
        "tournamentDraft",
        JSON.stringify(data)
    );

    showSuccessToast("Draft saved successfully ✅");
    reviewModal.style.display = 'none';
}

/* BUTTONS */

document
.getElementById("saveDraftBtn")
?.addEventListener("click", saveDraft);

document
.getElementById("modalSaveBtn")
?.addEventListener("click", saveDraft);

/* ==========================
   PUBLISH
========================== */

function publishTournament(){

    const data = getFormData();

    localStorage.setItem(
        "publishedTournament",
        JSON.stringify(data)
    );

    showSuccessToast("Tournament published successfully 🚀");

    reviewModal.style.display = "none";
}

document
.getElementById("publishBtn")
?.addEventListener("click", publishTournament);

/* ==========================
   LOAD DRAFT IF EXISTS
========================== */

window.addEventListener("load", () => {

    const draft = localStorage.getItem(
        "tournamentDraft"
    );

    if(!draft) return;

    const data = JSON.parse(draft);

    const inputs = document.querySelectorAll(
        ".step-content input, .step-content select, .step-content textarea"
    );

    let values = Object.values(data);

    inputs.forEach((field,index) => {

        if(values[index] !== undefined){

            field.value = values[index];
        }

    });

});

const categorySelect =
document.getElementById("tournamentCategory");

const formatSelect =
document.getElementById("tournamentFormat");

const bracketSection =
document.getElementById("bracketSection");

const leaderboardSection =
document.getElementById("leaderboardSection");

categorySelect.addEventListener("change", function () {

    formatSelect.innerHTML = "";

    if (this.value === "bracket") {

        formatSelect.innerHTML = `
            <option>Single Elimination</option>
            <option>Double Elimination</option>
            <option>Round Robin</option>
            <option>Swiss</option>
            <option>Group Stage + Playoffs</option>
        `;

        bracketSection.classList.remove("hidden");
        leaderboardSection.classList.add("hidden");

        updateBracketPreview();

    } else if (this.value === "leaderboard") {

        formatSelect.innerHTML = `
            <option>Custom Multi Stage</option>
        `;

        bracketSection.classList.add("hidden");
        leaderboardSection.classList.remove("hidden");

        updateLeaderboardPreview();
    }
});


/* =====================
   BRACKET PREVIEW
===================== */

const teamCount =
document.getElementById("teamCount");

teamCount.addEventListener(
    "change",
    updateBracketPreview
);

formatSelect.addEventListener(
    "change",
    updateBracketPreview
);

function updateBracketPreview() {

    if(categorySelect.value !== "bracket")
        return;

    let teams =
    parseInt(teamCount.value);

    let html =
    `<div class="preview-flow">`;

    while(teams > 1){

        html += `
            <div class="flow-item">
                Round of ${teams}
            </div>

            <div class="arrow">↓</div>
        `;

        teams = teams / 2;
    }

    html += `
        <div class="flow-item">
            Champion
        </div>
    `;

    html += "</div>";

    document.getElementById(
        "bracketPreview"
    ).innerHTML = html;
}

/* =====================
   ADD STAGES
===================== */

let stageCounter = 1;

document.getElementById(
    "addStageBtn"
).addEventListener("click", () => {
    stageCounter++;
    showSuccessToast(`Stage ${stageCounter} added`);

    const stage =
    document.createElement("div");

    stage.className = "stage-card";

    stage.innerHTML = `

        <h3>Stage ${stageCounter}</h3>

        <label>Stage Name</label>

        <input
            class="input stage-name"
            placeholder="Semi Finals">

        <label>Group Size</label>

        <input
            type="number"
            class="input group-size">

        <label>Qualified Teams</label>

        <input
            type="number"
            class="input qualified-teams">

        <button
            type="button"
            class="remove-stage-btn">

            Remove Stage

        </button>
    `;

    document
        .getElementById("stagesContainer")
        .appendChild(stage);

    attachPreviewEvents();

});


/* =====================
   REMOVE STAGE
===================== */

document.addEventListener(
    "click",
    function(e){

        if(
            e.target.classList.contains(
                "remove-stage-btn"
            )
        ){

            e.target
            .closest(".stage-card")
            .remove();
            showInfoToast("Stage removed");

            updateLeaderboardPreview();
        }
    }
);

/* =====================
   LEADERBOARD PREVIEW
===================== */

function attachPreviewEvents(){

    document
    .querySelectorAll(
        ".stage-name,.group-size,.qualified-teams"
    )
    .forEach(input => {

        input.oninput =
        updateLeaderboardPreview;
    });

}

attachPreviewEvents();

document
.getElementById(
    "totalParticipants"
)
.addEventListener(
    "input",
    updateLeaderboardPreview
);

function updateLeaderboardPreview(){

    let participants =
    parseInt(
        document.getElementById(
            "totalParticipants"
        ).value
    ) || 0;

    let html =
    `<div class="preview-flow">`;

    const stages =
    document.querySelectorAll(
        ".stage-card"
    );

    stages.forEach(stage => {

        const stageName =
        stage.querySelector(
            ".stage-name"
        ).value || "Stage";

        const groupSize =
        parseInt(
            stage.querySelector(
                ".group-size"
            ).value
        ) || 0;

        const qualified =
        parseInt(
            stage.querySelector(
                ".qualified-teams"
            ).value
        ) || 0;

        const matches =
        groupSize
            ? Math.ceil(
                participants / groupSize
            )
            : 0;

        html += `
            <div class="flow-item">

                <strong>${stageName}</strong>

                <br>

                ${participants} Teams

                <br>

                ${matches} Matches

                <br>

                Top ${qualified} Qualify

            </div>

            <div class="arrow">↓</div>
        `;

        participants = qualified;
    });

    html += `
        <div class="flow-item">

            Champion

        </div>
    `;

    html += `</div>`;

    document.getElementById(
        "leaderboardPreview"
    ).innerHTML = html;
}

let totalParticipants = 0;

document
.getElementById("totalParticipants")
.addEventListener("input", function() {

    totalParticipants = parseInt(this.value) || 0;
     console.log(totalParticipants);

    console.log(totalParticipants);
});

document
.getElementById("teamCount")
.addEventListener("change", function () {

    totalParticipants = parseInt(this.value);

    console.log(totalParticipants);

});

document.getElementById("nextBtn").addEventListener("click",()=>{
    document.getElementById("maxTeams").value =
    totalParticipants;
})

    
const addCategoryBtn =
    document.getElementById("addCategoryBtn");

const rulesContainer =
    document.getElementById("rulesContainer");

/* ADD CATEGORY */

addCategoryBtn.addEventListener("click", () => {

    const categoryCard =
        document.createElement("div");

    categoryCard.classList.add("rule-category-card");

    categoryCard.innerHTML = `

        <div class="category-header">

          
            <select class="input category-name">

                        <option value="">
                            Select Category
                        </option>

                        <option>
                            Tournament Rules
                        </option>

                        <option>
                            Game Rules
                        </option>

                        <option>
                            Disqualification Rules
                        </option>

                        <option>
                            Tie Break Rules
                        </option>

                        <option>
                            Prize Rules
                        </option>

                        <option>
                            Streaming Rules
                        </option>

                        <option>
                            Lobby Rules
                        </option>

                    </select>


            <button
                type="button"
                class="remove-category-btn">

                Remove Category

            </button>

        </div>

        <div class="rules-list"></div>

        <button
            type="button"
            class="add-rule-btn">

            + Add Rule

        </button>

    `;

    rulesContainer.appendChild(categoryCard);
    showSuccessToast("Rule category added");

});


/* ADD RULE / REMOVE RULE / REMOVE CATEGORY */

rulesContainer.addEventListener("click", (e) => {

    /* ADD RULE */

    if (e.target.classList.contains("add-rule-btn")) {

        const rulesList =
            e.target
            .closest(".rule-category-card")
            .querySelector(".rules-list");

        const ruleItem =
            document.createElement("div");

        ruleItem.classList.add("rule-item");

        ruleItem.innerHTML = `

            <input
                type="text"
                class="input rule-text"
                placeholder="Enter Rule">

            <button
                type="button"
                class="remove-rule-btn">

                ✕

            </button>

        `;

        rulesList.appendChild(ruleItem);
    }

    /* REMOVE RULE */

    if (e.target.classList.contains("remove-rule-btn")) {

        e.target
            .closest(".rule-item")
            .remove();
            showInfoToast("Rule removed")
    }

    /* REMOVE CATEGORY */

    if (e.target.classList.contains("remove-category-btn")) {

        e.target
            .closest(".rule-category-card")
            .remove();
            showInfoToast("Rule category removed");
    }

});


// field validations 1 


function validateStep1() {

    const tournamentName =
        document.getElementById("tournamentName");

    const description =
        document.getElementById("description");

    const registrationStart =
        document.getElementById("tournamentRegistrationStart");

    const registrationEnd =
        document.getElementById("tournamentRegistrationEnd");

    const tournamentStart =
        document.getElementById("tournamentTournamentStart");

    const tournamentEnd =
        document.getElementById("tournamentTournamentEnd");

    const organizerName =
        document.getElementById("organizerName");

    const platform =
        document.getElementById("platform");

    const email =
        document.getElementById("organizerEmail");

    const phone =
        document.getElementById("phoneNumber");

    clearErrors();

    let valid = true;

    /* Tournament Name */

    if (tournamentName.value.trim().length < 5) {

        showError(
            tournamentName,
            "Tournament name must be at least 5 characters"
        );

        valid = false;
    }

    /* Description */

    if (description.value.trim().length < 20) {

        showError(
            description,
            "Description must be at least 20 characters"
        );

        valid = false;
    }

    /* Organizer */

    if (organizerName.value.trim().length < 3) {

        showError(
            organizerName,
            "Organizer name is required"
        );

        valid = false;
    }

    /* Platform */

    if (platform.value.trim() === "") {

        showError(
            platform,
            "Please select platform"
        );

        valid = false;
    }

    /* Email */

    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email.value.trim())) {

        showError(
            email,
            "Enter valid email address"
        );

        valid = false;
    }

    /* Phone */

    const phoneRegex =
        /^[0-9]{10,15}$/;

    if (!phoneRegex.test(phone.value.trim())) {

        showError(
            phone,
            "Enter valid phone number"
        );

        valid = false;
    }

    /* Dates */

    if (!registrationStart.value) {

        showError(
            registrationStart,
            "Registration start date required"
        );

        valid = false;
    }

    if (!registrationEnd.value) {

        showError(
            registrationEnd,
            "Registration end date required"
        );

        valid = false;
    }

    if (!tournamentStart.value) {

        showError(
            tournamentStart,
            "Tournament start date required"
        );

        valid = false;
    }

    if (!tournamentEnd.value) {

        showError(
            tournamentEnd,
            "Tournament end date required"
        );

        valid = false;
    }

    // if (!valid) return false;

    const regStartDate =
        new Date(registrationStart.value);

    const regEndDate =
        new Date(registrationEnd.value);

    const tourStartDate =
        new Date(tournamentStart.value);

    const tourEndDate =
        new Date(tournamentEnd.value);

    const currentDate = new Date();

        console.log("Tournament detqails : " + regStartDate + regEndDate + tourStartDate + tourEndDate);
        
    if(regStartDate < currentDate){
        showError(
            registrationStart,
            "Registration start date should not be past date"
        )
        valid = false;
    }
    if (regEndDate <= regStartDate) {

        showError(
            registrationEnd,
            "Registration end must be after start"
        );

        valid = false;
    }

    if (tourStartDate <= regEndDate) {

        showError(
            tournamentStart,
            "Tournament start must be after registration end"
        );

        valid = false;
    }

    if (tourEndDate <= tourStartDate) {

        showError(
            tournamentEnd,
            "Tournament end must be after start"
        );

        valid = false;
    }

    const durationDays =
        (tourEndDate - tourStartDate) /
        (1000 * 60 * 60 * 24);

    if (durationDays > 30) {

        showError(
            tournamentEnd,
            "Tournament duration cannot exceed 30 days"
        );

        valid = false;
    }

    return valid;
}

function showError(element, message) {

    element.style.borderColor = "#ef4444";

    const error =
        document.createElement("small");

    error.className = "error-message";

    error.textContent = message;

    element.parentNode.insertBefore(
        error,
        element.nextSibling
    );
}
function clearErrors() {

    document
        .querySelectorAll(".error-message")
        .forEach(error => error.remove());

    document
        .querySelectorAll(".input")
        .forEach(input => {

            input.style.borderColor = "";
        });
}


/* =========================
   CLEAR SINGLE FIELD ERROR
========================= */

function clearFieldError(element) {

    element.style.borderColor = "";

    const nextSibling = element.nextElementSibling;

    if (
        nextSibling &&
        nextSibling.classList.contains("error-message")
    ) {
        nextSibling.remove();
    }
}

/* =========================
   ATTACH AUTO CLEAR EVENTS
========================= */

function attachValidationListeners() {

    const fields = [

        document.getElementById("tournamentName"),

        document.getElementById("description"),

        document.getElementById("tournamentRegistrationStart"),

        document.getElementById("tournamentRegistrationEnd"),

        document.getElementById("tournamentTournamentStart"),

        document.getElementById("tournamentTournamentEnd"),

        document.getElementById("organizerName"),

        document.getElementById("platform"),

        document.getElementById("organizerEmail"),

        document.getElementById("phoneNumber"),
        document.getElementById("tournamentCategory"),
        document.getElementById("tournamentFormat"),
        document.getElementById("teamCount"),
        document.getElementById("totalParticipants"),
        
        document.getElementById("minTeams"),

        document.getElementById("entryFee"),

        document.getElementById("verificationRequired"),
        
        document.getElementById("totalPrizePool"),

        document.getElementById("firstPrize"),

        document.getElementById("secondPrize"),

        document.getElementById("thirdPrize"),

        document.getElementById("mvpAward"),

        document.getElementById("certificates"),

        document.getElementById("trophyDetails")

    ];

    fields.forEach(field => {

        if (!field) return;

        field.addEventListener("input", () => {

            clearFieldError(field);

        });

        field.addEventListener("change", () => {

            clearFieldError(field);

        });

    });

}

document.addEventListener("input", (e) => {

    if (
        e.target.classList.contains("stage-name") ||
        e.target.classList.contains("group-size") ||
        e.target.classList.contains("qualified-teams") ||
        e.target.classList.contains("rule-text") ||
        e.target.classList.contains("category-name")
    ) {

        clearFieldError(e.target);

    }

});


/* CALL ONCE */

attachValidationListeners();


// validation 2

function validateStep2() {

    clearErrors();

    const category =
        document.getElementById(
            "tournamentCategory"
        );

    const format =
        document.getElementById(
            "tournamentFormat"
        );

    let valid = true;

    /* CATEGORY */

    if (!category.value) {

        showError(
            category,
            "Please select a tournament category."
        );

        valid = false;
    }

    /* FORMAT */

    if (!format.value) {

        showError(
            format,
            "Please select a tournament format."
        );

        valid = false;
    }

    if (!valid) {
        return false;
    }

    /* ==================================
       BRACKET TOURNAMENT VALIDATION
    ================================== */

    if (category.value === "bracket") {

        const teamCount =
            document.getElementById(
                "teamCount"
            );

        if (!teamCount.value) {

            showError(
                teamCount,
                "Please select total teams."
            );

            valid = false;
        }

        return valid;
    }

    /* ==================================
       LEADERBOARD TOURNAMENT VALIDATION
    ================================== */

    if (category.value === "leaderboard") {

        const totalParticipants =
            document.getElementById(
                "totalParticipants"
            );

        const participantCount =
            parseInt(
                totalParticipants.value
            );

        if (
            !participantCount ||
            participantCount < 2
        ) {

            showError(
                totalParticipants,
                "Total participants must be at least 2."
            );

            valid = false;
        }

        const stageCards =
            document.querySelectorAll(
                ".stage-card"
            );

        let previousQualified =
            participantCount;

        stageCards.forEach(
            (stage, index) => {

                const stageName =
                    stage.querySelector(
                        ".stage-name"
                    );

                const groupSize =
                    stage.querySelector(
                        ".group-size"
                    );

                const qualifiedTeams =
                    stage.querySelector(
                        ".qualified-teams"
                    );

                /* Stage Name */

                if (
                    !stageName.value.trim()
                ) {

                    showError(
                        stageName,
                        `Stage ${index + 1} name is required.`
                    );

                    valid = false;
                }

                /* Group Size */

                const groupValue =
                    parseInt(
                        groupSize.value
                    );

                if (
                    !groupValue ||
                    groupValue < 2
                ) {

                    showError(
                        groupSize,
                        `Stage ${index + 1} group size must be greater than 1.`
                    );

                    valid = false;
                }

                if (
                    groupValue >
                    previousQualified
                ) {

                    showError(
                        groupSize,
                        `Stage ${index + 1} group size cannot exceed available participants (${previousQualified}).`
                    );

                    valid = false;
                }

                /* Qualified Teams */

                const qualifiedValue =
                    parseInt(
                        qualifiedTeams.value
                    );

                if (
                    !qualifiedValue ||
                    qualifiedValue < 1
                ) {

                    showError(
                        qualifiedTeams,
                        `Stage ${index + 1} qualified teams must be greater than 0.`
                    );

                    valid = false;
                }

                if (
                    qualifiedValue >=
                    previousQualified
                ) {

                    showError(
                        qualifiedTeams,
                        `Stage ${index + 1} qualified teams must be less than ${previousQualified}.`
                    );

                    valid = false;
                }

                previousQualified =
                    qualifiedValue;
            }
        );

        /* FINAL STAGE */

        if (
            stageCards.length > 0
        ) {

            const lastStage =
                stageCards[
                    stageCards.length - 1
                ];

            const finalQualified =
                parseInt(
                    lastStage.querySelector(
                        ".qualified-teams"
                    ).value
                );

            if (
                finalQualified !== 1
            ) {

                showError(
                    lastStage.querySelector(
                        ".qualified-teams"
                    ),
                    "Final stage must produce exactly 1 champion."
                );

                valid = false;
            }
        }

        return valid;
    }

    return valid;
}

// validation 3

function validateStep3() {

    clearErrors();

    let valid = true;

    const maxTeams =
        parseInt(
            document.getElementById("maxTeams").value
        );

    const minTeams =
        document.getElementById("minTeams");

    const entryFee =
        document.getElementById("entryFee");

    const verification =
        document.getElementById(
            "verificationRequired"
        );

    const minTeamsValue =
        parseInt(minTeams.value);

    const entryFeeValue =
        parseFloat(entryFee.value);

    if (
        !minTeams.value ||
        minTeamsValue < 2
    ) {

        showError(
            minTeams,
            "Minimum teams must be at least 2."
        );

        valid = false;
    }

    if (
        minTeamsValue > maxTeams
    ) {

        showError(
            minTeams,
            `Minimum teams cannot exceed maximum teams (${maxTeams}).`
        );

        valid = false;
    }

    if (
        isNaN(entryFeeValue) ||
        entryFeeValue < 0
    ) {

        showError(
            entryFee,
            "Entry fee must be 0 or greater."
        );

        valid = false;
    }

    if (!verification.value) {

        showError(
            verification,
            "Please select verification option."
        );

        valid = false;
    }

    return valid;
}

// validation 4

function validateStep4() {

    clearErrors();

    let valid = true;

    const categories =
        document.querySelectorAll(
            ".rule-category-card"
        );

    if (categories.length === 0) {

        
        showWarningToast(
            "Please add at least one rule category."
        );

        return false;
    }

    categories.forEach((category, index) => {

        const categoryName =
            category.querySelector(
                ".category-name"
            );

        const rules =
            category.querySelectorAll(
                ".rule-text"
            );

        /* CATEGORY */

        if (
            !categoryName.value
        ) {

            showError(
                categoryName,
                `Please select category for Category ${index + 1}.`
            );

            valid = false;
        }

        /* MUST HAVE RULE */

        if (
            rules.length === 0
        ) {

           
            showWarningToast(
                `${categoryName.value || "Category " + (index + 1)} must contain at least one rule.`
            );  


            valid = false;

            return;
        }

        /* INDIVIDUAL RULES */

        rules.forEach((rule, ruleIndex) => {

            if (
                !rule.value.trim()
            ) {

                showError(
                    rule,
                    `Rule ${ruleIndex + 1} cannot be empty.`
                );

                valid = false;
            }

        });

    });

    return valid;
}


//  validation 5

function validateStep5() {

    clearErrors();

    let valid = true;

    const totalPrizePool =
        document.getElementById(
            "totalPrizePool"
        );

    const firstPrize =
        document.getElementById(
            "firstPrize"
        );

    const secondPrize =
        document.getElementById(
            "secondPrize"
        );

    const thirdPrize =
        document.getElementById(
            "thirdPrize"
        );

    const total =
        parseFloat(totalPrizePool.value);

    const first =
        parseFloat(firstPrize.value);

    const second =
        parseFloat(secondPrize.value) || 0;

    const third =
        parseFloat(thirdPrize.value) || 0;

    /* Total Prize Pool */

    if (
        !totalPrizePool.value ||
        total <= 0
    ) {

        showError(
            totalPrizePool,
            "Total prize pool must be greater than 0."
        );

        valid = false;
    }

    /* First Prize */

    if (
        !firstPrize.value ||
        first <= 0
    ) {

        showError(
            firstPrize,
            "1st prize is required."
        );

        valid = false;
    }

    /* Second Prize */

    if (
        second > first
    ) {

        showError(
            secondPrize,
            "2nd prize cannot exceed 1st prize."
        );

        valid = false;
    }

    /* Third Prize */

    if (
        third > second &&
        second > 0
    ) {

        showError(
            thirdPrize,
            "3rd prize cannot exceed 2nd prize."
        );

        valid = false;
    }

    /* Total Distribution */

    if (
        first + second + third >
        total
    ) {

        showError(
            totalPrizePool,
            "Prize distribution exceeds total prize pool."
        );

        valid = false;
    }

    return valid;
}

// payment validation 6





let paymentCompleted = false;



const payNowBtn =
    document.getElementById("payNowBtn");

const paymentStatus =
    document.getElementById("pending-status");


/* =========================
   PAYMENT HANDLER
========================= */

payNowBtn.addEventListener("click", () => {

    payNowBtn.disabled = true;

    payNowBtn.textContent =
        "Processing Payment...";

    setTimeout(() => {

        paymentCompleted = true;

        paymentStatus.textContent =
            "Payment Completed";

        paymentStatus.style.color =
            "#22c55e";

        payNowBtn.textContent =
            "Payment Successful";

        
showSuccessToast(
    "Payment successful ✅ Tournament published successfully 🚀"
);


        saveTournament();

    }, 1500);

});

/* =========================
   VALIDATE STEP 6
========================= */

function validateStep6() {

    if (!paymentCompleted) {

        
showErrorToast(
    "Please complete the payment before publishing the tournament."
);


        return false;
    }

    return true;
}

/* =========================
   SAVE TO LOCAL STORAGE
========================= */

function saveTournament() {

    const tournamentData = {

        tournamentName:
            document.getElementById(
                "tournamentName"
            )?.value || "",

        paymentStatus:
            "Paid",

        publishedAt:
            new Date().toISOString()

    };

    localStorage.setItem(
        "publishedTournament",
        JSON.stringify(tournamentData)
    );

    console.log(
        "Tournament Saved",
        tournamentData
    );

}


/* ===========================================
   TOASTIFY HELPERS
=========================================== */

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



