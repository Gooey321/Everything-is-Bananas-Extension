document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        sendData();
    });

    function sendData() {
        let params = {
            active: true,
            currentWindow: true
        };
        chrome.tabs.query(params, gotTabs);

        function gotTabs(tabs) {
            let selected = document.getElementById('select_image');
            let selectedImage = selected.options[selected.selectedIndex].value;
            let message = {
                txt: "Hello",
                selectedImage: selectedImage
            };
            console.log("Sending message from popup script:", message);
            chrome.tabs.sendMessage(tabs[0].id, message, function(response) {
                console.log("Message sent from popup");
            });
        }
    }
});