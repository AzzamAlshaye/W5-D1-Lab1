const container = document.getElementById("container");
const loading = document.getElementById("loading");

fetch("https://rickandmortyapi.com/api/character")
  .then((r) => r.json())
  .then((data) => {
    data.results.forEach((char) => {
      const card = document.createElement("div");
      card.classList.add("card");
      const h1 = document.createElement("h1");
      const img = document.createElement("img");
      card.appendChild(h1);
      card.appendChild(img);
      h1.innerText = char.name;
      img.src = char.image;
      img.classList.add("img-card");
      container.appendChild(card);
    });
  })
  .catch((err) => {
    loading.textContent = "Failed to load characters.";
    console.error(err);
  });
