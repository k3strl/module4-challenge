// TODO: Create a variable that selects the form element
const form = document.querySelector("form"); // select the form element

// TODO: Create a function that handles the form submission.
function submitForm(event) { // function to handle the form submission
  event.preventDefault(); // prevent the default form submission behavior
  const title = document.querySelector("#title").value; // get the value of the title input
  const date = document.querySelector("#date").value; // get the value of the date input
  const content = document.querySelector("#content").value; // get the value of the content input

  if (!title || !date || !content) { // if any of the form fields are empty
    alert("Please complete the  form."); // display an alert to the user
  } else { // if all of the form fields are filled out
    const newPost = { title, date, content }; // create a new object with the form data
    storeLocalStorage(newPost); // store the new post in local storage
    redirectPage("blog.html"); // redirect to the blog page
  }
}

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.


