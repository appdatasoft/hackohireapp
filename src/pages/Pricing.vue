<template>
  <b-container> 
    
<b>
      <section class="section__pricing-list">
         <div class="pricing-list">
            <div class="pricing-list__column pricing-list__column--standard">
               <div class="pricing-list__column__head">
                  <div class="plan-name plan-name">
                     <h2>Starter</h2>
                  </div>
                  <div class="plan-cost">
                     <div class="plan-pricing">
                        <span class="currency">
                                   </span>
                        <span class="price">
                        Free           </span>
                        <span class="per-target"></span>
                     </div>
                     <div class="plan-fine-print">
                        <p>

                        </p>
                     </div>
                  </div>
                  <div class="plan-button">
                     <a href="" id="create-account-standard" class="btn btn--full btn--filled-blue">Start your free trial</a>
                  </div>
               </div>
               <div class="pricing-list__column__body">
                  <div class="included-in-plan">
                     <p><strong>Starter</strong> includes:</p>
                  </div>
                  <div class="plan-feature-list">
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Unlimited Hackathons per month</h4>
                           <!-- <p>Invite up to 3 team members.</p> -->
                        </div>
                     </div>
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Transaction fee</h4>
                           <p>20% of the total spending</p>
                        </div>
                     </div>
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>No. of resumes</h4>
                           <p><10</p>
                        </div>
                     </div>
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Team licenses</h4>
                           <p>Free for 3 and $7/additional team member license</p>
                        </div>
                     </div>
                     <!-- <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Export reports</h4>
                           <p>Export the results from your latest scan (PDF, XML, JSON etc).</p>
                        </div>
                     </div>
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Basic API integration</h4>
                           <p>Start, stop and check status of scans.</p>
                        </div>
                     </div> -->
                     <!-- <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>2FA</h4>
                           <p>Two-factor authentication for all users in the team.</p>
                        </div>
                     </div> -->
                  </div>
               </div>
               <!-- /pricing-list__column__body -->
               <div class="list-trigger">
                  <span>Included features</span>
                  <img src="/static/gfx/images/website/down_arrow.svg" alt="directional arrow">
               </div>
            </div>
            <div class="pricing-list__column pricing-list__column--professional couldwemakethispop">
               <div class="pricing-list__column__head">
                  <div class="plan-name plan-name">
                     <h2>SMB</h2>
                  </div>
                  <div class="plan-cost">
                     <div class="plan-pricing">
                        <span class="currency">
                        $            </span>
                        <span class="price">
                        79            </span>
                        <span class="per-target">/ month</span>
                     </div>
                     <div class="plan-fine-print">
                        <!-- <p>
                           Per profile billed annually or $105 month-to-month.
                        </p> -->
                     </div>
                  </div>
                  <a href="" id="create-account-professional" class="btn btn--full btn--filled-blue">Start your free trial</a>
                  <div class="plan-button">
                  </div>
               </div>
               <div class="pricing-list__column__body">
                  <div class="included-in-plan">
                     <p><strong>SMB</strong> includes:</p>
                  </div>
                  <div class="plan-feature-list">
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_blue_light.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Unlimited Hackathons per month</h4>
                           <!-- <p>Invite up to 10 team members.</p> -->
                        </div>
                     </div>
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_blue_light.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Transaction fee</h4>
                           <p>10%</p>
                        </div>
                     </div>
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_blue_light.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>No. of resumes</h4>
                           <p>10-199</p>
                        </div>
                     </div>
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_blue_light.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Team licences</h4>
                           <p>Free for 9 and $7/additional team member license</p>
                        </div>
                     </div>
                     <!-- <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_blue_light.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Premium support</h4>
                           <p>Answer within 48 hours.</p>
                        </div>
                     </div> -->
                  </div>
               </div>
               <!-- /pricing-list__column__body -->
               <div class="list-trigger">
                  <span>Included features</span>
                  <img src="/static/gfx/images/website/down_arrow.svg" alt="directional arrow">
               </div>
            </div>
            <div class="pricing-list__column pricing-list__column--enterprise">
               <div class="pricing-list__column__head">
                  <div class="plan-name plan-name--enterprise">
                     <h2>Enterprise</h2>
                  </div>
                  <div class="plan-cost">
                     <div class="plan-pricing">
                        <span class="currency">
                        $            </span>
                        <span class="price">
                        199            </span>
                        <span class="per-target">/ month</span>
                     </div>
                     <div class="plan-fine-print">
                        <!-- <p>
                           Per profile billed annually or $105 month-to-month.
                        </p> -->
                     </div>
                  </div>
                  <div class="plan-button">
                    <a href="" id="create-account-professional" class="btn btn--full btn--filled-blue">Start your free trial</a>
                  </div>
               </div>
               <div class="pricing-list__column__body">
                  <div class="included-in-plan">
                     <div>
                        <p><strong>Enterprise</strong> includes:</p>
                     </div>
                  </div>
                  <div class="plan-feature-list">
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Unlimited Hackathons per month</h4>
                        </div>
                     </div>
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Transaction fee</h4>
                           <p>5%</p>
                        </div>
                     </div>
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>No. of resumes</h4>
                           <p>200 - 1000</p>
                        </div>
                     </div>
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Team licenses</h4>
                           <p>Free for 40 and $7/additional team member license</p>
                        </div>
                     </div>
                     <!-- <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Customized billing</h4>
                           <p>All billing options available.</p>
                        </div>
                     </div>
                     <div class="plan-feature-list__item">
                        <div class="plan-feature-list__item__icon">
                           <img src="../assets/checkmark_gray.svg" alt="checkmark">
                        </div>
                        <div class="plan-feature-list__item__content">
                           <h4>Dedicated Customer Success Manager</h4>
                           <p>
                              Structured pilot and team onboarding. Help with configuring. Proactive support and one-on-one live demos.
                           </p>
                        </div>
                     </div> -->
                  </div>
               </div>
               <div class="list-trigger list-trigger--enterprise">
                  <span>Included features</span>
                  <img src="/static/gfx/images/website/down_arrow.svg" alt="directional arrow">
               </div>
            </div>
         </div>
         <div class="full-comparison">
            <a href="/features" class="btn btn--dark btn--full">View a detailed comparison of our plans</a>
         </div>
      </section>
   </b>
     
   </b-container>
      
        
                  
            
               
        
    


     
</template>

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
