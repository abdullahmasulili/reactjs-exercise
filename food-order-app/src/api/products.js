import { BASE_API_URL } from "../util/CONSTANTS";

export async function fetchMeals() {
  const response = await fetch(BASE_API_URL + "/meals");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Failed to retrieve data...");
  }

  return resData;
}

export async function addOrder(order) {
  const response = await fetch(BASE_API_URL + "/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ order }),
  });
  const resData = await response.json();

  if (!response.ok) {
    throw new Error(resData.message || "Failed to submit order");
  }

  return resData.message;
}
