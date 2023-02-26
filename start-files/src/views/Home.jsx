import { CocktailsList } from "../components/CocktailsList";
import { getTrendingCocktails } from ".././api/cocktail-service";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { useEffect, useState } from "react";

export const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getTrendingCocktails()
      .then((respons) => {
        const transormRes = respons.map((res) => res.drinks[0]);
        setCocktails(transormRes);
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      <Section>
        {isLoading && <Loader />}
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        <CocktailsList cocktails={cocktails} />
      </Section>
    </>
  );
};
