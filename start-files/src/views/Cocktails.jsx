import { SearchForm } from "../components/SearchForm";
import { Section } from "../components/Section";
import { CocktailsList } from "../components/CocktailsList";
import { Loader } from "../components/Loader";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchByName } from "../api/cocktail-service";

export const Cocktails = () => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");

  const handleFormSubmit = (value) => {
    setSearchParams({ query: value });
  };

  useEffect(() => {
    searchByName(query)
      .then((response) => {
        setCocktails(response.drinks);
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, [query]);

  return (
    <>
      {isLoading && <Loader />}
      <Section>
        <SearchForm onSubmit={handleFormSubmit} />
        <CocktailsList cocktails={cocktails} />
      </Section>
    </>
  );
};
