import axios from "axios";

const sheetUrl = import.meta.env.REACT_APP_SHEETS_API;

const getResidenceData = async () => {
    try {
      const response = await axios.get(sheetUrl);
      return response.data.data;
    } catch (error) {
      console.log("Erro ao obter dados de residência:", error);
      return [];
    }
  };

  export default getResidenceData