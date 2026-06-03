import { useState } from 'react'

function Home() {

    const [task, setTask] = useState([])

    return (
        <div className="home">
            <h1>Todo List</h1>
            {task.length === 0 ? (
                <p>You have no tasks</p>
            ) : (
                task.map(todo => (
                    <div>
                        {todo}
                    </div>
                ))
            )}
        </div>
    )
}

export default Home