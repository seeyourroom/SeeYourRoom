const galleryImages = [
    { id: 1, title: "Project 1", details: "Details about Project 1" },
    { id: 2, title: "Project 2", details: "Details about Project 2" },
    { id: 3, title: "Project 3", details: "Details about Project 3" },
    { id: 4, title: "Project 4", details: "Details about Project 4" },
    { id: 5, title: "Project 5", details: "Details about Project 5" },
    { id: 6, title: "Project 6", details: "Details about Project 6" },
    { id: 7, title: "Project 7", details: "Details about Project 7" },
    { id: 8, title: "Project 8", details: "Details about Project 8" },
    { id: 9, title: "Project 9", details: "Details about Project 9" },
    { id: 10, title: "Project 10", details: "Details about Project 10" },
    { id: 11, title: "Project 11", details: "Details about Project 11" },
    { id: 12, title: "Project 12", details: "Details about Project 12" },
    { id: 13, title: "Project 13", details: "Details about Project 13" },
    { id: 14, title: "Project 14", details: "Details about Project 14" },
    { id: 15, title: "Project 15", details: "Details about Project 15" }
];

const galleryElement = document.getElementById('gallery');

galleryImages.forEach(image => {
    const galleryImgWrapper = document.createElement('div');
    galleryImgWrapper.classList.add('gallery-img-w');
    galleryImgWrapper.setAttribute('data-full', `images/portfolio_full/full/${image.id}.jpg`);

    const galleryImg = document.createElement('img');
    galleryImg.src = `images/portfolio_full/thumb/${image.id}.jpg`;
    galleryImg.alt = image.title;

    const galleryOverlay = document.createElement('div');
    galleryOverlay.classList.add('gallery-overlay');

    const galleryTitle = document.createElement('h3');
    galleryTitle.textContent = image.title;

    const galleryDetails = document.createElement('p');
    galleryDetails.textContent = image.details;

    galleryOverlay.appendChild(galleryTitle);
    galleryOverlay.appendChild(galleryDetails);

    galleryImgWrapper.appendChild(galleryImg);
    galleryImgWrapper.appendChild(galleryOverlay);
    galleryElement.appendChild(galleryImgWrapper);
});

document.querySelectorAll('.gallery-img-w').forEach(galleryImgWrapper => {
    galleryImgWrapper.addEventListener('click', () => {
        const fullImageSrc = galleryImgWrapper.getAttribute('data-full');
        const galleryWrapper = document.createElement('div');
        galleryWrapper.classList.add('gallery-img-c', 'active');

        const galleryFullImg = document.createElement('img');
        galleryFullImg.src = fullImageSrc;
        galleryWrapper.appendChild(galleryFullImg);

        galleryWrapper.addEventListener('click', () => galleryWrapper.remove());

        document.body.appendChild(galleryWrapper);
    });
});
