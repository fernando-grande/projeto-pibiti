import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL;

console.log(API_URL)

export const getSimpleSearchData = async (searchString: string) => {
    try {
        const response = await axios.get(`${API_URL}/search/simple`, {
            params: { q:searchString }
        })
        return response.data
    } catch (error) {
        throw new Error('Erro ao buscar resultados!')
    }
}

export const getAllExperiments = async () => {
    try {
      const response = await axios.get(`${API_URL}/search/all`)
      return response.data;
    } catch (error) {
      throw new Error('Error in search all results');
    }
  };

  export const getExperimentById = async (experimentId: string) => {
    try {
        const response = await axios.get(`${API_URL}/experiment/${experimentId}`)
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