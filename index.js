const displayPictures = (links) => {
    const container = document.querySelector('.pictures-container');
    links.forEach((link) => {
        const img = document.createElement('img');
        img.className = 'pictures-container__picture';
        img.src = link;
        img.alt = 'Some dog';
        img.width = 200;
        img.height = 190;
        container.append(img);
        setTimeout(() => {
            img.classList.add('picture__show');
        }, 500);
    });
};

const fetchPictures = async () => {
    const btn = document.querySelector('.get-btn');
    const spinnerClass = 'get-btn__spinner';
    btn.classList.add(spinnerClass);
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
        btn.classList.remove('get-btn__spinner');
    }
};

document.querySelector('.get-btn').addEventListener('click', fetchPictures);
