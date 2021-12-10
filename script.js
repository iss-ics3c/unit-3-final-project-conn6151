// boiler plate functions (BPFs)
function Rand() {
    return Math.ceil(Math.random() * 1000);
}

function WriteOut(output) {
    out.innerHTML = output;
}

function WriteHS(output) {
    hs.innerHTML = output;
}

function WriteThemeBtn(output) {
    themeBtn.value = output;
}
// end of BPFs


// theme of the website (default is light, set in CSS)
let theme = "Dark";


function SwapTheme() {
    // CSS variables and values respectively.
    let vars = [
        "--background",
        "--text-colour",
        "--hover",
        "--panel-background",
        "--hover-shadow"
    ], vals;    // vals set according to the theme

    if (theme === "Light") {    // Light mode
        vals = [
            "white",
            "black",
            "rgb(203, 203, 203)",
            "rgba(255, 255, 255, 0.3)",
            "rgba(233, 223, 223, 0.3)"
        ];

        // Set theme to opposite for next time.
        theme = "Dark";
    }
    else {  // Dark mode
        vals = [
            "rgb(20, 20, 20)",
            "white",
            "rgb(40, 40, 40)",
            "rgba(0, 0, 0, 0.3)",
            "rgba(40, 40, 40, 0.3)"
        ];

        // Set theme to opposite for next time.
        theme = "Light";
    }

    // Tell user next theme.
    WriteThemeBtn(`${theme} theme`);

    // Iterate and set.
    for (let i = 0; i < vars.length; i++) {
        let vari = vars[i], // varible to set
            val  = vals[i]; // value to set it to

        document.body.style.setProperty(vari, val);
    }

    // console.log(theme);
}


let guesses = 0,        // guess count
    rand_num = Rand(),  // random number
    high_score = 0;     // high score


function Reset() {
    WriteOut("Results will appear here!");
    guesses = 0;
}


function Submit() {
    // get input
    let guess = Number(numIn.value);
    guesses++;

    // guess is correct
    if (guess === rand_num) {
        let output = `You guessed CORRECTLY! The number ${rand_num} was guessed in ${guesses} guesses.`;
        // set new high score if appropriate
        // if it's 0 then set it as the guess then must be the first guess
        if (guesses < high_score || high_score === 0) {
            high_score = guesses;
            output += `<br>This makes for a new high score of <u>${high_score} guesses</u>!`
        }
        // write out
        WriteOut(output);
        // write new high score
        WriteHS(`Current High Score: ${high_score}`);
        // reset guesses
        guesses = 0;
        // create new random number
        rand_num = Rand();
    }
    // guess too low
    else if (guess < rand_num) {
        WriteOut(`${guess} is too low. (Guess #${guesses})`);
    }
    // otherwise guess too high, no need to check
    else {
        WriteOut(`${guess} is too high. (Guess #${guesses})`);
    }
}
