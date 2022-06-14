/* A final do WSL foi disputada por Medina e Ferreira e o resultado da bateria foi a seguinte: Medina pegou 8 ondas com a seguinte pontuação: 8, 5, 3, 9, 1, 4, 4, 7. Já Ferreira que também pegou 8 ondas obteve a seguinte pontuação: 5, 3, 7, 2, 9, 2, 4, 10.
Crie uma função chamada winner que irá receber um objeto contendo os surfistas, suas maiores notas e no final retornar um objeto contendo o vencedor, os maiores scores e o average score.
Ex da final:
processWinner({
     firstSurfer: {name: "Medina", score: [8, 5, 3, 9, 1, 4, 4, 7]},
     secondSurfer: {name: "Ferreira", score: [5, 3, 7, 2, 9, 2, 4, 10]}
})
Output:
{winner: "Ferreira", score: "9, 10", avgScore: "9.5"} */

//general function to find the greatest two scores from each surfer
function findGreatestScores(score) {

    let bestScores = 0
    let secondBestScores = 0

    for (let i = 0; i < score.length; i++) {
        if(score[i] > bestScores) {
            secondBestScores = bestScores
            bestScores = score[i]
        } else if (score[i] > secondBestScores) {
            secondBestScores = score[i]
        }
    }
    return [bestScores, secondBestScores]
}

//function to process the winner from the final heat
function processWinner(finalHeat) {
    
    const bestScoreFirstSurfer = findGreatestScores(finalHeat.firstSurfer.score)
    const bestScoreSecondSurfer = findGreatestScores(finalHeat.secondSurfer.score)

    //finding the average score of the two greatest scores
    let averageScoreFirstSurfer = (bestScoreFirstSurfer[0] + bestScoreFirstSurfer[1]) / 2
    let averageScoreSecondSurfer = (bestScoreSecondSurfer[0] + bestScoreSecondSurfer[1]) / 2

    //comparing and fiding the winner of the heat
    let winner = null
    if (averageScoreFirstSurfer > averageScoreSecondSurfer) {
        winner = finalHeat.firstSurfer.name +  '; Best Waves: ' + bestScoreFirstSurfer + '; Avegare Score: ' + averageScoreFirstSurfer
    } else {
        winner = finalHeat.secondSurfer.name +  '; Best Waves: ' + bestScoreSecondSurfer + '; Avegare Score: ' + averageScoreSecondSurfer
    } 

    return {
        winner
    }
    
}

console.log(processWinner({
    firstSurfer: {name: "Medina", score: [8, 5, 3, 9, 1, 4, 4, 7]},
    secondSurfer: {name: "Ferreira", score: [5, 3, 7, 2, 9, 2, 4, 10]}
}))
