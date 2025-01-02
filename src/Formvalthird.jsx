import React, { useState } from 'react'

const Formvalthird = () => {



    const [errorFields, setErrorFields] = useState({
        firstName:false,
        email:false,
        gender:false,
        language:false,
        DOB:false,
        country:false,
    })

    const [fields, setFields] = useState({
        firstName:"",
        email:"",
        gender:"",
        language:[],
        DOB:"",
        country:"",

    })


    const handleError = (event)=>{
        if(fields.firstName === ''){
            setErrorFields(prev => ({
                ...prev,
                firstName:true
            }))
            return false
        }
        
        else{
            setErrorFields(prev => ({
                ...prev,
                firstName:false
            }))
            return true
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        console.log(fields);
        handleError()
    }

const handleChange =(event)=>{
    setFields(prev => ({
        ...prev,[event.target.name]:event.target.value
    }))
    
    
}



  return (
    <div>
        <form action="" className='flex flex-col gap-10' onSubmit={handleSubmit}>

            <div className="firstname">
                {errorFields.firstName && <p className='text-red-500'>First Name is required</p>}
                <label htmlFor="firstName">First Name</label>
                <input type="text" id='firstName' name='firstName' onChange={handleChange}/>
            </div>
            <div className="email">
            {errorFields.email && <p className='text-red-500'>Email is required</p>}
                <label htmlFor="email">Email</label>
                <input type="email"  name='email' id='email' onChange={handleChange}/>
            </div>
            <div className="gender">
            {errorFields.gender && <p className='text-red-500'>Gender is required</p>}
                <label htmlFor="gender">Gender</label>
                <label htmlFor="male">male</label>
                <input type="radio"  name='gender' id='male' value="male" onChange={handleChange}/>
                <label htmlFor="female">female</label>
                <input type="radio"  name='gender' id='female' value="female" onChange={handleChange}/>
            </div>
            <div className="language">
           {errorFields.language &&  <p className='text-red-500'>Language is required</p>}
                <label htmlFor="">language</label>
                <label htmlFor="javascript">Javascript</label>
                <input type="checkbox" name='language' id='javascript' value="javascript" onChange={handleChange}/>
                <label htmlFor="html">html</label>
                <input type="checkbox" name='language' id='html' value="html" onChange={handleChange} />
                <label htmlFor="css">css</label>
                <input type="checkbox" name='language' id='css' value="css" onChange={handleChange}/>
                <label htmlFor="php">php</label>
                <input type="checkbox" name='language' id='php' value="php" onChange={handleChange}/>
            </div>
            <div className="dateOfBirth">
            {errorFields.DOB && <p className='text-red-500'>DOB is required</p>}
                <label htmlFor="DOB">DOB</label>
                <input type="date"  name='DOB' id='DOB' onChange={handleChange}/>
            </div>
            <div className="Country">
            {errorFields.country && <p className='text-red-500'>Country is required</p>}
                <label htmlFor="country">Country</label>
                <select name="country" id="country" onChange={handleChange}>
                    <option value="">Select</option>
                    <option value="India">India</option>
                    <option value="UAE">UAE</option>
                    <option value="Germany">Germany</option>
                    <option value="USA">USA</option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Formvalthird