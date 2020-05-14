import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div id="title">
        <p className="font-sans text-lg text-orange-400 text-center">Dashboard</p>{' '}
      </div>
      <Link to="/dashboard/main">
        <p className="font-sans text-lg text-red-400 text-center">Go To Main</p>
      </Link>
      <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF">
        <p className="font-sans text-lg text-red-400 text-center">Go To Profile</p>
      </Link>
    </div>
  )
}

Dashboard.propTypes = {}

export default React.memo(Dashboard)
