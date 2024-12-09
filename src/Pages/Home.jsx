import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from '../app/slices/userSlice'

const Home = () => {
  const [formInput, setFormInput] = useState({
    name:'',
    age:'',
    email:'',
    contact:""
  })

  const dispatch = useDispatch()

  const handleInputChange = e => {
    const {name,value} = e.target
    console.log({name,value})

    setFormInput(cur => {
     return {
      ...cur,
      [name]: value
     }
    })
  }

  const addUser = e => {
    e.preventDefault();

    dispatch(setUsers(formInput))

  }

  return (
    <div className='[&_input]:border-2 flex justify-center'>
      <form className='gap-2'>
        <label>Name</label>
        <br />
        <input type="text" className='p-1 w-[232px]' name='name' value={formInput.name} onChange={handleInputChange}/>
        <br />
        <label>Age</label>
        <br />
        <input type="number" name='age' value={formInput.age} onChange={handleInputChange}/>
        <br />
        <label>Email</label>
        <br />
        <input type="text" name='email' value={formInput.email} onChange={handleInputChange}/>
        <br />
        <label>Contact</label>
        <br />
        <input type="number" name='contact' value={formInput.contact} onChange={handleInputChange}/>
        <br />
        <button onClick={addUser} className='border-2 px-4 py-3 text-white bg-green-500 mt-3 hover:opacity-90'>add</button>
      </form>
    </div>
  )
}

export default Home