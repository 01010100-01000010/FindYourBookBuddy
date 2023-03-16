const recommendationButton = document.getElementById('recommendation-button');
const congratsDiv = document.querySelector('.Congrats');
const newBooksDiv = document.querySelector('.NewBooks');
const bubbleChartDiv = document.querySelector('.bubble-chart');
const wordfilterDiv = document.querySelector('.wordfilter');


recommendationButton.addEventListener('click', () => {
    congratsDiv.style.display = 'block';
    //newBooksDiv.style.marginBottom = '80px';
    bubbleChartDiv.style.display = 'block';
    wordfilterDiv.style.display = 'block';
});