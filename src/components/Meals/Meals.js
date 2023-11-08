import { useEffect } from "react";
import "./Meals.css";
import { useState } from "react";
import MealItem from "../MealItem/MealItem";

const Meals = () => {
  const [loadedMeals, setLoadedMeals] = useState([]);
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <ul className="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal}/>
      ))}
    </ul>
  );
};

export default Meals;
