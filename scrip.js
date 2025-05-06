function mostrarResumo(disciplina) {
    let resumo = document.getElementById("resumo");

    const conteudos = {
        biologia: "Estuda os processos biológicos como evolução, genética e ecologia. No terceiro ano do Ensino Médio, foca em biotecnologia, fisiologia humana e sustentabilidade.",
        quimica: "Explora reações químicas, ácidos e bases, e química orgânica. No terceiro ano, aborda radioatividade, eletroquímica e polímeros sintéticos.",
        historia: "Analisa eventos históricos como Revolução Industrial, guerras mundiais e globalização. No terceiro ano, estuda o Brasil contemporâneo e movimentos sociais."
    };

    resumo.innerHTML = `<p>${conteudos[disciplina]}</p>`;
}