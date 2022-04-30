import { Component } from 'react'

class Todo extends Component {
  constructor(props){
    super(props)

    this.state = {
      todoList: [
        'Study ReactJS',
        'Study Algorithms',
        'Clean House'
      ],
      userInput: ''
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleAddTodo = this.handleAddTodo.bind(this)
  }

  //   const handleInput = (e) => {
  //     setUserInput(e.target.value)
  //   }

  handleInput(e) {
    // this.setState({ ...this.state, userInput: e.target.value })
    this.setState((prevState) => ({
      ...prevState, userInput: e.target.value
    }))
  }

  //   handleAddTodo = () => {
  //     setTodoList((prev) => [...prev, userInput])
  //     setUserInput('')
  //   }

  handleAddTodo() {
    this.setState((prevState) => ({
      ...prevState, 
      todoList: [...prevState.todoList, prevState.userInput]
    }), () => this.handleClearInput())
  }

  handleClearInput = () => {
    this.setState((prevState) => ({
      ...prevState, userInput: ''
    }))
  }

  //   handleDeleteTodo = (index) => {
  //     const newTodoList = [...todoList]
  //     newTodoList.splice(index, 1)
  //     setTodoList(newTodoList)
  //   }

  handleDeleteTodo = (index) => {
    const newTodoList = [...this.state.todoList]
    newTodoList.splice(index, 1)
    this.setState((prevState) => ({
      ...prevState, todoList: newTodoList
    }))
  }

  render() {
    const { userInput, todoList } = this.state
    return (
      <div>
        <div className='flex w-80 header'>
          <input
            value={userInput}
            onChange={(e) => this.handleInput(e)}
            className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
          />
          <button 
            onClick={this.handleAddTodo}
            className='px-4 ml-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
                                    Add Todo
          </button>
        </div>
        <ul className='flex flex-col'>
          {todoList.map((todo, index) => 
            <li key={todo}>
              <span>{todo}</span>
              <span 
                className='ml-4 transition-all delay-75 cursor-pointer hover:text-red-600'
                onClick={() => this.handleDeleteTodo(index)}
              >X</span>
            </li>)}
        </ul>
      </div>
    )
  }
}

export default Todo