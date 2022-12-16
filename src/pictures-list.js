const picturesListElement = document.querySelector('.pictures');
const pictureTempLateElement = document.getElementById('picture')
    .content
    .querySelector('.picture');


const renderPicturesList = (pictures) => {
    for (const picture of pictures) {
        const pictureElement = pictureTempLateElement.cloneNode(true);

        pictureElement.querySelector('img').src = picture.url;
        // pictureElement.querySelector('.card-title').textContent = picture.description;

        picturesListElement.append(pictureElement);
    }
}

export {renderPicturesList};