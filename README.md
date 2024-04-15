# Hide YouTube Views Extension

This Chrome extension allows users to hide view counts on YouTube. View counts on recommended videos
are always hidden. View count visibility on actively playing videos is toggleable.

## Features

- **Toggle Visibility**: Allows users to toggle the visibility of view counts on the currently watched YouTube video via a simple popup interface.
- **Automatically Hide All Other Counts**: Automatically hides all other view counts on YouTube to keep the user experience clean and focused on content rather than metrics.

## Installation

To install this extension from the source code:

### Step 1: Download the Source Code

1. [Visit the GitHub repository](https://github.com/jonbonney/hide-youtube-views)
2. Click on the `Code` button and select "Download ZIP", or clone the repository using Git:
   ```bash
   git clone https://github.com/jonbonney/hide-youtube-views.git
   ```

### Step 2: Load the Extension into Chrome

1. Open Google Chrome.
2. Navigate to `chrome://extensions/` in your browser.
3. Enable Developer Mode by toggling the switch at the top-right corner.
4. Click on "Load unpacked".
5. Select the directory where you extracted your downloaded source code.

### Step 3: Using the Extension

- After loading the extension, navigate to YouTube and play any video.
- Click on the extension icon in the browser toolbar to open the popup.
- Use the "Toggle View Count" button to hide or show the view count on the currently active video.

## How It Works

The extension uses content scripts to selectively hide or show the view count elements on YouTube. It stores the user's preferences using Chrome's storage API and applies these settings dynamically as videos are loaded or switched.

## Contributing

Contributions are welcome! Please feel free to fork the repository, make changes, and submit pull requests. You can also open issues if you find bugs or have feature suggestions.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
