import React from 'react'

const About = () => {
  return (
    <>
     <div className='profile'>
        <form method=''>
          <div className='row'>
            <div className='about-image'>
              <img src='https://gurugramproperty.in/static/img/about.png' alt='image' width="40%" height="10%"></img>
            </div>
            <div className='profile_head'>
              <h5>ABA</h5>
              <h6>dev</h6>
              <p className='profile-rating'>Rank<span>1/10</span></p>
              <ul className='nav-tabs' role='tablist'>
                <li className='nav-item1'>
                  <a className='nav-link' id='home-tab' data-toggle='tab' href='#home' role="tab">About</a>
                </li>
                <li className='nav-item1'>
                  <a className='nav-link' id='home-tab' data-toggle='tab' href='#profile' role="tab">Timeline</a>
                </li>

              </ul>

            </div>
          </div>
        </form>
     </div>

    </>
  )
}

export default About
