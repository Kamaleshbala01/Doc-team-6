function openFAQ() {
    document.getElementById("faqList").style.display = "none";
    document.getElementById("faqDetails").style.display = "block";
}

function goBack() {
    document.getElementById("faqList").style.display = "block";
    document.getElementById("faqDetails").style.display = "none";
}

const faqDashboard =
    document.getElementById(
        "faqDashboard"
    );

const faqDetails =
    document.getElementById(
        "faqDetails"
    );

const answerBox =
    document.getElementById(
        "faqAnswer"
    );

const answerError =
    document.getElementById(
        "faqAnswerError"
    );

const sendAnswerBtn =
    document.getElementById(
        "sendAnswerBtn"
    );

/* ==========================
   Open FAQ
========================== */

function openFAQ(){

    faqDashboard.style.display =
        "none";

    faqDetails.style.display =
        "block";

}

/* ==========================
   Back
========================== */

function goBack(){

    faqDetails.style.display =
        "none";

    faqDashboard.style.display =
        "grid";

    clearValidation();

}

/* ==========================
   Validation
========================== */

function clearValidation(){

    answerBox.classList.remove(
        "input-error"
    );

    answerError.textContent = "";

}

answerBox.addEventListener(
    "focus",
    clearValidation
);

answerBox.addEventListener(
    "input",
    clearValidation
);

/* ==========================
   Send Answer
========================== */

sendAnswerBtn.addEventListener(
    "click",
    () => {

        const answer =
            answerBox.value.trim();

        clearValidation();

        if(!answer){

            answerBox.classList.add(
                "input-error"
            );

            answerError.textContent =
                "Answer is required.";

            return;
        }

        const statusElement =
            document.querySelector(
                "#faqDetails .badge"
            );

        statusElement.className =
            "badge live";

        statusElement.textContent =
            "Answered";

        sendAnswerBtn.textContent =
            "Answer Sent";

        sendAnswerBtn.disabled =
            true;

        answerBox.disabled =
            true;

    }
);

/* ==========================
   Optional Dynamic FAQ
========================== */

const faqRows =
    document.querySelectorAll(
        "#recentFaqBody tr"
    );

faqRows.forEach(row => {

    const button =
        row.querySelector(
            ".table-btn"
        );

    if(!button) return;

    button.addEventListener(
        "click",
        () => {

            const cells =
                row.querySelectorAll(
                    "td"
                );

            document
                .getElementById(
                    "questionTitle"
                )
                .textContent =
                cells[0].textContent;

            document
                .querySelector(
                    "#faqDetails p:nth-of-type(1)"
                )
                .innerHTML =
                `
                <strong>Team:</strong>
                ${cells[1].textContent}
                `;

            document
                .querySelector(
                    "#faqDetails p:nth-of-type(2)"
                )
                .innerHTML =
                `
                <strong>User:</strong>
                ${cells[2].textContent}
                `;

            openFAQ();

        }
    );

});