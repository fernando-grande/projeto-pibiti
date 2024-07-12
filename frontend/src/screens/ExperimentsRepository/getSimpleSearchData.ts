import axios from "axios";
import { ExperimentTypeSchema } from "../../libs/zod/experiment/experiment";
type FilteredData = Partial<ExperimentTypeSchema>

export const getSimpleSearchData = async (searchString: string) => {
    try {
        const response = await axios.get('http://localhost:3000/search/simple', {
            params: { q:searchString }
        })
        return response.data
    } catch (error) {
        throw new Error('Erro ao buscar resultados!')
    }
}

export const getAllExperiments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/search/all')
      return response.data;
    } catch (error) {
      throw new Error('Error in search all results');
    }
  };

  export const getExperimentById = async (experimentId: string) => {
    try {
        const response = await axios.get(`http://localhost:3000/experiment/${experimentId}`)
        return response.data;
    } catch (error) {
        throw new Error (`Error in search data of Experiment from id: ${experimentId}`)
    }
  }

  // export const getAdvancedSearchData = async (filteredData: FilteredData) => {
  //   try {
  //     const response = await axios.post(`http://localhost:3000/search/advanced`, filteredData)
  //     return response.data;
  //   } catch (error) {
  //     throw new Error('Error in advanced search!')
  //   }
  // }