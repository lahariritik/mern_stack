import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {

 const navigate=useNavigate();
 const [email,setEmail]=useState('');
 const [password,setPassword]=useState('');

 const loginuser= async (e)=>{
   e.preventDefault();

   const res=await fetch('/signin',{
    method :"POST",
    headers:{
         "Content-Type":"application/json"
    },body:JSON.stringify({
        email,
        password
    })
   });

   const data=res.json();
   if(res.status === 400 || !data){
    window.alert("INVALID");
   }
   else{
    window.alert("LOGIN SUCCESFUL");
    navigate('/');
   }

 }


  return (
    <div>
       <section className='signin'>
      <div className='form'>
        <div className='content'>
        <div className='signin-image'> 
               <figure>
                <img src='' alt='image'></img>
               </figure>
               <a href='/signup'>create an account</a>
             </div>

           <div className='signin-form'>
             <h2 className='form-title1'>Signin</h2>
             <form  method="POST" className='register-form' id='register-form'>
                 
                 <div className='iop'>
                 <div>
                 <label htmlFor='email'>
                 <i class="zmdi zmdi-account"></i>
                 </label>
                 <input type='text' name='email' id='email' autoComplete='off' 
                 value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='email@gnm'></input>
                 </div>
                 <div>
                 <label htmlFor='password'>
                 <i class="zmdi zmdi-account"></i>
                 </label>
                 <input type='text' name='password' id='password' autoComplete='off'
                 value={password} onChange={(e)=> setPassword(e.target.value)}  placeholder='your password'></input>
                 </div>
                 <div>
                 </div>
                  <div className='button'>
                    <input type="submit" name='signin' id='signin' className='form-submit' value="Log In"
                     onClick={loginuser}></input>
                  </div>
                 </div>
            
             </form>

             </div>
            
           
        </div>
      </div>
     </section>
    </div>
  )
}

export default Signin
