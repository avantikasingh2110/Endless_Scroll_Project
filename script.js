let key = "RaDSEKZuF7kHxMWu20yiirWtsi_s7CmrGkcEHlpQw-Q";
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=${key}&count=10`;
let photoDiv = document.getElementById('scroll-container');
let loadingDiv = document.getElementById('loading');

async function getPhotos() {
    try {
        // Show loading spinner
        loadingDiv.style.display = 'block';

        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log('Received photos:', data);

        data.forEach(photo => {
            const img = document.createElement('img');
            img.src = photo.urls.small;
            photoDiv.appendChild(img);
        });
    } catch (error) {
        console.error('Error fetching photos:', error);
    } finally {
        // Hide loading spinner after photos are loaded
        loadingDiv.style.display = 'none';
    }
}

// Infinite scroll event listener
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        getPhotos();
    }
});

// Initial load of photos
getPhotos();