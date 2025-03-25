import axios from "axios";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";



const form = document.querySelector(".form");
const input = document.querySelector("input[name='search-text']");
const userList = document.querySelector(".user-list");

const API_KEY = "33475610-696620aeee3e1938961deeefe";
const BASE_URL = "https://pixabay.com/api/";

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    alert("Please enter a search term.");
    return;
  }

  axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: "photo",
        orientation: "horizontal",
        safesearch: true,
      },
    })
    .then(function (response) {
      const images = response.data.hits;
      if (images.length === 0) {
        alert("No images found. Try a different search term.");
        return;
      }

      const markup = images
        .map(
          (image) => `
          <li>
            <img src="${image.webformatURL}" alt="${image.tags}" width="200"/>
            <p><b>Likes</b>: ${image.likes}</p>
          </li>`
        )
        .join("");

      userList.innerHTML = markup;
    })
    .catch(function (error) {
      console.error("Error fetching images:", error);
      alert("Failed to fetch images. Please try again later.");
    });
});
