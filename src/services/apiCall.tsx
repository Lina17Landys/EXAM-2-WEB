const API_URL = 'https://api.le-systeme-solaire.net/rest.php/bodies';

export const ApiService = {
  async getBodies() {
    try {
      const response = await fetch(`${API_URL}?rowData=false`);
      if (!response.ok) {
        throw new Error('no se obtuvo');
      }
      const data = await response.json();
      return data.bodies;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
};
