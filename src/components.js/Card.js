import React from 'react'

export default function Card(props) {
  let {avatar_url,userName,html_url,followers,following,public_repos} = props;
  return (
    <>
      <div className="container my-3" style={{display: 'flex',justifyContent:'center'}}>
              <div className="card " style={{width: '18rem',boxShadow:'2px 2px 3px 2px gray'}}>
                <img src={avatar_url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h5 className="card-title">{userName}</h5>
                    <p className="card-text">follower: <span class="badge text-bg-success">'{followers}'</span>
                      following:<span class="badge text-bg-success">'{following}'</span> Repo:
                     <span class="badge text-bg-success">'{public_repos}'</span></p>
                    <a href={html_url} target='_blank' rel="noreferrer" className="btn btn-primary btn-sm">Go to github</a>
                </div>
              </div>
      </div>
    </>
  )
}
