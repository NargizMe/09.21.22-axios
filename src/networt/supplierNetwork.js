import { baseNetwork } from "./baseNetwork"


export const supplierNetwork = {
    getAllSuppliers : () => {

        return baseNetwork.getAll("suppliers")
  

    },
    
    deleteSupplier : (id) => {
        return baseNetwork.delete(`suppliers/${id}`)
    },
    
    addSupplier : (data) => {
        return baseNetwork.add(`suppliers`, data)
    },
    
}