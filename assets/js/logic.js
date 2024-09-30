// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.


// Creates a function called `readLocalStorage` that reads from local storage and returns the data. If no data exists, return an empty array.
let posts = [];

readLocalStorage();

function readLocalStorage() {
  const storedData = JSON.parse(localStorage.getItem('posts'));
  if (storedData) {
    posts = storedData;
  return posts;
  } else {
    posts = [];
    return posts;
  }
}
// Creates a function called `storeLocalStorage` that takes a given object and saves the new data to the existing blog data in local storage.
function storeLocalStorage() {
  localStorage.setItem('posts', JSON.stringify(posts));
}

// ! Use the following function whenever you need to redirect to a different page
let redirectURL = '';

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};
