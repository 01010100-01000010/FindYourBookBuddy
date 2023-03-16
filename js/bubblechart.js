function updateChart(data) {
  var selectedGenre = "";
  const padding = 1;
  // Get the SVG element from the DOM and the width and height of the SVG from its attributes
  const svg = d3.select('svg');
  const width = svg.attr('width');
  const height = svg.attr('height');

  d3.select("#genre-filter").on("change", function() {
    selectedGenre = this.value;
    updateChart(data);
  });

  // * Hier wird das Tooltip definiert
  // Create a tooltip container
  const tooltipContainer = svg.append('g')
    .attr('class', 'tooltip-container')
    .style('opacity', 0);

  // Create a div element to use as the tooltip
  var tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 1);
  
  // Add a tooltip background
  tooltipContainer.append('rect')
    .attr('class', 'tooltip-background');
  
  // Add a tooltip text element
  tooltipContainer.append('text')
    .attr('class', 'tooltip-text');

  // Form der Rechtecke  
  var nodes = selectedCounts.map(function(d) {
    return {
      width: 10 * (d.count*0.3),
      height: 14 * (d.count*0.3),
      x: width / 2,
      y: height / 2,
      id: d.id
    };
  });

  var simulation = d3.forceSimulation(nodes)
    .force('x', d3.forceX(width / 2).strength(0.07))
    .force('y', d3.forceY(height / 2).strength(0.07))
    .force('collide', d3.forceCollide().radius(function(d) {
      return Math.sqrt(d.width * d.width + d.height * d.height) /2 + padding +2;
    }))
    .on('tick', ticked);
      
  // Define a function to calculate opacity based on rating
  function getOpacity(rating) {
    if (rating <= 1) {
      return 0.2;
    } else if (rating <= 2) {
      return 0.4;
    } else if (rating <= 3) {
      return 0.6;
    } else if (rating <= 4) {
      return 0.8;
    } else {
      return 1;
    }
  }

  function ticked() {
    // Create rectangles with opacity based on rating
    var u = d3.select('svg')
      .selectAll("rect")
      .data(nodes)
      .join("rect")
      .attr("x", d => d.x - d.width / 2)
      .attr("y", d => d.y - d.height / 2)
      .attr('width', d => d.width)
      .attr('height', d => d.height)
      .attr('class', 'node')
      .attr('id', d => d.id)
      .style('opacity', d => getOpacity(data.filter(x => x.ID == d.id)[0].rating))
      .on("mouseover", handleMouseOver)
      .on("mouseout", handleMouseOut)
      .on("click", handleClick);

    function getBookData(id) {
      const book = data.filter(x => x.ID == id)[0];
      const title = book.title;
      const genre = book.genres;
      const rating = book.rating;
      const author = book.Author;
      const pages = book.num_pages;
      const book_id = book.book_id;
      const user_id = book.user_id;
      const isbn = book.isbn;
      const description = book.description;
      const image_url = book.image_url;
      const review_text = book.review_text;
    
      // Split the description into words
      const words = description.split(' ');
    
      // Get the selected words from the word-list
      const selectedWords = Array.from(document.querySelectorAll('.words.highlighted'), el => el.textContent.trim());
    
      // Wrap the selected words in a <mark> tag
      const markedWords = words.map(word => selectedWords.includes(word) ? `<mark class="highlighted">${word}</mark>` : word);
    
      // Join the words back into a string
      const markedDescription = markedWords.join(' ');
      
      return {
        title,
        genre,
        rating,
        author,
        pages,
        book_id,
        user_id,
        isbn,
        description,
        markedDescription,
        image_url,
        review_text
      };
    }
      
    function handleMouseOver(event, d) {
      const count = selectedCounts.filter(x => x.id == d.id)[0].count;
      const id = d.id;
      const book = getBookData(id);
      const { title, genre, rating, markedDescription } = book;
    
      // Show and position tooltip on mouseover
      tooltip.transition()
        .duration(200)
        .style("opacity", 1);
        tooltip.html(`Title: ${title}<br>Genre: ${genre}<br>ID: ${id}<br>Count: ${count}<br>Rating: ${rating}<br>Click for more info`)
        .style("left", (event.pageX) + "px")
        .style("top", (event.pageY - 28) + "px");
    }
      
    function handleMouseOut() {
      // Hide tooltip on mouseout
      tooltip.transition()
        .duration(500)
        .style("opacity", 0);
    }
      
    function handleClick(event, d) {
      const id = d.id;
      const book = getBookData(id);
      const { title, genre, author, pages, isbn, markedDescription, user_id, rating, review_text, image_url } = book;
    
      d3.select('.book-title').text(title);
      d3.select('.book-author').text(author);
      d3.select('.book-genre').text(genre);
      d3.select('.book-pages').text(pages);
      d3.select('.book-isbn').text(isbn);
      d3.select('.book-description').html(markedDescription);
      d3.select('.book-review').text(review_text);
      d3.select('.book-image').text(image_url);
    
      // Update the user and rating cells
      d3.select('.book-user').text(user_id);
      d3.select('.book-rating').text(rating);
    }
    
    
    
    tooltip.transition()
        .duration(500)
        .style("opacity", 0);
  }    
}


            //parameters die uninteressant sind aber ev noch gebraucht werden:
            // <p><strong>Book_id:</strong> ${book_id}</p>
            // <p><strong>ID:</strong> ${id}</p>
            // <img src="${image_url}" alt="Book cover">





