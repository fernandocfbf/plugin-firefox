async function calculeScore(tabs){
    
    var score = document.getElementById('score');
    var Scorecookies = parseInt(document.getElementById('Cookies').innerHTML);;
    var ScorelocalStorage = parseInt(document.getElementById('LolcalS').innerHTML);
    var ScoresessionStorage = parseInt(document.getElementById('SessionS').innerHTML);
    var Scorefingerprint = parseInt(document.getElementById('FingerPrint').innerHTML);
    var ScoreConnections = parseInt(document.getElementById('Connect').innerHTML);
    var donut = document.getElementById('donut');
   
    var scoreValue =Scorecookies + ScorelocalStorage +ScoresessionStorage + Scorefingerprint + ScoreConnections;

    score.innerHTML = scoreValue;

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
   
    

    donut.setAttribute('style',"background: conic-gradient(rgb(255, 0, 212) 0deg "+rad_ScoreConnections.toString()+"deg,rgb(124, 0, 128) "+rad_ScoreConnections.toString()+"deg "+rad_Scorecookies.toString()+"deg,rgb(0, 30, 128) "+rad_Scorecookies.toString()+"deg "+rad_Scorefingerprint.toString()+"deg,rgb(0, 204, 255) "+rad_Scorefingerprint.toString()+"deg "+rad_localStorage.toString()+"deg,rgb(251, 255, 0) "+rad_localStorage.toString()+"deg 360deg);");

}



setTimeout(() => {
    getActiveTab().then((tabs) => {
        const connections = calculeScore([...tabs]);
    });
  }, 100);