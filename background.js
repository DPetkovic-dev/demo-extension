chrome.tabs.onCreated.addListener(closeOpenedTab);

async function closeOpenedTab (tab) {
    // Unccomment a line below in order to make remove() feature work, otherwise "Cannot remove NTP tab." error will be shown, 
    // it'll work when redirection is made, but won't work on a newly opened tab (NTP).
    // With a line below uncommented, it uses to work most of time but there's a specific scenario using Acer laptop machine with WIN10 OS and there
    // i'm encountering a new error saying "Cannot update NTP tab.", which is connected to this redirection try (updating the tab).
    
    // chrome.tabs.update(tab.id, { url: "" });
    chrome.tabs.remove(tab.id, function () { });
}

