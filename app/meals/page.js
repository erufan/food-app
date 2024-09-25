import Link from "next/link";
import classes from "./page.module.css";
import MealItem from "@/components/meals/meal-item";

const MealsPage = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>Pick your favorite recipe and turn cooking into a fun adventure!</p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealItem meals={[]} />
      </main>
    </>
  );
};

export default MealsPage;
