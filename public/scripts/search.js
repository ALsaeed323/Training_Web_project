  // Wait for the document to be ready
  $(document).ready(function() {
    // When the search form is submitted
    $("#searchForm").submit(async function(event) {
      event.preventDefault(); // Prevent the default form submission

      const searchTerm = $("input[name='search']").val();

      try {
        const response = await $.ajax({
          url: "/search", // Update this with your server route
          type: "POST",
          contentType: "application/json",
          data: JSON.stringify({ search: searchTerm }),
        });

        // Clear previous results
        $("#searchResults").empty();

        // Display search results
        response.forEach(result => {
          const resultItem = $("<div>").text(result.name); // Displaying only the name as an example
          $("#searchResults").append(resultItem);
        });
      } catch (error) {
        console.error("An error occurred while searching.", error);
      }
    });
  });