import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MainLayout } from "../../layouts/screens/MainLayout";
import { getSimpleSearchData, getAllExperiments } from "./getSimpleSearchData";
import { ExperimentTypeSchema } from "../../libs/zod/experiment/experiment";

export function ExperimentsRepository() {
  const { searchString} = useParams<{ searchString: string}>();
  const [searchResults, setSearchResults] = useState<ExperimentTypeSchema[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const showData = async () => {
      setLoading(true);
      try {
        let experimentData: ExperimentTypeSchema[] = []
        if (searchString) {
          experimentData = await getSimpleSearchData(searchString);
          setSearchResults(experimentData);
        } else {
          experimentData = await getAllExperiments();
          setSearchResults(experimentData);
        }
      } catch (error) {
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    showData();
  }, [searchString]);

  return (
    <MainLayout>
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {!loading && !error && (
          <div>
            {searchResults.length === 0 && <div>No results found for "{searchString}"</div>}
            {searchResults.length > 0 && (
              <ul>
                {searchResults.map((experiment) => (
                  <li key={experiment._id}>
                    <Link to={`/experiments-details/${experiment._id}`}>
                      <button className="border-2 border-black">{experiment.title}</button>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </MainLayout>
  );
}
