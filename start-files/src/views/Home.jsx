import { CocktailsList } from "../components/CocktailsList";
import { getTrendingCocktails } from ".././api/cocktail-service";
import { Section } from "../components/Section";
import { Loader } from "../components/Loader";

export const Home = () => {
  const [cocktails, setCocktails] = useState([]);
  useEffect(() => {
    getTrendingCocktails().then((respons) => console.log(respons));
  }, []);

  return (
    <>
      <Section>
        <h1 className="text-center font-black text-gray-700 text-4xl mb-10">
          Trending cocktails
        </h1>

        {/* <CocktailsList cocktails={cocktails} /> */}
      </Section>
    </>
  );
};
