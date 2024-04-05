export async function getTenPhotos() {
  fetch("https://jsonplaceholder.typicode.com/photos?_limit10")
    .then((response) => response.json())
    .then((json) => {
      let photoContainer = document.querySelector(".photoContainer");
      console.log(json.thumbnailUrl);
      for (let i = 0; i < 10; i++) {
        let newImage = document.createElement("img");
        newImage.setAttribute("src", json[i].thumbnailUrl);
        photoContainer.append(newImage);
      }
    });
}
