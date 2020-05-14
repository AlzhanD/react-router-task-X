import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Head from './head'

const Profile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div id="title">
        <p className="font-sans text-lg text-orange-400 text-center">Profile</p>
      </div>
      <div id="username" className=" border-double border-4 border-orange-700">
        <h1 className="font-sans text-lg text-yellow-400 text-center">{user}</h1>
      </div>
      <div>
        <Link to="/dashboard">
          <p className="font-sans text-lg text-red-400 text-center">Go To Root</p>
        </Link>
        <Link to="/dashboard/main">
          <p className="font-sans text-lg text-red-400 text-center">Go To Main</p>
        </Link>
      </div>
    </div>
  )
}

Profile.propTypes = {}

export default Profile
