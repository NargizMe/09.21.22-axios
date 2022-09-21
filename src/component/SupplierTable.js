import React, { useEffect, useState } from 'react'
import { supplierNetwork } from '../networt/supplierNetwork';

function SupplierTable() {

    const [suppliers, setsuppliers] = useState([]);
    const [addPost, setAddPost] = useState({
        companyName: '',
        contactName: '',
        contactTitle: '',
    });


    useEffect(() => {
        supplierNetwork.getAllSuppliers()
            .then(data => {
                setsuppliers(data);
            })

    }, [])

    async function handleDelete(id){
        await supplierNetwork.deleteSupplier(id)
        supplierNetwork.getAllSuppliers()
            .then(data => {
                setsuppliers(data);
            })
    }
    
    async function handleAdd(data){
        await supplierNetwork.addSupplier(data)
        supplierNetwork.getAllSuppliers()
            .then(data => {
                setsuppliers(data);
            })
    }

    return (<>
    <input placeholder='Company Name' onChange={(e) => setAddPost({...addPost, companyName: e.target.value})}/>
    <input placeholder='Contact Name' onChange={(e) => setAddPost({...addPost, contactName: e.target.value})}/>
    <input placeholder='Contact Title' onChange={(e) => setAddPost({...addPost, contactTitle: e.target.value})}/>
    <button onClick={() => handleAdd(addPost)}>Add</button>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                    <th>Contact Title</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    suppliers && suppliers.map((item, key) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                            <td>{item.contactTitle}</td>
                            <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>

    </>
    )
}

export default SupplierTable