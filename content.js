chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.txt == "Hello") {
        selectAndReplace(message.selectedImage, sender, sendResponse);
    }
});
function selectAndReplace(message, sender, sendResponse) {
    let imgs = document.querySelectorAll('img');

    switch (message) {
        case "image1":
            for (let imgElt of imgs) {
                let file = "images/banana.jpg";
                let url = chrome.runtime.getURL(file)
                imgElt.src = url;
            }
            break;
        case "image2":
            for (let imgElt of imgs) {
                let file = "images/bananBunch.jpg";
                let url = chrome.runtime.getURL(file)
                imgElt.src = url;
            }
            break;
        case "image3":
            for (let imgElt of imgs) {
                let file = "images/peeledBanana.jpg";
                let url = chrome.runtime.getURL(file)
                imgElt.src = url;
            }
            break;
    }
}
