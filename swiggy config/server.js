
const config = {
  logo: {
    type: "image",
    src: "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
    alt: "Swiggy Logo",
    style: {
      width: "200px",
      height: "auto",
    },
  },
  header: {
    type: "heading",
    text: "Welcome to Swiggy",
    size: "large",
  },
  search: {
    type: "input",
    placeholder: "Enter your location",
  },
  categories: {
    type: "menu",
    items: ["Pizza", "Burger", "Sushi", "Indian", "Chinese"],
  },
  restaurants: [
    {
      name: "Pizza Paradise",
      image:
        "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
      cuisine: "Pizza",
      rating: 4.5,
    },
    {
      name: "Burger Haven",
      image:
        "https://cdn.britannica.com/98/235798-050-3C3BA15D/Hamburger-and-french-fries-paper-box.jpg",
      cuisine: "Burger",
      rating: 4.2,
    },
    // ... add more restaurant entries
  ],
};



function renderUI() {
  const container = document.getElementById("app");

  // Logo
  const logo = document.createElement("img");
  logo.src = config.logo.src;
  logo.alt = config.logo.alt;
  Object.assign(logo.style, config.logo.style);
  container.appendChild(logo);

  // Header
  const header = document.createElement("h1");
  header.textContent = config.header.text;
  header.style.fontSize = config.header.size;
  container.appendChild(header);

  // Search Input
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = config.search.placeholder;
  container.appendChild(searchInput);

  // Categories Menu
  const categoriesMenu = document.createElement("ul");
  config.categories.items.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    categoriesMenu.appendChild(listItem);
  });
  container.appendChild(categoriesMenu);

  // Restaurants
  const restaurantsContainer = document.createElement("div");
  restaurantsContainer.className = "restaurants-container";
  config.restaurants.forEach((restaurant) => {
    const restaurantCard = document.createElement("div");
    restaurantCard.className = "restaurant-card";

    const restaurantImage = document.createElement("img");
    restaurantImage.src = restaurant.image;
    restaurantImage.alt = restaurant.name;
    restaurantCard.appendChild(restaurantImage);

    const restaurantName = document.createElement("h2");
    restaurantName.textContent = restaurant.name;
    restaurantCard.appendChild(restaurantName);

    const cuisineType = document.createElement("p");
    cuisineType.textContent = restaurant.cuisine;
    restaurantCard.appendChild(cuisineType);

    const rating = document.createElement("p");
    rating.textContent = `Rating: ${restaurant.rating}`;
    restaurantCard.appendChild(rating);

    restaurantsContainer.appendChild(restaurantCard);
  });
  container.appendChild(restaurantsContainer);
}

renderUI();
