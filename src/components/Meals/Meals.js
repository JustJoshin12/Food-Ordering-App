import useHttp from "../../hooks/useHttp";
import "./Meals.css";
import ErrorUI from "../ErrorUI/ErrorUI";

import MealItem from "../MealItem/MealItem";

const requestConfig = {};

const Meals = () => {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if (error) {
    return <ErrorUI title="Failed to fetch meals" message={error} />
  }

  // if (!data) {
  //   return <p>No meals found.</p>
  // }

  return (
    <ul className="meals">
      {loadedMeals.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
      ))}
    </ul>
  );
};

export default Meals;
