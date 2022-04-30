import { useState, Component } from 'react'

// const Todo = () => {

//     const [userInput, setUserInput] = useState('')
//     const [todoList, setTodoList] = useState([
//         'Study ReactJS',
//         'Study Algorithms',
//         'Clean House'
//     ])
    
//     const handleInput = (e) => {
//         setUserInput(e.target.value)
//     }

//     const handleAddTodo = () => {
//         setTodoList(prev => [...prev, userInput])
//         setUserInput('')
//     }

//     const handleDeleteTodo = (index) => {
//         const newTodoList = [...todoList]
//         newTodoList.splice(index, 1)
//         setTodoList(newTodoList)
//     }

//     return (
//         <div>
//             <div className='flex w-80 header'>
//                 <input
//                 value={userInput}
//                 onChange={(e) => handleInput(e)}
//                 className='w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline'
//                 />
//                 <button 
//                 onClick={handleAddTodo}
//                     className='px-4 ml-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700'>
//                         Add Todo
//                 </button>
//             </div>
//         <ul className='flex flex-col'>
//             {todoList.map((todo, index) => 
//             <li key={todo}>
//                 <span>{todo}</span>
//                 <span 
//                  className='ml-4 transition-all delay-75 cursor-pointer hover:text-red-600'
//                  onClick={() => handleDeleteTodo(index)}
//                 >X</span>
//             </li>)}
//         </ul>
//         </div>
//     )
// }


// export default Todo