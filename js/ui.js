const xhttp = new XMLHttpRequest();

const scoreboard = document.getElementById("scoreboard");
const scoreTitleRow = document.createElement("tr");
const scoreTitleName = document.createElement("th");
const scoreTitleValue = document.createElement("th");
scoreboard.appendChild(scoreTitleRow);
scoreTitleRow.setAttribute("class", "trfirst");
scoreTitleRow.appendChild(scoreTitleName);
scoreTitleRow.appendChild(scoreTitleValue);
scoreTitleName.innerHTML = "Nimi:";
scoreTitleValue.innerHTML = "Tulos:";

xhttp.onreadystatechange = function () {
    if(this.readyState == 4 && this.status == 200) {
        let userInfo = JSON.parse(this.responseText);

        // miten tää toimii :DD 
        function largestFirst(a,b) {
            return parseInt(b.score, 10) - parseInt(a.score, 10);
        }
        userInfo.sort(largestFirst);

        for (let j = 0; j < userInfo.length; j++) {
            const scoreRow = document.createElement("tr");
            const scoreName = document.createElement("td");
            const scoreValue = document.createElement("td");

            scoreboard.appendChild(scoreRow);
            let name = scoreRow.appendChild(scoreName);
            let score = scoreRow.appendChild(scoreValue);
            name.innerHTML = userInfo[j].name;
            score.innerHTML = userInfo[j].score;
        }
    }
}

xhttp.open("GET", "http://localhost:3000/users", true);
xhttp.send();

/*

const scoreboard = document.getElementById("scoreboard");
const scoreRow = document.createElement("tr");
const scoreName = document.createElement("td");
const scoreValue = document.createElement("td");

fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(userInfo => {
        for (let user of userInfo) {
            scoreboard.appendChild(scoreRow);
            let name = scoreRow.appendChild(scoreName);
            let score = scoreRow.appendChild(scoreValue);
            name.innerHTML = user.name;
            score.innerHTML = user.score;
        }
});

*/


const startQuizBtn = document.getElementById("toQuiz");
