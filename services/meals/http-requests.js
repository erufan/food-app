export async function getAllMeals() {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/meals`, {
    cache: "no-cache",
  });

  const meals = await data.json();

  return meals;
}

export async function getMeal(slug) {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/meals/${slug}`
  );

  const meal = await data.json();

  return meal;
}

export async function postMeal(data) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/meals`, {
    body: JSON.stringify(data),
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
}
