import axios from "axios";

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