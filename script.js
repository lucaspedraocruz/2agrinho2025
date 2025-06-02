function harvest() {
    const food = document.getElementById("food");
    food.style.display = "block";
    food.innerHTML = "🍎🌽"; // Alimentos aparecem
    alert("Alimentos colhidos! Agora clique no caminhão para levar à cidade.");
}

function driveToCity() {
    const truck = document.getElementById("truck");
    const food = document.getElementById("food");
    const city = document.getElementById("city");

    if (food.style.display === "block") {
        truck.style.left = "120%"; // Caminhão se move para a direita
        setTimeout(() => {
            city.style.left = "0"; // Cidade aparece
            alert("Comida chegou na cidade! Obrigado, agricultores! 🌱");
        }, 3000);
    } else {
        alert("Colha os alimentos primeiro! Clique no fazendeiro.");
    }
}

function restart() {
    location.reload(); // Recarrega a página
}