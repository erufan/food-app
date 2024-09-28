"use server";
import { redirect } from "next/navigation";
import { put } from "@vercel/blob";
import slugify from "slugify";
import { postMeal } from "./http-requests";

export const shareMeal = async (formData) => {
  const meal = {};
  for (const [key, value] of formData.entries()) {
    meal[key] = value;
  }
  const { image } = meal;
  const { url } = await put(image.name, image, {
    access: "public",
  });

  meal.image = url;
  meal.slug = slugify(meal.title, { lower: true });

  await postMeal(meal);

  redirect("/meals");
};
