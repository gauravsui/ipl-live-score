const apiKey = "990e3902-18f3-4bca-aa9d-3c82c446278a";
const url = `https://api.cricketdata.org/v1/live?apikey=${apiKey}`;

async function fetchLiveScore() {
    try {
        let response = await fetch(url);
        let data = await response.json();

        let match = data.data[0]; // First match in the response
        let scoreText = `${match.team_1} ${match.score_1}/${match.wickets_1} vs ${match.team_2} ${match.score_2}/${match.wickets_2}`;

        document.getElementById("score").innerText = scoreText;
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// Fetch score every 30 seconds
setInterval(fetchLiveScore, 30000);
fetchLiveScore();
