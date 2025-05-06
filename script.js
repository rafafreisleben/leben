const resumos = {
    biologia: "Biologia estuda os seres vivos, desde células até ecossistemas.",
    quimica: "Química aborda substâncias, reações químicas e suas aplicações.",
    fisica: "Física explica os princípios naturais como movimento e energia.",
    portugues: "Português foca em gramática, literatura e interpretação de textos.",
    historia: "História analisa eventos e sociedades ao longo do tempo."
};

function mostrarResumo(disciplina) {
    const resumoElement = document.getElementById("resumo");
    resumoElement.innerText = resumos[disciplina];
    resumoElement.classList.add("mostrar");
}

document.getElementById("acessibilidade").addEventListener("click", () => {
    alert("Opções de acessibilidade serão implementadas em breve!");
});
