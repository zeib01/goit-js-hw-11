import axios from "axios";
// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";


const gallery = document.querySelector(".gallery");
const form = document.querySelector(".form");
const input = document.querySelector("input[name='search-text']");
const userList = document.querySelector(".user-list");

const API_KEY = "33475610-696620aeee3e1938961deeefe";
const BASE_URL = "https://pixabay.com/api/";



if (!gallery) {
  console.error("Gallery element not found!");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = input.value.trim();

  if (!query) {
    iziToast.toast.warning({
      title: "Warning",
      message: "Please enter a search term.",
      position: "topRight",
      timeout: 5000,
    })
    return
  }

  if (gallery) {
    gallery.innerHTML = ""; // Очищуємо тільки якщо елемент існує
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
        iziToast.warning({
          title: "Warning",
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: "topRight",
          timeout: 5000,
      });
    }
       const markup = images
        .map(
          (image) => `
          <li class="gallery-item">
            <a href="${image.largeImageURL}" target="_blank">
              <img src="${image.webformatURL}" alt="${image.tags}" width="300"/>
            </a>
            <div class="info">
              <p><b>Likes:</b> ${image.likes}</p>
              <p><b>Views:</b> ${image.views}</p>
              <p><b>Comments:</b> ${image.comments}</p>
              <p><b>Downloads:</b> ${image.downloads}</p>
            </div>
          </li>`
        )
        .join("");
        if (gallery) {
          gallery.innerHTML = markup;
        }
  })

    .catch(function (error) {
      console.error("Error fetching images:", error);
      iziToast.error({
        title: "Error",
        message: "Failed to fetch images. Please try again later.",
        position: "topRight",
        timeout: 5000,
      });
    });
});