function hideViewCount() {
  const currentVideoViewCount = document.querySelector(
    "#info > span:nth-child(1)"
  );
  const spacingElement = document.querySelector("#info > span:nth-child(2)");
  if (currentVideoViewCount) {
    currentVideoViewCount.style.display = "none";
    spacingElement.style.display = "none";
  }
}

function showViewCount() {
  const currentVideoViewCount = document.querySelector(
    "#info > span:nth-child(1)"
  );
  const spacingElement = document.querySelector("#info > span:nth-child(2)");
  if (currentVideoViewCount) {
    currentVideoViewCount.style.display = ""; // Clears any inline style hiding the view counts
  }
  if (spacingElement) {
    spacingElement.style.display = ""; // Clears any inline style hiding the view counts
  }
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
