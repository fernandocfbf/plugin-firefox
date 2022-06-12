
async function getActiveTab(){
    /*returns the current tab infromation*/
    return await browser.tabs.query({currentWindow: true, active: true});
}

async function getLocalStorage(tabs){
    const tab = tabs.pop();
    const listenners = await browser.tabs.sendMessage(tab.id, {method: "localStorage"});
    console.log("LocalStorage executed!");
    return listenners;
}

var currentTab = getActiveTab().then((tabs) => {
    const localStorage = getLocalStorage([...tabs]);
});

/*
Como você pode ver, os dados de cookies e armazenamento local são armazenados pelo navegador da mesma maneira. Se você está preocupado com a segurança dos dados que estão sendo armazenados no computador do usuário, não localStorageoferece nenhum benefício de segurança em relação aos cookies.

Na verdade, pode até ser um risco maior, porque você pode configurar os cookies para expirar após um certo tempo, enquanto localStoragenão expiram. Assim, os dados salvos localStoragepodem permanecer no computador do usuário por mais tempo do que se você tivesse usado cookies.

(Se, no entanto, você precisar armazenar dados apenas durante uma única sessão, poderá usar sessionStorageem vez de localStorage.)
*/