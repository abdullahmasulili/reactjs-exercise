import { BASE_API_URL } from "../util/CONSTANTS";

export async function fetchMeals() {
  const response = await fetch(BASE_API_URL + "/meals");

  if (!response.ok) {
    throw new Error("Failed to retrieve data...");
  }

  const resData = await response.json();

  return resData;
}

export async function addOrder(order) {
  const response = await fetch(BASE_API_URL + "/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application-json",
    },
    body: JSON.stringify({ order }),
  });

  if (!response.ok) {
    throw new Error("Failed to submit order");
  }

  const resData = await response.json();

  return resData.message;
}
