// TODO: Create a variable that selects the main element, and a variable that selects the back button element
const main = document.querySelector("main"); // select the main element
const backButton = document.querySelector(".back-button"); // select the back button element

// TODO: Create a function that builds an element and appends it to the DOM
function buildElement(element, text) {
  const newElement = document.createElement(element); // create a new element
  newElement.textContent = text; // set the text content of the new element
  main.appendChild(newElement); // append the new element to the main element
}

// TODO: Create a function that handles the case where there are no blog posts to display

function noPosts() { // function to handle the case where there are no blog posts to display
  const message = buildElement("p", "No posts to display."); // create a new element with the message "No posts to display."
  main.appendChild(message); // append the message to the main element
}

// TODO: Create a function called `renderBlogList` that renders the list of blog posts if they exist. If not, call the no posts function.

function renderBlogList() { // function to render the list of blog posts if they exist
  if (blogPosts.length === 0) { // if there are no blog posts
    noPosts(); // call the noPosts function
  } else { // if there are blog posts
    blogPosts.forEach((post) => { // loop through each blog post
      buildElement("h2", post.title); // create a new element with the title of the blog post
      buildElement("p", post.date); // create a new element with the date of the blog post
      buildElement("p", post.content); // create a new element with the content of the blog post
    });
  }
}

// TODO: Call the `renderBlogList` function

renderBlogList(); // call the renderBlogList function

// TODO: Redirect to the home page using the `redirectPage` function found in logic.js when the back button is clicked

redirectPage(backButton, "index.html");
