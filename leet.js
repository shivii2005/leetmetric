document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");
    const easyProgressCircle = document.querySelector(".easy-progress");
    const mediumProgressCircle = document.querySelector(".medium-progress");
    const hardProgressCircle = document.querySelector(".hard-progress");
    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");
    const cardStatsContainer = document.querySelector(".stats-cards");

    function validateUsername(username) {
        if (username.trim() === "") {
            alert("Username should not be empty");
            return false;
        }
        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid Username");
        }
        return isMatching;
    }

    async function fetchUserDetails(username) {
        try {
            searchButton.textContent = "Searching...";
            searchButton.disabled = true;

            const proxyUrl = 'http://localhost:5000/leetcode';

            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const graphql = JSON.stringify({
                query: `
                    query userSessionProgress($username: String!) {
                      allQuestionsCount {
                        difficulty
                        count
                      }
                      matchedUser(username: $username) {
                        submitStats {
                          acSubmissionNum {
                            difficulty
                            count
                            submissions
                          }
                          totalSubmissionNum {
                            difficulty
                            count
                            submissions
                          }
                        }
                      }
                    }
                `,
                variables: { username }
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
            };

            const response = await fetch(proxyUrl, requestOptions);

            if (!response.ok) {
                throw new Error("Unable to fetch the User details");
            }

            const parsedData = await response.json();
            console.log("Logging data: ", parsedData);

            if (!parsedData.data || !parsedData.data.matchedUser) {
                throw new Error("User not found");
            }

            displayUserData(parsedData);

        } catch (error) {
            console.error("Fetch Error:", error);
            statsContainer.innerHTML = `<p style="color:red;">${error.message}</p>`;
        } finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }
    }

    function updateProgress(solved, total, label, circle) {
        const progressDegree = (solved / total) * 100;
        circle.style.setProperty("--progress-degree", `${progressDegree}%`);
        label.textContent = `${solved}/${total}`;
    }

    function displayUserData(parsedData) {
        const allCounts = parsedData.data.allQuestionsCount;
        const acCounts = parsedData.data.matchedUser.submitStats.acSubmissionNum;

        // Total questions
        const totalEasyQues = allCounts.find(q => q.difficulty === "Easy").count;
        const totalMediumQues = allCounts.find(q => q.difficulty === "Medium").count;
        const totalHardQues = allCounts.find(q => q.difficulty === "Hard").count;

        // Solved counts (Accepted only)
        const solvedTotalEasyQues = acCounts.find(q => q.difficulty === "Easy").count;
        const solvedTotalMediumQues = acCounts.find(q => q.difficulty === "Medium").count;
        const solvedTotalHardQues = acCounts.find(q => q.difficulty === "Hard").count;
        const solvedOverall = acCounts.find(q => q.difficulty === "All").count;

        updateProgress(solvedTotalEasyQues, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedTotalMediumQues, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedTotalHardQues, totalHardQues, hardLabel, hardProgressCircle);

        // ✅ Changed here: Using acSubmissionNum instead of totalSubmissionNum
        const cardsData = [
            { label: "Overall Solved", value: solvedOverall },
            { label: "Easy Solved", value: solvedTotalEasyQues },
            { label: "Medium Solved", value: solvedTotalMediumQues },
            { label: "Hard Solved", value: solvedTotalHardQues },
        ];

        cardStatsContainer.innerHTML = cardsData.map(
            data => `
            <div class="card">
                <h4>${data.label}</h4>
                <p>${data.value}</p>
            </div>`
        ).join("");
    }

    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        console.log("Logging username: ", username);
        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    });
});