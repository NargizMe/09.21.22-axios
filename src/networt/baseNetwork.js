import { axiosInstance } from "./axiosInstance"



export const baseNetwork = {

    getAll: async (url) => {

        let responseData = [];
        await axiosInstance.get(url)
            .then(res => {
                if (res.status == 200) {
                    responseData = res.data;
                }
                else {
                    throw "custom error"
                }
            })
            .catch(err => {
                throw err
            })

        return responseData;
    },
    getById: () => {

    },

    add: async (url, data) => {
        let responseData = [];
        await axiosInstance.post(url, data)
            .then(res => {
                if (res.status == 200) {
                    responseData = res.data;
                }
                else {
                    throw "custom error"
                }
            })
            .catch(err => {
                throw err
            })
        return responseData;
    },

    update: () => {

    },

    delete: async (id) => {
        let responseData = [];
        await axiosInstance.delete(id)
            .then(res => {
                if (res.status == 200) {
                    responseData = res.data;
                }
                else {
                    throw "custom error"
                }
            })
            .catch(err => {
                throw err
            })
        return responseData;
    }

}