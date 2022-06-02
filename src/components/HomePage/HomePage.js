import React from 'react';
import "../HomePage/HomePage.Style.css";

const HomePage = () => {
  return (
    <div className="homepage">
        <div className="searchwrapper">
          {/* <label for="search">Search for a country..</label> */}
          <input type="search" id="searchbox" placeholder=" Search for a country..." />
          <div className="dropdown">
            <div className="select">
              <span className="selected">Filter by region</span>
               <div className="caret"></div>
            </div>
            <ul className="menu">
              <li>Africa</li>
              <li>America</li>
              <li>Asia</li>
              <li>Europe</li>
              <li>Oceania</li>
            </ul>

          </div>
        </div>
    </div>
  )
}

export default HomePage