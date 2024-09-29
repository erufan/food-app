import { Suspense } from "react";
import { getAllMeals } from "@/services/meals/http-requests";
import MealsGrid from "@/components/meals/meals-grid";
import Link from "next/link";

import classes from "./page.module.css";

export const metadata = {
  title: "All Meals",
  description: "See All Meals and Try to Cook them by Your own",
};

const Meals = async () => {
  const meals = await getAllMeals();

  return <MealsGrid meals={meals} />;
};

const MealsPage = () => {
  let object = {
    name: "erfan",
    insideObject: { name: this.name },
  };

  console.log(object);

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
        <Suspense
          fallback={<p className={classes.loading}>fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
