export const genres = [
  { _id: "1", name: "burgers" },
  { _id: "2", name: "pizza" },
  { _id: "3", name: "salads" },
  { _id: "4", name: "deserts" },
  { _id: "5", name: "drinks" },
];

export function getGenres() {
  return genres.filter((g) => g);
}
