const galleryImages = [
    { id: 1, title: "Desert Oasis Lounge", details: "A tranquil desert retreat with woven textures, warm wood, and lush greenery.", style: "Rustic Modern", tags: "#desertretreat #rusticmodern #woventextures #desertvibes #tranquilspaces #naturalmaterials #modernrustic #desertchic #desertinterior #desertinspired" },
    { id: 2, title: "Urban Renewal Complex", details: "A revitalized urban space with modern architecture and lush greenery.", style: "Industrial Modern", tags: "#urbanrenewal #industrialmodern #modernarchitecture #lushgreenery #revitalizedspaces #modernurban #greenarchitecture #urbanrevitalization #sustainabledesign #moderncityscape" },
    { id: 3, title: "Forest Retreat Cabin", details: "A cozy cabin nestled in the woods with a modern touch.", style: "Rustic Modern", tags: "#forestcabin #rusticmodern #woodlandretreat #moderncabin #natureescape #woodlandhome #cabinliving #rusticmodernarchitecture #modernrustic #woodlandcabin" },
    { id: 4, title: "Mountainside Retreat", details: "A striking modern home with expansive mountain views.", style: "Modern Minimalist", tags: "#mountainsidehome #modernminimalist #contemporarydesign #mountainviews #modernarchitecture #minimalistelegance #modernmountainhome #mountainretreat #modernhouse #concretearchitecture" },
    { id: 5, title: "Tranquil Outdoor Retreat", details: "A cozy outdoor space with a rustic charm and comfortable seating.", style: "Modern Farmhouse", tags: "#outdoorLiving #farmhouseStyle #patioDesign #outdoorSeating #landscaping #brickWall #ceilingFan #naturalLight #homeDesign #relaxation" },
    { id: 6, title: "Urban Skyline Dining", details: "A sophisticated dining space with panoramic city views and a sleek, minimalist design.", style: "Modern Minimalist", tags: "#modernDiningRoom #cityViews #minimalistDesign #marbleCountertop #diningTable #modernChairs #panoramicWindows #urbanLiving #luxuryLiving #homeDesign" },
    { id: 7, title: "Serene Minimalist Living", details: "A tranquil living space defined by clean lines, natural textures, and a neutral color palette.", style: "Modern Minimalist", tags: "#minimalistInteriorDesign #modernLivingRoom #contemporaryDesign #neutralPalette #marbleAccents #naturalMaterials #openFloorPlan #cozySeating #minimalDecor #contemporaryFurniture" },
    { id: 8, title: "Rustic Retreat", details: "Stone exterior, expansive windows, cozy balcony.", style: "Modern Farmhouse", tags: "#modernfarmhouse #stoneexterior #expansivewindows #cozybalcony #rusticretreat" },
    { id: 9, title: "Coastal Kitchen Retreat", details: "A light and airy kitchen with a touch of rustic charm, perfect for creating a warm and inviting space.", style: "Modern Coastal", tags: "#modernCoastalKitchen #coastalKitchenDesign #rusticKitchen #airyKitchen #diningArea #kitchenIsland #naturalLight #warmLighting #kitchenDecor #homeDesign" },
    { id: 10, title: "Urban Loft Apartments", details: "A modern apartment complex with brick facade and private balconies.", style: "Industrial Modern", tags: "#urbanlofts #industrialmodern #modernarchitecture #brickfacade #privatebalconies #apartmentliving #modernurban #loftliving #urbanapartment #modernarchitecture" },
    { id: 11, title: "Serene Sanctuary", details: "Open-plan living with a neutral palette and cozy seating overlooking a lush outdoor space.", style: "Modern Minimalist", tags: "#minimalistInteriorDesign #modernLivingRoom #contemporaryDesign #neutralPalette #marbleAccents #naturalMaterials #openFloorPlan #cozySeating #minimalDecor #contemporaryFurniture" },
    { id: 12, title: "Tranquil Patio Retreat", details: "A stylish patio setting with comfortable seating and a cozy fireplace for relaxing evenings.", style: "Modern Outdoor", tags: "#modernPatio #outdoorLiving #patioFurniture #fireplace #landscaping #seatingArea #outdoorDining #relaxation #backyardOasis #homeDesign" },
    { id: 13, title: "Misty Mountain Retreat", details: "A secluded sanctuary nestled amidst the pines, where contemporary design meets rustic warmth.", style: "Modern Mountain", tags: "#ModernMountainCabin #SecludedSanctuary #MountainViewHome #RusticLuxury #ContemporaryMountainDesign #NatureInspiredLiving #MinimalistMountainHideaway #ModernCabinDesign #MountainEscape #ContemporaryMountainResidence" },
    { id: 14, title: "Minimalist Zen Bedroom", details: "A serene bedroom with a neutral palette and natural light.", style: "Minimalist Zen", tags: "#minimalistInteriorDesign #modernLivingRoom #contemporaryDesign #neutralPalette #marbleAccents #naturalMaterials #openFloorPlan #cozySeating #minimalDecor #contemporaryFurniture" },
    { id: 15, title: "Open Concept Ranch Home", details: "A spacious ranch-style home with an open floor plan and a two-car garage.", style: "Modern Ranch", tags: "#ranchhome #modernranch #openfloorplan #modernarchitecture #spaciousliving #modernranchstyle #two-cargarage #modernliving #modernhomes #ranchhomes" }
];


const galleryElement = document.getElementById('gallery');

galleryImages.forEach(image => {
    const galleryImgWrapper = document.createElement('div');
    galleryImgWrapper.classList.add('gallery-img-w');
    galleryImgWrapper.setAttribute('data-full', `images/portfolio/full/${image.id}.jpg`);

    const galleryImg = document.createElement('img');
    galleryImg.src = `images/portfolio/thumb/${image.id}.jpg`;
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
