async function getActiveTab(){
    /*returns the current tab infromation*/
    return await browser.tabs.query({currentWindow: true, active: true});
}

async function getThirdPartyConnections(tabs){
    /*get all third party connections*/
    const tab = tabs.pop();
    const listenners = await browser.tabs.sendMessage(tab.id, {method: "connections"});
    const all_connections = listenners.data.count;
    var score_connections = document.getElementById('Connect');    
    if(all_connections*0.1 > 20) score_connections.innerHTML =  20;
    else score_connections.innerHTML = parseInt(all_connections*0.1);
}

var currentTab = getActiveTab().then((tabs) => {
    const connections = getThirdPartyConnections([...tabs]);
});