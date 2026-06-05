import Create from './Create.jsx'
import Home from './Home.jsx'
import './App.css'

function App() {
  return (
    <div className="app-card">
      <div className="app-title">
        <span className="title-dot"></span>
        <h1>Todo List</h1>
      </div>
      <Create />
      <Home />
    </div>
  )
}

export default App
