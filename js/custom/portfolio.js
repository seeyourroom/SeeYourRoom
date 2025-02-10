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
    { id: 15, title: "Open Concept Ranch Home", details: "A spacious ranch-style home with an open floor plan and a two-car garage.", style: "Modern Ranch", tags: "#ranchhome #modernranch #openfloorplan #modernarchitecture #spaciousliving #modernranchstyle #two-cargarage #modernliving #modernhomes #ranchhomes" },
    { id: 16, title: "Dusk Serenity Residence", details: "Clean lines meet warm textures, bathed in the soft glow of twilight. Expansive windows invite natural light, while the minimalist landscape complements the structured architecture.", style: "Modern Farmhouse Retreat", tags: "#modernFarmhouse #residentialDesign #newConstruction #minimalistArchitecture #warmLighting #naturalMaterials #contemporaryHome #eveningView #exteriorDesign #luxuryLiving" },
    { id: 17, title: "Serene Forest Clearing", details: "Sunlight filters through lush trees, illuminating a peaceful clearing with soft grass.", style: "Realistic, Tranquil, Natural", tags: "#forestScene #natureLover #peacefulEscape #sunlight #greenery #naturalBeauty #realisticRendering #outdoorScene #tranquil #serene" },
    { id: 18, title: "Serene Urban Sanctuary", details: "Inviting pathway amidst blossoming trees, vibrant shrubs, and manicured evergreens, creating a tranquil urban retreat.", style: "Photorealistic, Contemporary Landscape Design", tags: "#UrbanLandscapeDesign #ContemporaryGarden #PublicSpace #GreenInfrastructure #WalkwayDesign #SeasonalPlanting #FloweringTrees #EvergreenStructure #BenchSeating #CommunitySpace" },
    { id: 19, title: "Serene Grey Kitchen: A Modern Refresh", details: "Soft grey hues, marble backsplash, and sleek appliances create a calm, modern space.", style: "Minimalist, Contemporary", tags: "#minimalistKitchen #contemporaryDesign #greyAesthetics #marbleAccents #modernAppliances #sleekDesign #kitchenInspiration #homeRenovation #interiorDesign" },
    { id: 21, title: "Urban Zen Retreat", details: "Textured walls, sculptural lighting, and natural wood accents create a calming, sophisticated space.", style: "Minimalist, Modern, Serene", tags: "#MinimalistBedroom #ModernDesign #SereneSpace #TexturedWalls #SculpturalLighting #NaturalWood #NeutralPalette #ContemporaryBedroom #InteriorDesign #HomeDecor" },
    { id: 20, title: "Modern Glam Living: Light & Luxe", details: "Sun-drenched space, sculptural lighting, bold patterns, and a serene, inviting atmosphere.", style: "Contemporary, Chic", tags: "#modernLivingRoom #contemporaryDesign #luxuriousDetails #patternPlay #statementLighting #chicInteriors #homeGoals #interiorStyling #elegantDesign #comfortAndStyle" },
    { id: 22, title: "Noir Elegance: A Calacatta Dream Kitchen", details: "Dramatic black Calacatta marble surfaces, ambient lighting, and sleek handleless cabinetry create a sophisticated and inviting space.", style: "Modern, Minimalist, Luxurious", tags: "#blackkitchen #calacatta #marble #moderndesign #luxuryhomes #minimalistkitchen #interiordesign #kitcheninspiration #sleekdesign #contemporarykitchen" },
    { id: 23, title: "Sculpted Light Dining Space", details: "Linear suspension light highlights textural table and sculptural seating in a quiet, sophisticated space.", style: "Modern, Minimalist, Refined", tags: "#minimalistInteriorDesign #modernDiningRoom #contemporaryDesign #neutralPalette #naturalMaterials #minimalDecor #diningTable #modernChairs #pendantLighting #interiorDesign" },
    { id: 24, title: "Modern Sanctuary Hallway", details: "Clean lines, soft neutrals, illuminated accents create an inviting and tranquil passage.", style: "Minimalist, Contemporary, Warm", tags: "#minimalistInteriorDesign #contemporaryDesign #neutralPalette #naturalMaterials #minimalDecor #hallwayDesign #modernHome #interiorArchitecture #subtleLighting #warmMinimalism" },
    { id: 25, title: "Modern Tranquility Residence", details: "Clean lines, natural stone accents, and integrated outdoor spaces create a serene living environment.", style: "Contemporary Minimalist", tags: "#modernArchitecture #minimalistDesign #contemporaryHome #naturalStone #outdoorLiving #cleanLines #luxuryRealEstate #modernHome #minimalistExterior #contemporaryDesign" },
    { id: 26, title: "Solana Retreat", details: "A tranquil space featuring a plush, modular sofa bed, perfect for relaxation and hosting guests. The neutral palette and natural wood accents create a warm and inviting atmosphere.", style: "Modern Coastal Serenity", tags: "#modernLivingRoom #neutralPalette #cozySeating #contemporaryFurniture #minimalistInteriorDesign #naturalMaterials #sectionalSofa #sofaBed #coastalDesign #warmInteriors" },
    { id: 27, title: "Ethereal Minimalist Bedroom", details: "A haven of calm, featuring a plush bed, a sleek desk, and a breathtaking view.", style: "Modern Tranquility", tags: "#minimalistInteriorDesign #modernBedroom #contemporaryDesign #neutralPalette #marbleAccents #naturalLight #openFloorPlan #cozySeating #minimalDecor #contemporaryFurniture" },
    { id: 28, title: "Urban Marble Retreat", details: "Clean lines, luxurious marble, and a glass enclosed shower create a spa-like experience.", style: "Modern, Minimalist Bathroom", tags: "#minimalistBathroom #modernBath #contemporaryDesign #marbleAccents #neutralPalette #luxuryBathroom #freestandingTub #walkinshower #minimalDecor #bathroomDesign" },
    { id: 29, title: "Elegance in Simplicity", details: "Soft textures, natural light, and a festive touch create a warm, inviting space.", style: "Modern Minimalist Comfort", tags: "#minimalistInteriorDesign #modernLivingRoom #contemporaryDesign #neutralPalette #naturalMaterials #openFloorPlan #cozySeating #minimalDecor #contemporaryFurniture #christmasDecor" },
    { id: 30, title: "Modern Minimalist Dining Room", details: "Sleek wooden table and chairs with a neutral color palette and natural light.", style: "Modern Minimalist", tags: "#minimalistInteriorDesign #modernDiningRoom #contemporaryDesign #neutralPalette #woodenFurniture #naturalMaterials #minimalDecor #contemporaryFurniture" }
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
