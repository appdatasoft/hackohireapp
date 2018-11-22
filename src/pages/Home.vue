<template>
  <b-container> 
    <header class="masthead">
      <div class="container h-100">
        <div class="row h-100">
        
          <div class="col-lg-7 my-auto">
            <div class="header-content mx-auto">
              <h1 class="mb-5">Connect with talent that is right <span class="fit-content">fit</span> for your innovation</h1>
              <!-- <a href="/signIn" class="btn btn-xl main-bt js-scroll-trigger">Attend "Tech Jobs Pitch Social" Event</a> -->
              <a href="https://www.eventbrite.com/e/tech-jobs-pitch-social-la-tickets-49499347882" class="btn btn-xl main-bt js-scroll-trigger">Attend "Tech Jobs Pitch Social" Event</a>
            </div>
          </div>
          <div class="col-lg-5 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="../assets/hackathon_team.jpg" class="img-fluid" alt="">
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <section class="rightfit">
      <div class="cta-content">
        <div class="container">
          <h2>Stop waiting.<br>Start hack-o-hiring.</h2>
          <a href="/signIn" class="btn btn-outline btn-xl js-scroll-trigger">Request Pilot!</a>
        </div>
      </div>
      <div class="overlay"></div>
    </section>
    
    <section class="rightfit bg-primary text-center" id="download">
      <div class="container">
        <div class="row">
          <div class="col-md-8 mx-auto">
            <h2 class="section-heading">Dont just fill an open position but fill it with perfect fit</h2>
            <p>Want to learn how to improve your current hiring practices?</p>
            <div class="badges">
               <a href="/signIn" class="btn btn-outline btn-xl js-scroll-trigger">Request Pilot</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="features" id="features">
      <div class="container">
        <div class="section-heading text-center">
          <h2>Skill Set + Cultural Fit</h2>
          <p class="text-muted">Cut down the hiring time</p>
          <hr>
        </div>
        <div class="row">
          <div class="col-lg-4 my-auto">
            <div class="device-container">
              <div class="device-mockup iphone6_plus portrait white">
                <div class="device">
                  <div class="screen">
                    <!-- Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! -->
                    <img src="../../img/resume.jpg" class="img-fluid" alt="">
                  </div>
                  <div class="button">
                    <!-- You can hook the "home button" to some JavaScript events or just remove it -->
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8 my-auto">
            <div class="container-fluid">
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-screen-smartphone text-primary"></i>
                    <h3>Post Jobs</h3>
                    <p class="text-muted">Create and Post Job Description with full details</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-camera text-primary"></i>
                    <h3>Select Candidates</h3>
                    <p class="text-muted">Shortlist candidates that apply for the job</p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-present text-primary"></i>
                    <h3>Host Interview Hackathon</h3>
                    <p class="text-muted">Select the date for the interview hackathon and send invites to the shortlist candidates</p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="feature-item">
                    <i class="icon-lock-open text-primary"></i>
                    <h3>Hire </h3>
                    <p class="text-muted">Follow the steps to access each candidate in one-on-one sessions, group sessions to evaluate both technical skills and cultural fit </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="cta">
      <div class="cta-content">
        <div class="container">
          <h2>Stop waiting.<br>Start hack-o-hiring.</h2>
          <a href="/signIn" class="btn btn-outline btn-xl js-scroll-trigger">Request Pilot!</a>
        </div>
      </div>
      <div class="overlay"></div>
    </section>

    <section class="contact bg-primary" id="contact">
      <div class="container">
        <h2>We
          <i class="fa fa-heart"></i>
          new friends!</h2>
        <ul class="list-inline list-social">
          <li class="list-inline-item social-twitter">
            <a href="https://twitter.com/@hackohire">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li class="list-inline-item social-facebook">
            <a href="https://www.facebook.com/groups/2004861469565107/">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
 </b-container>
</template>
<link src='../css/detectify.css'/>
<link src='../../vendor/bootstrap/css/bootstrap.min.css'/>
<link src='../../vendor/font-awesome/css/font-awesome.min.css'/>
<link src='../../vendor/simple-line-icons/css/simple-line-icons.css'/>
<link src='../../css/lato.css'/>
<link src='../../css/multi.css'/>
<link src='../../css/cataraman.css'/>
<link src='../../device-mockups/device-mockups.min.css'/>
<link src='../../css/new-age.min.css'/>

<style>
.fit-content{
    color: #f9f900;
    font-weight: 600;
    text-decoration: underline;
  }
  .main-bt{
    border-radius: 2.25rem;
    font-size:13px !important;
    color: #d72534 !important;
    text-shadow: 0px 0px 1px black;
    background-color: white;
    font-weight: bolder !important;
    box-shadow: 0px 2px 2px black;
}
  .main-bt:hover{
    background-color: #fbb813;
    color: #000000c9 !important;
    //clip-path: polygon(100% 0, 95% 50%, 100% 100%, 0% 100%, 0% 50%, 0% 0%);
    font-weight:bold;
    border-radius: 2.25rem;
    box-shadow: 0px 1px 2px white;

  }

</style>
<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState({
            user: state => state.auth.user,
        })
    }
}
</script>

