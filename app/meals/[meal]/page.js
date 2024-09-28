import { notFound } from "next/navigation";
import { getMeal } from "@/services/meals/http-requests";
import { formatInstructions } from "@/utils/meals";
import Image from "next/image";

import classes from "./page.module.css";

const MealDetailsPage = async ({ params }) => {
  const meal = await getMeal(params.meal);

  if (meal.error?.match(/found/i)) {
    notFound();
  }

  const instructions = formatInstructions(meal.instructions);

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <div className={classes.instructions}>{instructions}</div>
      </main>
    </>
  );
};

export default MealDetailsPage;
