import axios from 'axios';

const connectApis = {
    apiCliente: async (id = '') => {
        try {
            if (isNaN(id)) {
                return false;
            }
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            return response.data;
        } catch (error) {
            return false;
        }
    }
};

export default connectApis;

