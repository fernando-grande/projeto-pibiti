import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MainLayout } from "../../layouts/screens/MainLayout";
import { getSimpleSearchData, getAllExperiments } from "./getSimpleSearchData";
import { ExperimentTypeSchema } from "../../libs/zod/experiment/experiment";

// import { AdvancedSearchBar } from "./AdvancedSearch";

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
        console.log(error)
        setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };

    showData();
  }, [searchString]);

  return (
    <MainLayout>
      <div className="grid grid-cols-[200px_1fr_200px] mt-4">
        <div className="flex align-middle justify-center">
          {/* <AdvancedSearchBar/> */}
        </div>
        {loading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {!loading && !error && (
          <div>
            {searchResults.length === 0 && <div>No results found for "{searchString}"</div>}
            {searchResults.length > 0 && (
              <ul className="flex flex-wrap">
                {searchResults.map((experiment) => (
                  <li key={experiment._id}>
                    <div className="flex justify-center items-center flex-col border-2 border-black p-1 m-4 h-[200px] w-[300px]">
                      <p><strong>Title:</strong> {experiment.title}</p>
                      <p><strong>Authorship:</strong> {experiment.authorship}</p>
                      <Link to={`/experiments-repository/details/${experiment._id}`}>
                        <button className="mt-2 p-1 font-semibold text-white bg-green-700">See Details</button>
                      </Link>
                    </div>
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
