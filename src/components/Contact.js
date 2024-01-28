import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='contact_info'>
         <div className='container-fluid'>
            <div className='col-lg-10 offset-lg-1'>

              <div className='contact_info_title'>
               phone 
                 +91 1111 543 2198 
              </div>
            </div>

              <div className='contact_info_title'>
               Email
              </div>
              <div className='contact_info_text'>
                 abc@gmail.com
          

          </div>
          <div className='col-lg-10 offset-lg-1'>

              <div className='contact_info_title'>
               Address
            
                  NIT jsr
              </div>
          </div>

         </div>
         <div className='contact_form'>
           <form>
             <div>
               <input type='text' placeholder='your name ' required="true"/>
              
               <input type='email' placeholder='your email ' required="true"/>


               <input type='text' placeholder='your phone Number ' required="true"/>
              
              
              </div>
             <div className='contact_form_text'>
                  <textarea className='text_field' placeholder='message'></textarea>
             </div>
             <div className='contact_button'>
                  <button type='submit'>SEND MESSAGE</button>
             </div>

            </form>
         </div>
      </div>
    </>
  )
}

export default Contact
