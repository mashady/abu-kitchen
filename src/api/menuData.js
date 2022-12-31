import * as genresAPI from "./genresData";

const items = [
  {
    _id: "1",
    title: "Pulled BBQ aubergine & black bean burgers",
    genre: { _id: "1", name: "burgers" },
    description:
      "Get the kids to help you prep the veg for these family friendly burgers. These veggie buns have all the comforting textures of meat but are completely vegan",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/10/Tesco-burgers-and-slaw-87d15f4.jpg",
    price: "20$",
    fetureMeal: true,
  },
  {
    _id: "2",
    title: "Black bean burger",
    genre: { _id: "1", name: "burgers" },
    description:
      "Make some healthy, hearty vegan burgers layered with avocado and served with a fresh crunchy carrot and cucumber salad alongside. They’re full of goodness",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/06/Burgers-b6ae62a.jpg",
    price: "20$",
    fetureMeal: false,
  },
  {
    _id: "3",
    title: "The big double cheeseburger & secret sauce",
    genre: { _id: "1", name: "burgers" },
    description:
      "Forget the takeaway and make homemade cheeseburgers   double decker versions. With gherkins, crisp lettuce and a secret sauce, they take some beating.",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/12/Big-double-cheeseburger-f437c9c.jpg",
    price: "25$",
    fetureMeal: true,
  },
  {
    _id: "4",
    title: "Lactose-free pizza",
    genre: { _id: "2", name: "pizza" },
    description:
      "Make an easy family pizza and top with passata, Grana Padano and your favourite ingredients. Delicious for all, it’s ideal for anyone intolerant to lactose",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2020/11/Pizza_-3cecb5a.jpg",
    price: "35$",
    fetureMeal: true,
  },
  {
    _id: "5",
    title: "Mini polenta pizza bites",
    genre: { _id: "2", name: "pizza" },
    description:
      "Get little ones to help out making these gluten-free pizza bites. They’re ideal for a kid’s party where some children may be coealiac, or have a gluten intolerance",
    image:
      "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2020/03/polenta-pizza-bites.jpg",
    price: "30$",
    fetureMeal: true,
  },
  {
    _id: "6",
    title: "Sourdough pizza",
    genre: { _id: "2", name: "pizza" },
    description:
      "Make homemade sourdough pizza with a wonderfully chewy crust. Try our margherita recipe, then customise with your favourite toppings",
    image:
      "https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2020/03/sourdough-pizza-with-cutter_1.jpg",
    price: "30$",
    fetureMeal: true,
  },
  {
    _id: "7",
    title: "Classic homemade coleslaw",
    genre: { _id: "3", name: "salads" },
    description:
      "Forget shop-bought versions and make a homemade slaw. It’s an ideal side dish for barbecues or to serve with burgers, salads, sandwiches and more",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/03/Classic-homemade-coleslaw-cd8edba.jpg",
    price: "15$",
    fetureMeal: false,
  },
  {
    _id: "8",
    title: "Crunchy chopped salad",
    genre: { _id: "3", name: "salads" },
    description:
      "Encourage kids to learn essential kitchen skills with this crunchy salad made with pomegranate seeds. The recipe is easy for children aged seven to 11 to follow",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Crunchy-topped-salad-95567c8.jpg",
    price: "20$",
    fetureMeal: false,
  },
  {
    _id: "9",
    title: "Three bean salad with mozzarella",
    genre: { _id: "3", name: "salads" },
    description:
      "This substantial salad features a delicious mix of cannellini, kidney and green beans, and is ideal for a summer picnic",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/05/Three-bean-salad-with-mozzarella-deb0114.jpg",
    price: "20$",
    fetureMeal: false,
  },
  {
    _id: "10",
    title: "Pirate ship and treasure island cake",
    genre: { _id: "4", name: "deserts" },
    description:
      "A stunning children's birthday chocolate cake with hidden treasure buried on a sandy desert island for the kids to dig into",
    image:
      "https://www.bbcgoodfoodme.com/assets/legacy/recipe_images/pirate-ship.jpg",
    price: "15$",
    fetureMeal: false,
  },
  {
    _id: "11",
    title: "Summer berry terrine",
    genre: { _id: "4", name: "deserts" },
    description: "A refreshing and colourful dinner party desert",
    image:
      "https://www.bbcgoodfoodme.com/assets/legacy/recipe_images/recipe-image-legacy-id--4542_11.jpg",
    price: "15$",
    fetureMeal: true,
  },
  {
    _id: "12",
    title: "Pecan & maple syrup sticky pudding",
    genre: { _id: "4", name: "deserts" },
    description: "The perfect family desert",
    image:
      "https://www.bbcgoodfoodme.com/assets/legacy/recipe_images/recipe-image-legacy-id--4253_12.jpg",
    price: "15$",
    fetureMeal: false,
  },
  {
    _id: "13",
    title: "cola",
    genre: { _id: "5", name: "drinks" },
    description: "perfect cold  cola",
    image:
      "https://cdnprod.mafretailproxy.com/sys-master-root/hf4/h05/27691794989086/443516_main.jpg_480Wx480H",
    price: "10$",
    fetureMeal: false,
  },
  {
    _id: "14",
    title: "sprit",
    genre: { _id: "5", name: "drinks" },
    description: "perfect cold sprit",
    image: "http://7agty.com/storage/4925/medialibrarylsjlwY",
    price: "10$",
    fetureMeal: false,
  },
  {
    _id: "15",
    title: "fanta",
    genre: { _id: "5", name: "drinks" },
    description: "perfect cold fanta",
    image:
      "https://cdnprod.mafretailproxy.com/sys-master-root/he9/h7c/14585182912542/510290_1.jpg_480Wx480H",
    price: "10$",
    fetureMeal: false,
  },
  {
    _id: "16",
    title: "Iced caramel macchiato",
    genre: { _id: "5", name: "drinks" },
    description:
      "Take your coffee game up a notch this summer with our iced caramel macchiato – it’s made with espresso, milk, vanilla syrup and caramel sauce",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Iced-Caramel-Macchiato-f4a10f9.jpg",
    price: "15$",
    fetureMeal: false,
  },
  {
    _id: "17",
    title: "Blueberry smoothie recipe",
    genre: { _id: "5", name: "drinks" },
    description:
      "Make a quick and simple blueberry smoothie with yogurt, banana and apple juice for busy mornings. You can easily make it vegan by using coconut yogurt",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/01/Blueberry-smoothie-573aa19.jpg",
    price: "10$",
    fetureMeal: false,
  },
];

export function getItems() {
  return items;
}

export function getFeaturesItems(boolean) {
  return items.filter((i) => i.fetureMeal === boolean);
}

/**
 * export function getItems(id) {
  return items.find((i) => i._id === id);
}
 */
