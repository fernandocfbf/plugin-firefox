async function calculeScore(tabs){
    
    var score = document.getElementById('score');
    var Scorecookies = 0;
    var ScorelocalStorage = parseInt(document.getElementById('LolcalS').innerHTML);
    var ScoresessionStorage = parseInt(document.getElementById('SessionS').innerHTML);
    var Scorefingerprint = 0;
    var ScoreConnections = 0;
   
    var scoreValue =Scorecookies + ScorelocalStorage +ScoresessionStorage + Scorefingerprint + ScoreConnections;

    score.innerHTML = scoreValue;

}



setTimeout(() => {
    getActiveTab().then((tabs) => {
        const connections = calculeScore([...tabs]);
    });
  }, 100);