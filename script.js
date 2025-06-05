// Get references to the button and the container where iframes will be added
const activateButton = document.getElementById('activateButton');
const iframeContainer = document.getElementById('iframeContainer');

// Define how many iframes to add (the controlled amount)
const numberOfIframes = 1000; // You can change this number

// Define the delay in milliseconds (5 seconds = 5000 milliseconds)
const delayMilliseconds = 5000;

// Add an event listener to the button
activateButton.addEventListener('click', () => {
    console.log('Button clicked. Waiting 5 seconds before adding iframes...');

    // Disable the button temporarily to prevent multiple clicks
    activateButton.disabled = true;
    activateButton.textContent = 'Activating in 5 seconds...';

    // Set a timeout to execute the iframe creation after the delay
    setTimeout(() => {
        console.log('5 seconds passed. Adding iframes...');

        // Clear any existing iframes before adding new ones (optional)
        // iframeContainer.innerHTML = '';

        // Loop to create and add the specified number of iframes
        for (let i = 0; i < numberOfIframes; i++) {
            // Create a new iframe element
            const iframe = document.createElement('iframe');

            // Set the source to 'about:blank' which is a safe, empty document
            iframe.src = 'about:blank';

            // The size and border styles are now primarily handled by CSS (style.css)
            // You could add inline styles here if needed for specific dynamic cases,
            // but for consistent styling, CSS is better.

            // Append the created iframe to the container div
            iframeContainer.appendChild(iframe);
        }

        console.log(`Added ${numberOfIframes} iframes.`);

        // Re-enable the button after adding iframes
        activateButton.disabled = false;
        activateButton.textContent = 'Activate Iframe Spawner';

    }, delayMilliseconds); // The delay specified here
});
