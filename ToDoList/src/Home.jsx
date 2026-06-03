import { useState } from 'react'

function Home() {

    const [tasks, setTask] = useState([])

    return (
        <div className="home">
            <h1>Todo List</h1>
            {task.length === 0 ? (
                <p>You have no tasks</p>
            ) : (
                tasks.map(todo => (
                    <div>
                        {todo}
                    </div>
                ))
            )}
        </div>
    )
}

export default Home