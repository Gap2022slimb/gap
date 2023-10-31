// Array para armazenar os participantes
let participants = [];

// Verifique se já existem participantes salvos no armazenamento local
const storedParticipants = localStorage.getItem("participants");
if (storedParticipants) {
    participants = JSON.parse(storedParticipants);
}

// Função para confirmar a participação
function confirmParticipation() {
    const playerName = document.getElementById("player-name").value;

    if (playerName.trim() !== "") {
        if (!participants.includes(playerName)) {
            participants.push(playerName);
            localStorage.setItem("participants", JSON.stringify(participants)); // Salva no armazenamento local
            alert(`${playerName} confirmou participação.`);
            document.getElementById("player-name").value = "";
        } else {
            alert("Esse jogador já confirmou participação.");
        }
    } else {
        alert("Por favor, insira um nome de jogador válido.");
    }
}

// ... (código JavaScript existente) ...


// Função para mostrar a lista de participantes
function showParticipants() {
    const participantsList = document.getElementById("participants-list");
    participantsList.innerHTML = "<h2>Participantes Confirmados</h2>";

    if (participants.length === 0) {
        participantsList.innerHTML += "<p>Nenhum participante confirmado ainda.</p>";
    } else {
        participantsList.innerHTML += "<ul>";
        for (const participant of participants) {
            participantsList.innerHTML += `<li>${participant}</li>`;
        }
        participantsList.innerHTML += "</ul>";
    }
}

// ... (código JavaScript existente) ...
// Função para limpar o localStorage
function clearLocalStorage() {
    localStorage.clear();
    alert("Dados armazenados no localStorage foram removidos.");
    // Também é possível atualizar a página para refletir a remoção dos dados:
    // window.location.reload();
}

// ... (código JavaScript existente) ...

// Função para limpar o localStorage com senha
function clearLocalStorage() {
    const password = prompt("Digite a senha para limpar os dados:");
    if (password === "3446") { // Substitua "sua_senha_aqui" pela senha desejada
        localStorage.clear();
        alert("Dados armazenados no localStorage foram removidos.");
        // Também é possível atualizar a página para refletir a remoção dos dados:
        // window.location.reload();
    } else {
        alert("Senha incorreta. Os dados não foram removidos.");
    }
}

// Função para sortear Times A e B com senha
function drawTeams() {
    const password = prompt("Digite a senha para sortear os times:");
    if (password === "3446") { // Substitua "sua_senha_aqui" pela senha desejada
        if (participants.length < 10) {
            alert("É necessário ter pelo menos 10 participantes para criar dois times.");
            return;
        }

        // Embaralhe a lista de participantes
        const shuffledParticipants = participants.slice().sort(() => Math.random() - 0.5);

        // Separe os 10 primeiros participantes em dois times
        const teamA = shuffledParticipants.slice(0, 5);
        const teamB = shuffledParticipants.slice(5, 10);

        // Exiba os times
        displayTeam("Time A", teamA, "team-a");
        displayTeam("Time B", teamB, "team-b");
    } else {
        alert("Senha incorreta. Os times não foram sorteados.");
    }
}

// ... (código JavaScript existente) ...


document.getElementById("participation-form").addEventListener("submit", function(event) {
    event.preventDefault();
});

// Função para sortear Times A e B
//function drawTeams() {
//    if (participants.length < 10) {
//        alert("É necessário ter pelo menos 10 participantes para criar dois times.");
//        return;
//    }

    // Embaralhe a lista de participantes
//    const shuffledParticipants = participants.slice().sort(() => Math.random() - 0.5);

    // Separe os 10 primeiros participantes em dois times
//    const teamA = shuffledParticipants.slice(0, 5);
//    const teamB = shuffledParticipants.slice(5, 10);

    // Exiba os times
//    displayTeam("Time A", teamA, "team-a");
//    displayTeam("Time B", teamB, "team-b");
//}

// Função para exibir os times
function displayTeam(teamName, teamMembers, targetElement) {
    const teamElement = document.getElementById(targetElement);
    teamElement.innerHTML = `<h2>${teamName}</h2>`;

    if (teamMembers.length === 0) {
        teamElement.innerHTML += "<p>Nenhum jogador no time.</p>";
    } else {
        teamElement.innerHTML += "<ul>";
        for (const member of teamMembers) {
            teamElement.innerHTML += `<li>${member}</li>`;
        }
        teamElement.innerHTML += "</ul>";
    }
}