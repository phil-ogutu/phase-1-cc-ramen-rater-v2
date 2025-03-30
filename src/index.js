// index.js

// Callbacks
const handleClick = (ramen) => {
  // Add code
  document.querySelector("#ramen-detail img").src = ramen.image;
  document.querySelector("#ramen-detail h2").textContent = ramen.name;
  document.querySelector("#ramen-detail h3").textContent = ramen.restaurant;
  document.querySelector("#rating-display").textContent = ramen.rating;
  document.querySelector("#comment-display").textContent = ramen.comment;
};

const addSubmitListener = () => {
  // Add code
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const newRamen = {
      name: event.target["new-name"].value,
      restaurant: event.target["new-restaurant"].value,
      image: event.target["new-image"].value,
      rating: event.target["new-rating"].value,
      comment: event.target["new-comment"].value,
    };
    addRamenToMenu(newRamen);
    form.reset();
  });
}

const displayRamens = () => {
  // Add code
  fetch("http://localhost:3000/ramens")
    .then((response) => response.json())
    .then((ramens) => {
      const ramenMenu = document.querySelector("#ramen-menu");
      ramenMenu.innerHTML = "";
      ramens.forEach((ramen) => addRamenToMenu(ramen));
      if (ramens.length > 0) handleClick(ramens[0]);
    });
};

const addRamenToMenu = (ramen) => {
  const img = document.createElement("img");
  img.src = ramen.image;
  img.addEventListener("click", () => handleClick(ramen));
  document.querySelector("#ramen-menu").appendChild(img);
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
  displayRamens();
  addSubmitListener();
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
