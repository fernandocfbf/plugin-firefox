async function calculeScore(tabs){
    
    var score = document.getElementById('score');
    var Scorecookies = parseInt(document.getElementById('Cookies').innerHTML);;
    var ScorelocalStorage = parseInt(document.getElementById('LolcalS').innerHTML);
    var ScoresessionStorage = parseInt(document.getElementById('SessionS').innerHTML);
    var Scorefingerprint = parseInt(document.getElementById('FingerPrint').innerHTML);
    var ScoreConnections = parseInt(document.getElementById('Connect').innerHTML);
    var donut = document.getElementById('donut');
   
    var scoreValue = 100 - Scorecookies - ScorelocalStorage -ScoresessionStorage - Scorefingerprint - ScoreConnections;
    console.log("score: ", Scorecookies, ScorelocalStorage, ScoresessionStorage, Scorefingerprint, ScoreConnections);
    score.innerHTML = scoreValue;

    if (scoreValue>70){
        //bomm
        score.setAttribute('style',"color: green;");
    }else if(scoreValue<70 && scoreValue>=50){
        //medio
        score.setAttribute('style',"color: orange;");
    }else{
        //ruim
        score.setAttribute('style',"color: red;");
    }

        if(ScoreConnections != 0){
            var porcentagem_ScoreConnections   = ScoreConnections  / (scoreValue/100);
            var rad_ScoreConnections = (porcentagem_ScoreConnections/100)*360;
        }else{
            var rad_ScoreConnections =0;
        }

        if(Scorecookies != 0){
            var porcentagem_Scorecookies = Scorecookies / (scoreValue/100);
            var rad_Scorecookies = rad_ScoreConnections +(porcentagem_Scorecookies/100)*360;
        }else{
            var rad_Scorecookies = rad_ScoreConnections;
        }

        if(Scorefingerprint != 0){
            var porcentagem_Scorefingerprint  = Scorefingerprint / (scoreValue/100);
            var rad_Scorefingerprint= rad_Scorecookies+ (porcentagem_Scorefingerprint/100)*360;
        }else{
            var rad_Scorefingerprint = rad_Scorecookies;
        }

        if(ScorelocalStorage != 0){
            var porcentagem_localStorage = ScorelocalStorage / (scoreValue/100);
            var rad_localStorage = rad_Scorefingerprint+ (porcentagem_localStorage/100)*360;
        }else{
            var rad_localStorage =rad_Scorefingerprint;
        }

        if(ScoresessionStorage != 0){
            var porcentagem_sessionStorage  = ScoresessionStorage / (scoreValue/100);
            var rad_sessionStorage = rad_localStorage+ (porcentagem_sessionStorage/100)*360;
        }else{
            var rad_sessionStorage =rad_localStorage;
        }         
   
    

    donut.setAttribute('style',"background: conic-gradient(rgb(65, 0, 112) 0deg "+rad_ScoreConnections.toString()+"deg,rgb(30, 0, 130) "+rad_ScoreConnections.toString()+"deg "+rad_Scorecookies.toString()+"deg,rgb(102, 0, 176) "+rad_Scorecookies.toString()+"deg "+rad_Scorefingerprint.toString()+"deg,rgb(115, 0, 255) "+rad_Scorefingerprint.toString()+"deg "+rad_localStorage.toString()+"deg,rgb(23, 0, 61) "+rad_localStorage.toString()+"deg 360deg);");

}



setTimeout(() => {
    getActiveTab().then((tabs) => {
        const calcualte = calculeScore([...tabs]);
    });
  }, 200);