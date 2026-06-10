let reputation =
Number(
localStorage.getItem(
"reputation"
)
) || 0;
let currentScene = localStorage.getItem("currentScene") || "start";

let health = Number(
localStorage.getItem("health")
) || 100;

let inventory =
JSON.parse(
localStorage.getItem("inventory")
) || [];


const storyText = document.getElementById("story-text");
const choicesDiv = document.getElementById("choices");

const healthFill = document.getElementById("health-fill");
const healthText = document.getElementById("health-text");

const progressFill = document.getElementById("progress-fill");
const progressText = document.getElementById("progress-text");
const reputationFill =
document.getElementById("reputation-fill");

const reputationText =
document.getElementById("reputation-text");

const inventoryList = document.getElementById("inventory-list");
const achievementList =
document.getElementById(
"achievement-list"
);

let achievements =
JSON.parse(
localStorage.getItem(
"achievements"
)
) || [];
const background =
document.getElementById(
"background"
);
function saveGame(){
    localStorage.setItem(
"reputation",
reputation
);
localStorage.setItem(
"achievements",
JSON.stringify(
achievements
)
);
    localStorage.setItem(
    "currentScene",
    currentScene
    );

    localStorage.setItem(
    "health",
    health
    );

    localStorage.setItem(
    "inventory",
    JSON.stringify(inventory)
    );
localStorage.setItem(
"reputation",
reputation
);
}
function renderScene() {

    const scene = storyData[currentScene];
if(scene.background){

    background.style.backgroundImage =
    `url(assets/images/${scene.background}.jpg)`;

}
storyText.classList.remove(
"ending-title"
);
    storyText.innerText = scene.text;

    choicesDiv.innerHTML = "";

    if (scene.health) {

    health += scene.health;

    if (health > 100) {
        health = 100;
    }

    updateHealth();
    delete scene.health;
}

if(scene.reputation){

    reputation += scene.reputation;

    updateReputation();

    delete scene.reputation;
}

    

    if (scene.item) {

    if (!inventory.includes(scene.item)) {

        inventory.push(scene.item);

        updateInventory();

        if(scene.item === "💎 Pirate Treasure"){
            showAchievement("Treasure Hunter");
        }

    }

    delete scene.item;
}
if(currentScene === "rescueEnding"){
    showAchievement("Island Survivor");
}
if(currentScene === "heroEnding"){
    showAchievement("Hero Of The Island");
}

if(currentScene === "rulerEnding"){
    showAchievement("Island King");
}

    if (scene.ending) {
progressFill.style.width =
"100%";

storyText.classList.add(
"ending-title"
);
progressText.innerText =
"100%";
        const restartBtn = document.createElement("button");

        restartBtn.className = "choice-btn";

        restartBtn.innerText = "🔄 Play Again";

        restartBtn.onclick = restartGame;
        
let rank = "🥉 Survivor";

if(reputation >= 40){
    rank = "🦸 Hero";
}
else if(reputation >= 25){
    rank = "🏆 Adventurer";
}
else if(reputation >= 10){
    rank = "🥈 Explorer";
}
const stats =
document.createElement("div");

stats.className =
"ending-card";

stats.innerHTML = `
<br><br>

🏅 Rank: ${rank}

<br><br>

⭐ Reputation: ${reputation}

<br>

🎒 Items Collected: ${inventory.length}

<br>

💚 Health Remaining: ${health}
`;
stats.style.fontSize = "20px";
stats.style.lineHeight = "2";

choicesDiv.appendChild(stats);
        choicesDiv.appendChild(restartBtn);

        

        return;
    }

   scene.choices.forEach(choice => {

    const button = document.createElement("button");

    button.className = "choice-btn";

    button.innerText = choice.text;

    if (
        choice.requires &&
        !inventory.includes(choice.requires)
    ) {

        button.disabled = true;

        button.innerText +=
        " 🔒";

        button.style.opacity = "0.5";

        button.style.cursor =
        "not-allowed";

    }

    button.onclick = () => {

    const gameCard =
    document.querySelector(
    ".game-card"
    );

    gameCard.classList.add(
    "fade-out"
    );

    setTimeout(()=>{

        currentScene =
        choice.next;

        saveGame();

        updateProgress();

        renderScene();

        gameCard.classList.remove(
        "fade-out"
        );

    },400);

};

    choicesDiv.appendChild(button);

});

}

function updateHealth() {

    healthFill.style.width = health + "%";

    healthText.innerText =
        health + " / 100";

}

function updateInventory() {

    inventoryList.innerHTML = "";

    inventory.forEach(item => {

        const li = document.createElement("li");
        li.className = "inventory-item";
        li.innerText = item;

        inventoryList.appendChild(li);

    });

}
function updateAchievements(){

    achievementList.innerHTML = "";

    if(achievements.length === 0){

        achievementList.innerHTML =
        "<li>None Yet</li>";

        return;
    }

    achievements.forEach(item => {

        const li =
        document.createElement("li");

        li.className =
        "inventory-item";

        li.innerText = item;

        achievementList
        .appendChild(li);

    });

}
function updateReputation() {

    let width =
    Math.max(
        0,
        Math.min(
            100,
            reputation
        )
    );

    reputationFill.style.width =
    width + "%";

    reputationText.innerText =
    reputation;

}

function updateProgress() {

    let progress = 0;

    progress += inventory.length * 10;

    progress +=
    (100 - health) * 0.15;

    if (
        inventory.includes("🏆 Golden Idol")
    ) {
        progress += 15;
    }

    if (
        inventory.includes("💎 Pirate Treasure")
    ) {
        progress += 20;
    }

    if (
        inventory.includes("🔋 Power Cell")
    ) {
        progress += 15;
    }
    progress =
Math.min(progress,95);

    progressFill.style.width =
    progress + "%";

    progressText.innerText =
    Math.floor(progress) + "%";
}

function restartGame() {

    localStorage.clear();

    currentScene = "start";

    health = 100;

    inventory = [];

    achievements = [];

    reputation = 0;

    updateHealth();

    updateReputation();

    updateAchievements();


    inventoryList.innerHTML =
        "<li>Empty</li>";

    progressFill.style.width =
        "0%";

    progressText.innerText =
        "0%";

    renderScene();

}
document
.getElementById(
"new-game-btn"
)
.onclick = () => {

    localStorage.clear();

    location.reload();

};
updateHealth();

updateReputation();

updateAchievements();

renderScene();

function showAchievement(text){

    if(
        !achievements.includes(text)
    ){

        achievements.push(text);

        updateAchievements();

        saveGame();

    }

    const popup =
    document.getElementById(
    "achievement-popup"
    );

    popup.innerText =
    "🏆 " + text;

    popup.classList.add(
    "show-achievement"
    );

    setTimeout(()=>{

        popup.classList.remove(
        "show-achievement"
        );

    },3000);

}
