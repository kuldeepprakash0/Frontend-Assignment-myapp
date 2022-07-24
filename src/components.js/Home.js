import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Spinner from './Spinner'

export default function Home() {
  const [loading, setLoading] = useState(true)
    const [user,setUser] = useState('')
    useEffect(()=>{
      async function userData(){
        const userResult = await axios.get('https://api.github.com/users/kuldeepprakash0')
        setUser(userResult.data)
        setLoading(false)
      }
      userData()
    },[user])
   
    const [repo,setRepo] = useState('')
    useEffect(()=>{
      async function repoData(){
        const repoResult = await axios.get('https://api.github.com/repos/kuldeepprakash0/Frontend-Assignment-myapp')
        setRepo(repoResult.data)
      }
      repoData()
    },[repo])
  return (
    <>
            {loading && <Spinner/>}
       
            <div className="container" style={{padding:'20px 0px'}}>
                <div className="row" >
                    <div className="col-md-6" style={{display:'flex',justifyContent:'center'}}>
                     <Card  avatar_url={user.avatar_url} userName={user.name} html_url={user.html_url} follower={user.followers} following={user.following} repo={user.public_repos}/>

                    </div>

                    <div className="col-md-6" style={{display:'flex',justifyContent:'center'}}>

                    <div className="card " style={{width: '21rem',boxShadow:'2px 2px 3px 2px gray'}}>
                        <div className="card-body">
                            <h5 className="card-title">Repo: <span class="badge text-bg-success">{repo.name}</span></h5>
                            <p className="card-text"><span class="badge text-bg-success">Description:</span> {repo.description}</p>
                            <p className="card-text"><span class="badge text-bg-success">default_branch:</span> {repo.default_branch}</p>
                            <p className="card-text"><span class="badge text-bg-success">visibility:</span> {repo.visibility}</p>
                            <p className="card-text"><span class="badge text-bg-success">created_at:</span> {repo.created_at}</p>
                            <p className="card-text"><span class="badge text-bg-success">updated_at:</span> {repo.updated_at}</p>
                            <p className="card-text"><span class="badge text-bg-success">pushed_at:</span> {repo.pushed_at}</p>
                            <a href={repo.html_url} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm">Go to github</a>
                        </div>
                    </div>
                    </div>
                </div>
            
            </div> 

             
        
              
        
    </>
  )
}
