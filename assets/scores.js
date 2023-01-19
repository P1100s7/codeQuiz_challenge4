var scoreListEl = document.querySelector("#highscores")

function displayScores(event) {
    console.log(event.target)
    var scores = JSON.parse(localStorage.getItem("highscores"))
    console.log(scores)
    if (scores) {
        console.info("scores has a value")
        // return scores.

    }

}

console.log(window.location.href)