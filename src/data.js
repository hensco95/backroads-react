import img1 from "./images/tour-2.jpeg";
import img2 from "./images/tour-3.jpeg";
import img3 from "./images/tour-4.jpeg";
import img4 from "./images/tour-5.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", className: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", className: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", className: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    text: "saving money",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-wallet fa-fw",
  },
  {
    id: 2,
    text: "endless hiking",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-tree fa-fw",
  },
  {
    id: 3,
    text: "amazing comfort",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.",
    icon: "fas fa-socks fa-fw",
  },
];

export const tours = [
  {
    id: 1,
    img: img1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country: "china",
    days: "6 days",
    price: "from $2100",
  },

  {
    id: 2,
    img: img2,
    date: "october 1th, 2020",
    title: "best of java",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country: "indonesia",
    days: "11 days",
    price: "from $1400",
  },

  {
    id: 3,
    img: img3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country: "hong kong",
    days: "8 days",
    price: "from $5000",
  },

  {
    id: 4,
    img: img4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumquevitae tempore voluptatum maxime reprehenderit eum quodexercitationem fugit, qui corporis.",
    icon: "fas fa-map",
    country: "kenya",
    days: "20 days",
    price: "from $3300",
  },
];
