let elements = [
  {
    id: 1,
    image: "\G90_02_O.jpg",
    title: "Gemar #002",
    price: 100,
    size: "G-90 10'",
    color: "yellow",
  },
  {
    id: 2,
    image: "\G90_50_O.jpg",
    title: "Gemar #050",
    price: 100,
    size: "G-90 10'",
    color: "aquamarine",
  },
  {
    id: 3,
    image: "\G90_10_O.jpg",
    title: "Gemar #010",
    price: 100,
    size: "G-90 10'",
    color: "blue",
  },
  {
    id: 4,
    image: "\G90_70_O.jpg",
    title: "Gemar #070",
    price: 100,
    size: "G-90 10'",
    color: "grey",
  },
  {
    id: 5,
    image: "\G90_11_O.jpg",
    title: "Gemar #011",
    price: 100,
    size: "G-90 10'",
    color: "light-green",
  },
  {
    id: 6,
    image: "\G90_76_O.jpg",
    title: "Gemar #076",
    price: 100,
    size: "G-90 10'",
    color: "mocha",
  },
  {
    id: 7,
    image: "\orange.jpg",
    title: "Gemar #004",
    price: 400,
    size: "G-90 10'",
    color: "orange",
  },
  {
    id: 8,
    image: "\purple.jpg",
    title: "Gemar #008",
    price: 300,
    size: "G-90 10'",
    color: "purple",
  },
  {
    id: 9,
    image: "\red.jpg",
    title: "Gemar #005",
    price: 200,
    size: "G-90 10'",
    color: "red",
  },
];

function setDataToChannelStore() {
  localStorage.setItem("ballons", JSON.stringify(elements));
}
setDataToChannelStore();