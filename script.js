// script.js

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', function() {
    const countButton = document.getElementById('countButton');
    const textInput = document.getElementById('textInput');
    const vowelCountDisplay = document.getElementById('vowelCount');

    countButton.addEventListener('click', function() {
        const text = textInput.value.toLowerCase(); // Convert the text to lowercase
        const vowels = 'aeiou'; // Define the vowels we want to count
        let vowelCount = 0;

        // Loop through the text and count the vowels
        for (let i = 0; i < text.length; i++) {
            if (vowels.includes(text[i])) {
                vowelCount++;
            }
        }

        // Update the displayed vowel count
        vowelCountDisplay.textContent = vowelCount;
        console.log('Total Vowels:', vowelCount); // Debugging: check in the browser console
    });
});