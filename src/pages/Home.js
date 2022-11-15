import React,{useState} from 'react'
import { getUsers } from '../context/GithubContext/actions'
const Home = () => {

  const [text,setText] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    if(!text){
      console.log('search field is empty')
    }else {
      const users = await getUsers()
      console.log(users)
      setText('')
    }
  }
  const handleChange = (e) => {
    setText(e.target.value)
  }

  return (
    <div className="flex m-6">
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <input type="text" placeholder='Search' className="p-4 rounded-l-lg" onChange={handleChange} value={text}/>
          <button className="bg-gray-500 p-4 rounded-r-lg" type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Home