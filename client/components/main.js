import React from 'react'

import { Link } from 'react-router-dom'
import Head from './head'

const Main = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">
        <h4 className="font-sans text-lg text-orange-400 text-center">Main</h4>
      </div>
      <div>
        <Link to="/dashboard/profile/7ffsg-8trhfg-54bhhg-b70c-egfjiykjvF">
          <h4 className="font-sans text-lg text-red-400 text-center">Go To Profile</h4>
        </Link>
        <Link to="/dashboard">
          <h4 className="font-sans text-lg text-red-400 text-center">Go To Root</h4>
        </Link>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
