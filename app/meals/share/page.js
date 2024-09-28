import { put } from "@vercel/blob";
import slugify from "slugify";

import ImagePicker from "@/components/meals/image-picker";
import classes from "./page.module.css";

export default function ShareMealPage() {
  const shareMeal = async (formData) => {
    "use server";

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

    await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/meals`, {
      body: JSON.stringify(data),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <>
      <header className={classes.header}>
        <h1>
          Share your <span className={classes.highlight}>favorite meal</span>
        </h1>
        <p>Or any other meal you feel needs sharing!</p>
      </header>
      <main className={classes.main}>
        <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label="upload you image" name="image" />
          <p className={classes.actions}>
            <button type="submit">Share Meal</button>
          </p>
        </form>
      </main>
    </>
  );
}
