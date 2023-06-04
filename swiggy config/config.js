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
      image: "pizza-paradise.jpg",
      cuisine: "Pizza",
      rating: 4.5,
    },
    {
      name: "Burger Haven",
      image: "burger-haven.jpg",
      cuisine: "Burger",
      rating: 4.2,
    },
    // ... add more restaurant entries
  ],
};

export default config;
