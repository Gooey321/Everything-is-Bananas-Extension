console.log("Content script loaded");

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    console.log("Message received in content script:", message);
    if (message.txt === "Hello") {
        try {
            selectAndReplace(message.selectedImage);
            sendResponse({success: true});
        } catch (error) {
            console.error("Error in selectAndReplace:", error);
            sendResponse({success: false, error: error.message});
        }
    }
    return true;
});

function selectAndReplace(selectedImage) {
    console.log("selectAndReplace function called with:", selectedImage);
    let imgs = document.querySelectorAll('img');
    
    if (imgs.length === 0) {
        console.log("No images found on page");
        return;
    }

    let file;
    switch (selectedImage) {
        case "image1":
            file = "images/banana.jpg";
            break;
        case "image2":
            file = "images/bananaBunch.jpg";
            break;
        case "image3":
            file = "images/peeledBanana.jpg";
            break;
        default:
            throw new Error(`Invalid image selection: ${selectedImage}`);
    }

    const url = chrome.runtime.getURL(file);
    console.log("Generated URL:", url);

    imgs.forEach(imgElt => {
        const originalSrc = imgElt.src;
        imgElt.onerror = () => {
            console.error(`Failed to load image: ${url}`);
            imgElt.src = originalSrc;
        };
        imgElt.src = url;
        console.log(`Changed image from ${originalSrc} to ${url}`);
    });
}