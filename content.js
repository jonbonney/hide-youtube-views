// Function to hide view counts
function hideViewCount() {
  const viewCounts = document.querySelectorAll(
    "#metadata-line > span:nth-child(3)"
  );
  viewCounts.forEach((viewCount) => {
    viewCount.style.display = "none";
  });
}

// Function to show view counts
function showViewCount() {
  const viewCounts = document.querySelectorAll(
    "#metadata-line > span:nth-child(3)"
  );
  viewCounts.forEach((viewCount) => {
    viewCount.style.display = ""; // Clear any inline styles
  });
}

// Apply view settings based on stored preference
function applyViewSettings() {
  chrome.storage.sync.get("hideViews", (data) => {
    if (data.hideViews) {
      hideViewCount();
    } else {
      showViewCount();
    }
  });
}

// MutationObserver to handle dynamic content loading
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      applyViewSettings(); // Apply settings when new nodes are added
    }
  });
});

// Start observing the document body for added nodes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Initially hide views
hideViewCount();

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.hasOwnProperty("hideViews")) {
    applyViewSettings();
  }
});
