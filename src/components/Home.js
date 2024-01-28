import React from 'react'

const Home = () => {
  return (
    <>
    <div className='home-page'>
          <div className='home-div'>
            <p className='pt-5'>WELCOME</p>
            <h1>I am MERN DEVELOPER</h1>

          </div>
    </div>

    <div className='carousel_data'>
  
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="..." alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Second slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="..." alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
</div>
   
  <div className='card_make'>
    <div className='list_card'>
      <ul>
        <li>
            card1
        </li>
        <li>
          card2
        </li>
        <li>
          card3
        </li>
        <li>
          card4
        </li>
      </ul>

    </div>

  </div>


    <footer>
    <div className='footer'>
       <div className='wave'>
         <div className='wave' id='wave1'></div>
         <div className='wave' id='wave2'></div>
         <div className='wave' id='wave3'></div>
         <div className='wave' id='wave4'></div>

       </div>
        <div className='social-icon'>
          <ul>
            <li><a href='#'><i class="zmdi zmdi-github-alt"></i></a></li>
            <li><a href='#'><i class="zmdi zmdi-linkedin"></i></a></li>
            <li><a href='#'><i class="zmdi zmdi-instagram"></i></a></li>
            <li><a href='#'><i class="zmdi zmdi-twitter"></i></a></li>
            <li><a href='#'><i class="zmdi zmdi-google-maps"></i></a></li>
            
          </ul>
          <ul className='menu'>
            <li><a href='#'>Home</a></li>
            <li><a href='about'>About</a></li>
            <li><a href='contact'>Contact</a></li>
            <li><a href='register'>Signup</a></li>
            <li><a href='signin'>Login</a></li>
            
          </ul>
        </div>
    </div>
    </footer>
    </>
  )
}

export default Home
