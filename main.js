const menu = [
  {
    id: 1,
    title: "bread omelet",
    category: "breakfast",
    img: "./imgs/food-item-1[bread-omelet].webp",
    price: 50,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ut adipisci minima culpa. Tempora facilis qui, animi maiores corporis modi.",
  },
  {
    id: 2,
    title: "samosa",
    category: "breakfast",
    img: "./imgs/food-item-2[samosa].webp",
    price: 30,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ut adipisci minima culpa. Tempora facilis qui, animi maiores corporis modi.",
  },
  {
    id: 3,
    title: "maada",
    category: "breakfast",
    img: "./imgs/food-item-3[maada].jpg",
    price: 70,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ut adipisci minima culpa. Tempora facilis qui, animi maiores corporis modi.",
  },
  {
    id: 4,
    title: "momo",
    category: "lunch",
    img: "./imgs/food-item-4[momo].jpg",
    price: 110,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ut adipisci minima culpa. Tempora facilis qui, animi maiores corporis modi.",
  },
  {
    id: 5,
    title: "chowmein",
    category: "lunch",
    img: "./imgs/food-item-5[chowmein].jpg",
    price: 80,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ut adipisci minima culpa. Tempora facilis qui, animi maiores corporis modi.",
  },
  {
    id: 6,
    title: "fried rice",
    category: "lunch",
    img: "./imgs/food-item-6[Fried Rice].jpg",
    price: 90,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ut adipisci minima culpa. Tempora facilis qui, animi maiores corporis modi.",
  },
  {
    id: 7,
    title: "dal bhaat",
    category: "dinner",
    img: "./imgs/food-item-7[Dal Bhaat].jpg",
    price: 140,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ut adipisci minima culpa. Tempora facilis qui, animi maiores corporis modi.",
  },
  {
    id: 8,
    title: "thakali khaana",
    category: "dinner",
    img: "./imgs/food-item-8[Thakali Khaana].jpg",
    price: 230,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ut adipisci minima culpa. Tempora facilis qui, animi maiores corporis modi.",
  },
  {
    id: 9,
    title: "paneer",
    category: "dinner",
    img: "./imgs/food-item-9[Paneer].jpg",
    price: 240,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ut adipisci minima culpa. Tempora facilis qui, animi maiores corporis modi.",
  },
  {
    id: 10,
    title: "juju dhau",
    category: "desert",
    img: "./imgs/food-item-10[Juju Dhau].jpg",
    price: 50,
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ut adipisci minima culpa. Tempora facilis qui, animi maiores corporis modi.",
  },
];

const menuItemsContainer = document.querySelector(".food__items__container");
const buttonContainer = document.querySelector(".btn__container");
// console.log(filterBtns);

window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(menu);
  filterMenuItems();
});

function filterMenuItems() {
  const uniqueCategories = menu.reduce(
    (values, item) => {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );

  let newFilterBtns = uniqueCategories.map((uniqueCategory) => {
    return `
            <button class="filter__btn btn" data-id="${uniqueCategory}">${uniqueCategory}</button>
            `;
  });
  newFilterBtns = newFilterBtns.join("");
  buttonContainer.innerHTML = newFilterBtns;

  //to filter the items on the basis of category
  const filterBtns = document.querySelectorAll(".filter__btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      // console.log(category);
      const filteredMenu = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      if (category === "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(filteredMenu);
      }
    });
  });
}

//to display the menu items...
function displayMenuItems(paraMenu) {
  let menuItems = paraMenu.map((item) => {
    return `<article class="food__item">
        <div class="image__container">
            <img src="${item.img}" alt="food image" class="food__img">
        </div>
        <div class="food__info">
            <div class="food__info__upper">
                <div class="food__title">${item.title}</div>
                <div class="food__price">NRs${item.price}</div>
            </div>
            <div class="food__desc">
                ${item.desc}
            </div>
        </div>
    </article>`;
  });
  menuItems = menuItems.join("");
  // console.log(menuItems);
  menuItemsContainer.innerHTML = menuItems;
}
