function victoryBalance(victory, defeat) {
    let victoriesBalance = victory - defeat;
    let level = "";

    // Decision structure with switch
    switch (true) {
        case (victory < 10):
            level = "Ferro";
            break;
        case (victory >= 11 && victory <= 20):
            level = "Bronze";
            break;
        case (victory >= 21 && victory <= 50):
            level = "Prata";
            break;
        case (victory >= 51 && victory <= 80):
            level = "Ouro";
            break;
        case (victory >= 81 && victory <= 90):
            level = "Diamante";
            break;
        case (victory >= 91 && victory <= 100):
            level = "Legendário";
            break;
        case (victory > 100):
            level = "Imortal";
            break;
    }

    console.log(`"O Herói tem de saldo de ${victoriesBalance} está no nível de ${level}`);
    return { victoriesBalance, level };
}

// Function to create a random player
function generatePlayer(name) {
    let victoryPoints = Math.floor(Math.random() * 120) + 1; // 1 to 120
    let defeatPoints = Math.floor(Math.random() * 100) + 1;  // 1 to 100
    
    return {
        name: name,
        victories: victoryPoints,
        defeats: defeatPoints
    };
}

// Function to generate multiple players
function generatePlayers(quantity) {
    let players = [];
    for (let i = 1; i <= quantity; i++) {
        players.push(generatePlayer(`Player${i}`));
    }
    return players;
}

// Generating 5 random players
let players = generatePlayers(3);

console.log(players);

// Loop to test each player
for (let player of players) {
    victoryBalance(player.victories, player.defeats);
}
