import Image from "next/image";
import { getMeal } from "@/services/meals";

import classes from "./page.module.css";

const MealDetailsPage = async ({ params }) => {
  const meal = await getMeal(params.meal);

  const instructions = meal.instructions
    .split("\n")
    .map((line, index) => <p key={index}>{line}</p>);

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
