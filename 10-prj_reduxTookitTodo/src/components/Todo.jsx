import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function Todo() {

    const todos = useSelector(state => state.todos)

    const dispatch = useDispatch();

    console.log(todos)

    const handleDelete = (id) => {
        dispatch(removeTodo(id))

    }

    return (
        <div>
            <ul className="space-y-3 mt-12">
                {todos.map(todo => (
                    <li key={todo.id} className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out flex justify-between items-center">
                        {todo.text}
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                            onClick={() => handleDelete(todo.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo