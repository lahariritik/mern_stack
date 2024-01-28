import React ,{useState} from 'react';
import { useNavigate } from 'react-router-dom';


const Register = () => {
  const navigate=useNavigate();
 const [user,setUser]=useState({
  name:"",email:"",phone:"",work:"",password:"",cpassword:""
 });

 let name ,value;
 const handleInputs=(e)=>{
  console.log(e);
  name=e.target.name;
  value=e.target.value; 
  setUser({... user,[name]:value});
 }
//by this we post the data to server by clicking register button
 const PostData=async (e)=>{
      e.preventDefault();
      const {name,email,phone,work,password,cpassword}=user;
      const res=await fetch("/register",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          name, email, phone, work, password, cpassword
        })
      });
      console.log("err",res);

      const data=await res.json();
      console.log(data);
      if(data.status === 422 || !data)
      {
        window.alert("Invalid registration");
        console.log("invalid register")
      }
      else{
        window.alert("succesfull registration");
        console.log("succesfull register");
        navigate('/signin');
      }

 }

  return (
    <>
     <section className='signup'>
      <div className='form'>
        <div className='content'>
           <div className='signup-form'>
             <h2 className='form-title'>Signup</h2>
             <form method="POST" className='register-form' id='register-form'>
                <div>
                 <label htmlFor='name'>
                 <i class="zmdi zmdi-account"></i>
                 </label>
                 <input type='text' name='name' id='name' autoComplete='off' placeholder='your name' 
                    value={user.name} onChange={handleInputs}></input>
                 </div>
                 <div>
                 <label htmlFor='email'>
                 <i class="zmdi zmdi-account"></i>
                 </label>
                 <input type='text' name='email' id='email' autoComplete='off'
                    value={user.email} onChange={handleInputs} placeholder='email@gnm'></input>
                 </div>
                 <div>
                 <label htmlFor='phone'>
                 <i class="zmdi zmdi-account"></i>
                 </label>
                 <input type='text' name='phone' id='phone' autoComplete='off' 
                  value={user.phone} onChange={handleInputs} placeholder='+91 432234111'></input>
                 </div>
                 <div>
                 <label htmlFor='work'>
                 <i class="zmdi zmdi-account"></i>
                 </label>
                 <input type='text' name='work' id='name' autoComplete='off' 
                  value={user.work} onChange={handleInputs} placeholder='ex: App developer'></input>
                 </div>
                 <div>
                 <label htmlFor='password'>
                 <i class="zmdi zmdi-account"></i>
                 </label>
                 <input type='text' name='password' id='password' autoComplete='off'
                  value={user.password} onChange={handleInputs}  placeholder='your password'></input>
                 </div>
                 <div>
                 <label htmlFor='cpassword'>
                 <i class="zmdi zmdi-account"></i>
                 </label>
                 <input type='text' name='cpassword' id='cpassword' autoComplete='off' 
                  value={user.cpassword} onChange={handleInputs} placeholder='your cpassword'></input>
                 </div>

                 <div>
                  <div className='button1'>
                    <input type="submit" name='signup' id='signup' className='form-submit' value="register" 
                      onClick={PostData}></input>
                  </div>
                 </div>
            
             </form>

             </div>
             <div>
               <figure>
                <img src='' alt='image'></img>
               </figure>
               <a href='/signin'>already signup</a>
             </div>

           
        </div>
      </div>
     </section>
    </>
  )
}

export default Register
