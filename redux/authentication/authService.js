import axios from "axios"

export const userLogin = async (data) => {
    const response = await axios.post("https://node-js-wse4.onrender.com/user/login", data)
    return response.data.data;
}
