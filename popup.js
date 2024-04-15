document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("toggleButton");
  // Check storage for the current state
  chrome.storage.sync.get("hideViews", (data) => {
    updateButtonText(button, data.hideViews);
  });

  button.addEventListener("click", () => {
    chrome.storage.sync.get("hideViews", (data) => {
      const newHideViews = !data.hideViews;
      chrome.storage.sync.set({ hideViews: newHideViews }, () => {
        updateButtonText(button, newHideViews);
        // Send a message to content script to toggle visibility
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.tabs.sendMessage(tabs[0].id, { hideViews: newHideViews });
        });
      });
    });
  });
});

function updateButtonText(button, hideViews) {
  button.textContent = hideViews ? "Show Views" : "Hide Views";
}
