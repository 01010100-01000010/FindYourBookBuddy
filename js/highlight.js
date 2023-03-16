// Define a function to update the selected words list
function updateSelectedWords(selectedWords) {
    var selectedWordsDiv = document.getElementById("selected-words");
    selectedWordsDiv.innerHTML = selectedWords.length > 0 ? "Selected words: " + selectedWords.join(", ") : "";
    
}


// Define a function to populate the word list
function populateWordList(wordData) {
    var wordList = document.getElementById("word-list");

    wordData.forEach(function(description) {
        var li = document.createElement("li");
        li.classList.add("words");
        li.innerHTML = description.description;
        wordList.appendChild(li);
    });
}

// in data.csv sind meine textabsätze gespeichert
//Papa.parse("./csv/data.csv", {
Papa.parse(description2Url, {
    download: true,
    header: true,
    dynamicTyping: true,
    delimiter: ';', // Add delimiter option to specify semicolon separator
    complete: function(results) {
        var data = results.data;

        var textList = document.getElementById("text-list");
        var selectedWords = [];

        var wordList = document.getElementById("word-list");
        Papa.parse(wordCountsUrl, {
            download: true,
            header: true,
            delimiter: ';', // Add delimiter option to specify semicolon separator
            complete: function(results) {
                var wordData = results.data;

                populateWordList(wordData);

                wordList.addEventListener("click", function(event) {
                    console.log("wordList clicked"); // add this line
                    var target = event.target;
                    if (target.tagName === "LI") {
                        target.classList.toggle("highlighted");
                        var index = selectedWords.indexOf(target.textContent);
                        if (index === -1) {
                            selectedWords.push(target.textContent);
                        } else {
                            selectedWords.splice(index, 1);
                        }
                        updateSelectedWords(selectedWords); // call the updateSelectedWords function to update the selected words list

                    }

                    textList.innerHTML = "";

                    data.forEach(function(text) {
                        //console.log(text); // add this line
                        var count = 0;
                        selectedWords.forEach(function(description) {
                            //console.log(description); // add this line
                            if (text.description && text.description.indexOf(description) !== -1) { // check if text.description is defined
                                count++;
                            }
                        });
                        if (count > 0) {
                            var li = document.createElement("li");
                            li.innerHTML = text.ID + " (" + count + ")";
                            textList.appendChild(li);
                        }
                    });

                    selectedCounts = Array.from(textList.querySelectorAll("li"), function(li) {
                        var matches = li.innerHTML.match(/\((\d+)\)/);
                        var count = matches ? parseInt(matches[1]) : 0;
                        return { id: li.innerHTML.split(" ")[0], count: count };
                    });
                    //console.log(selectedCounts)
                    //updateBubbleChart(data);
                    updateChart(data);

                });
            }
        });
    }
});
