import { useState, useEffect } from 'react'
import axios from 'axios'
import { BsCircleFill, BsFillTrashFill, BsFillCheckCircleFill } from 'react-icons/bs'

function Home() {

    const [tasks, setTask] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/get').then(result => setTask(result.data)).catch(err => console.log(err))
    }, [])

    const handleEdit = (id) => {
        axios.put('http://localhost:3001/update/' + id).then(result => location.reload()).catch(err => console.log(err))
    }

    const handleDelete = (id) => {
        axios.delete('http://localhost:3001/delete/' + id).then(result => location.reload()).catch(err => console.log(err))
    }


    return (
        <div className="home">

            {tasks.length === 0 ? (
                <p>You have no tasks</p>
            ) : (
                tasks.map(todo => (

                    <div className='task'>
                        <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                            {todo.done
                                ? <BsFillCheckCircleFill className='icon checked' />
                                : <BsCircleFill className='icon' />}

                            <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                        </div>
                        <div>
                            <span><BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)}></BsFillTrashFill></span>
                        </div>



                    </div>
                ))
            )}
        </div>
    )
}

export default Home