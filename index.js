const displayPictures = (links) => {
    const container = document.querySelector('.pictures-container');
    links.forEach((elem) => {
        const img = document.createElement('img');
        img.className = 'picture';
        img.src = elem;
        img.alt = 'Some dog';
        img.width = 200;
        img.height = 190;
        container.append(img);
    });
};

const fetchPictures = async () => {
    const loader = document.querySelector('.loader');
    loader.style.display = 'flex';
    try {
        const response = await fetch('https://dog.ceo/api/breeds/image/random/6');
        if (!response.ok) {
            throw new Error(`Response status is ${result.status}`);
        }
        const body = await response.json();
        displayPictures(body.message);
    } catch (error) {
        console.log(error);
    } finally {
        loader.style.display = 'none';
    }
};

document.querySelector('.get-btn').addEventListener('click', fetchPictures);
