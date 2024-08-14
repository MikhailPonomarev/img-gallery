const getDogs = async () => {
  let result;
  let links;
  try {
    result = await fetch("https://dog.ceo/api/breeds/image/random/6");
  } catch (error) {
    console.log(error);
  }
  if (result.ok) {
    const body = await result.json();
    links = body.message;
  } else {
    throw new Error(`Response status is ${result.status}`);
  }
  return links;
};

const appendPictures = async () => {
  const dogs = await getDogs();
  const container = document.querySelector(".pictures-container");
  dogs.forEach((elem) => {
    const img = document.createElement("img");
    img.className = "picture";
    img.src = elem;
    img.alt = "Some dog";
    img.width = 200;
    img.height = 190;
    container.append(img);
  });
};

document.querySelector(".get-btn").addEventListener("click", async () => {
  await appendPictures();
  document.querySelector(".get-more-btn").style.display = "block";
});

document
  .querySelector(".get-more-btn")
  .addEventListener("click", appendPictures);
