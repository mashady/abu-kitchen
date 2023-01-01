export const genres = [
  { _id: "1abu4k", icon: "🍔", name: "burgers" },
  { _id: "2abu4k", icon: "🍕", name: "pizza" },
  { _id: "3abu4k", icon: "🥗", name: "salads" },
  { _id: "4abu4k", icon: "🍩", name: "deserts" },
  { _id: "5abu4k", icon: "🍹", name: "drinks" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
