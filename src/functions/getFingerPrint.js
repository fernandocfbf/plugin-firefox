async function getActiveTab(){
    /*returns the current tab infromation*/
    return await browser.tabs.query({currentWindow: true, active: true});
}

async function getFingerPrint(tabs){
    /*gets the user fingerprint*/
    const tab = tabs.pop();
    const finger = await browser.tabs.sendMessage(tab.id, {method: "fingerprint"});
    // var score_finger = document.getElementById('FingerPrint');
    // if (finger.data != undefined){
    //     score_finger.innerHTML = 20;
    // }
    // else{
    //     score_finger.innerHTML = 0;
    // }
}

var currentTab = getActiveTab().then((tabs) => {
    const fingerprint = getFingerPrint([...tabs]);
});