const { default: axios } = require("axios");

export const axiosInstance =axios.create({
    baseURL : "https://timmy-note-app.herokuapp.com/api"
})