import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MainLayout } from "../../layouts/screens/MainLayout";
import { getExperimentById } from "./getSimpleSearchData";
import { ExperimentTypeSchema } from "../../libs/zod/experiment/experiment";

export function ExperimentDetails() {
  const { id } = useParams<{ id?: string }>();
  const [experiment, setExperiment] = useState<ExperimentTypeSchema | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

    console.log(id)

  useEffect(() => {
    const fetchExperiment = async () => {
      if (id) {
        setLoading(true);
        try {
          const experimentData = await getExperimentById(id);
          console.log(experimentData)
          setExperiment(experimentData);
        } catch (error) {
          setError("Error fetching experiment data");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchExperiment();
  }, [id]);

  if (!id) {
    return <div>No experiment ID provided</div>;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!experiment) {
    return <div>Experiment not found</div>;
  }

  return (
    <MainLayout>
      <div>
        <h2>{experiment.title}</h2>
        {JSON.stringify(experiment, null, 2)}
      </div>
    </MainLayout>
  );
}
