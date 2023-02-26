import { Section } from "../components/Section";
import { Loader } from "../components/Loader";
import { GoBackBtn } from "../components/GoBackBtn";
import { CocktailInfo } from "../components/CocktailInfo";
import { useLocation, useParams } from "react-router-dom";
import { routes } from "../routes";
import { getCocktailDetail } from "../api/cocktail-service";
import { useEffect, useState } from "react";

export const CocktailDetail = () => {
  const [cocktail, setCocktail] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { cocktailId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getCocktailDetail(cocktailId)
      .then((respons) => {
        setCocktail(respons);
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      {cocktail && <CocktailInfo {...cocktail} />}
    </>
  );
};
