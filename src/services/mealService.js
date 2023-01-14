import http from "./httpService";

const apiEndpoint = "/meals";

function mealUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getMeals() {
  return http.get(apiEndpoint);
}

export function getMeal(id) {
  return http.get(mealUrl(id));
}

export function saveMeal(meal) {
  // Update
  if (meal._id) {
    const body = { ...meal };
    delete body._id;
    return http.put(mealUrl(meal._id), body);
  }

  // Create
  return http.post(apiEndpoint, meal);
}

export function deleteMeal(id) {
  return http.delete(mealUrl(id));
}
