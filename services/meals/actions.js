"use server";
import { put } from "@vercel/blob";
import slugify from "slugify";

import { redirect } from "next/dist/server/api-utils";
import { postMeal } from "./http-requests";

export const shareMeal = async (formData) => {
  const data = {};
  for (const [key, value] of formData.entries()) {
    data[key] = value;
  }
  const { image } = data;
  const { url } = await put(image.name, image, {
    access: "public",
  });

  data.image = url;
  data.slug = slugify(data.title, { lower: true });

  await postMeal(data);

  redirect("/meals");
};
