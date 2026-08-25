function testWater() {

    let ph = parseFloat(
        document.getElementById("ph").value
    );

    let tds = parseFloat(
        document.getElementById("tds").value
    );

    let turbidity = parseFloat(
        document.getElementById("turbidity").value
    );


    // Check whether values were entered

    if (
        isNaN(ph) ||
        isNaN(tds) ||
        isNaN(turbidity)
    ) {

        alert("Please enter all three values 💧");

        return;
    }


    // Show loading animation

    document.getElementById("loading").style.display =
        "block";

    document.getElementById("result").style.display =
        "none";


    // Temporary demonstration prediction
    // We will replace this with your Python AI later.

    setTimeout(function() {

        let quality;
        let score;
        let message;
        let aiMessage;


        if (
            ph >= 6.5 &&
            ph <= 8.5 &&
            tds <= 500 &&
            turbidity <= 5
        ) {

            quality = "GOOD QUALITY";
            score = 90;

            message =
                "Your water measurements fall within the selected project range.";

            aiMessage =
                "AquaAI found that the entered pH, TDS and turbidity values are within the ranges used by this demonstration. This is an educational screening result, not a laboratory safety certification.";

        }

        else if (
            ph >= 6 &&
            ph <= 9 &&
            tds <= 1000 &&
            turbidity <= 10
        ) {

            quality = "MODERATE QUALITY";
            score = 70;

            message =
                "Some measurements are outside the preferred project range.";

            aiMessage =
                "AquaAI recommends checking the individual measurements and investigating the water source if unusual values persist.";

        }

        else {

            quality = "POOR QUALITY";
            score = 40;

            message =
                "Some measurements are outside the selected project ranges.";

            aiMessage =
                "AquaAI detected values that deserve further investigation. This result does not identify a specific contaminant or diagnose a health condition.";

        }


        // Display results

        document.getElementById("quality").innerText =
            quality;

        document.getElementById("score").innerText =
            score;

        document.getElementById("message").innerText =
            message;

        document.getElementById("aiMessage").innerText =
            aiMessage;


        document.getElementById("resultPh").innerText =
            ph;

        document.getElementById("resultTds").innerText =
            tds;

        document.getElementById("resultTurbidity").innerText =
            turbidity;


        document.getElementById("loading").style.display =
            "none";

        document.getElementById("result").style.display =
            "block";


    }, 2000);

}
