import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Spinner from './Spinner'

export default function GithubUsers() {
  const [loading, setLoading] = useState(true)
  const [users,setUsers] = useState('')
  useEffect(()=>{
    async function userApi(){
      const usersResult = await axios.get('https://api.github.com/users')
      setUsers(usersResult.data)
      setLoading(false)
    }
    userApi()
  },[users])
  return (
    <>
    {loading && <Spinner/>}
    <div className="row">
    {
        users && 
        (users.map((element, index)=>{
          return (
            <div key={index} className="col-md-4" >
              <Card  avatar_url={element.avatar_url} userName={element.login} html_url={element.html_url} follower={element.followers} following={element.following} repo={element.public_repos}/>
            </div>
          )
        }))
      }
    </div>
      
      
    </>
  )
}
