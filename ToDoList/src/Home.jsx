import { useState, useEffect } from 'react'
import axios from 'axios'
import { BsCircleFill, BsFillTrashFill } from 'react-icons/bs'

function Home() {

    const [tasks, setTask] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get').then(result => setTask(result.data)).catch(err => console.log(err))
    }, [])

    return (
        <div className="home">

            {tasks.length === 0 ? (
                <p>You have no tasks</p>
            ) : (
                tasks.map(todo => (

                    <div className='task'>
                        <div className='checkbox'>
                            <BsCircleFill className='icon'></BsCircleFill>
                            <p> {todo.task}</p>
                        </div>
                        <div>
                            <span><BsFillTrashFill className='icon'></BsFillTrashFill></span>
                        </div>



                    </div>
                ))
            )}
        </div>
    )
}

export default Home