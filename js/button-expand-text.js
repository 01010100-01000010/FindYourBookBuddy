const wordList = document.getElementById("word-list");
const showMoreButton = document.getElementById("show-more-button");
const incrementAmount = 200; // Increase max-height by 200px each time

showMoreButton.addEventListener("click", () => {
    // Get the current max-height of the element
    const currentMaxHeight = parseInt(getComputedStyle(wordList).maxHeight);

    // Increase the max-height by the specified amount
    const newMaxHeight = currentMaxHeight + incrementAmount;
    wordList.style.maxHeight = newMaxHeight + "px";

    // Check if all words are visible and hide the button if they are
    if (wordList.scrollHeight <= wordList.offsetHeight) {
        showMoreButton.style.display = "none";
    }
});
