const apiUrl = 'https://picsum.photos/v2/list?limit=30';

fetch(apiUrl)
    .then(response => response.json())
    .then(images => {
        const container = document.getElementById('image-container');

        images.forEach(image => {
            const imageItem = document.createElement('div');
            imageItem.classList.add('image-item');

            const img = document.createElement('img');
            img.src = image.download_url;
            img.alt = 'Image';

            imageItem.appendChild(img);
            container.appendChild(imageItem);
        });
    });