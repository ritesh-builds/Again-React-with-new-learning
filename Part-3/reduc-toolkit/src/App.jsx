import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

function App() {

  return (
    <div className="w-full min-h-screen bg-gray-900 py-10">
      <div className="w-full max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Todo App
        </h1>

        <AddTodo/>
        <Todos />
      </div>
    </div>
  )
}

export default App