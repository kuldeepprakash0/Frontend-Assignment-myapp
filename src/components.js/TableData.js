import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Spinner from './Spinner';

export default function TableData() {

  const [loading, setLoading] = useState(true)
  const [apiData, setApidata] = useState('')
  useEffect(()=>{
    async function callApi(){
      const apiResult = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setApidata(apiResult.data)
      setLoading(false)
    }
    callApi()
    
  },[apiData])
  return (
    <>
        <div className="container my-3">
          <div className="container">
            <p style={{textAlign:'center',backgroundColor:'green',color:'White',border:'2px solid white',padding:'2px 0px',borderRadius:'10px'}}> JSONPlaceholder is a free online REST API that you can use whenever you need some fake data. this is a fake api data for 100 post</p>
          </div>
          {loading && <Spinner/>}
        <table className="table">
            <thead className="table-danger ">
                <tr>
                <th className='rounded' scope="col">ID</th>
                <th className='rounded' scope="col">Title</th>
                <th className='rounded' scope="col">Body</th>
                </tr>
            </thead>
            {
              apiData &&
              (apiData.map((apiDetails, index)=>{
                  return(
              <tbody key={index}>
                <tr>
                <td className="table-primary rounded">{apiDetails.id}</td>
                <td className="table-warning rounded">{apiDetails.title}</td>
                <td className="table-success rounded">{apiDetails.body}</td>
                </tr>
            </tbody>

                  )
              }))
            }
            
            </table>
        </div>
    </>
  )
}
