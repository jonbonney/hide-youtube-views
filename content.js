// Function to hide view counts
function hideViewCount() {
  const viewCounts = document.querySelectorAll(
    "#metadata-line > span:nth-child(3)"
  );
  viewCounts.forEach((viewCount) => {
    viewCount.style.display = "none";
  });
}

// MutationObserver to handle dynamic content loading
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      hideViewCount(); // Call hide function when new nodes are added
    }
  });
});

// Start observing the document body for added nodes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// Initial call to ensure it runs on page load as well
hideViewCount();

// Alert to test that the script is loaded
alert("The extension is loaded and running on YouTube!");
