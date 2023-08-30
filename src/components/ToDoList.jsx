import React, { useState } from 'react';
import './ToDoList.css';

const TodoList = () => {
  const [todos, setTodos] = useState(["Buy groceries", "Clean the house", "Walk the dog"]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [newTodo, setNewTodo] = useState('');

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const handleAddTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const handleRemoveTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
    setSelectedItemIndex(null);
  };

  return (
    <div className="todo-list-container">
      <div className="todo-list-wrapper">
        <h2>To-Do List</h2>
        {todos.length === 0 ? <p>No to-dos available.</p> : (
          todos.map((todo, index) => (
            <div
              className={`todo-item ${index === selectedItemIndex ? "active" : ""}`}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              {todo}
              <button onClick={() => handleRemoveTodo(index)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <div className="add-todo-wrapper">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add New Todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
      </div>
    </div>
  );
};

export default TodoList;


// import React, { useState } from 'react';

// const NewTodoList = () => {
//   const [todos, setTodos] = useState(["Buy groceries", "Clean the house", "Walk the dog"]);
//   const [selectedItemIndex, setSelectedItemIndex] = useState(null);
//   const [newTodo, setNewTodo] = useState('');

//   const handleItemClick = (index) => {
//     setSelectedItemIndex(index);
//   };

//   const handleAddTodo = () => {
//     if (newTodo) {
//       setTodos([...todos, newTodo]);
//       setNewTodo('');
//     }
//   };

//   const handleRemoveTodo = (index) => {
//     const updatedTodos = todos.filter((_, i) => i !== index);
//     setTodos(updatedTodos);
//     setSelectedItemIndex(null);
//   };

//   return (
//     <div>
//       <h2>To-Do List</h2>
//       <div className="row">
//         <div className="col-md-6">
//           <ul className="list-group">
//             {todos.map((todo, index) => (
//               <li
//                 className={`list-group-item ${index === selectedItemIndex ? "active" : ""}`}
//                 key={index}
//                 onClick={() => handleItemClick(index)}
//               >
//                 {todo}
//                 <button
//                   className="btn btn-sm btn-danger float-right ml-6"
//                   onClick={() => handleRemoveTodo(index)}
//                 >
//                   Remove
//                 </button>
//               </li>
//             ))}
//           </ul>
//           {todos.length === 0 && <p>No to-dos available.</p>}
//         </div>
//         <div className="col-md-6">
//           <div className="form-group">
//             <label>Add New To do</label>
//             <input
//               type="text"
//               className="form-control"
//               value={newTodo}
//               onChange={(e) => setNewTodo(e.target.value)}
//             />
//           </div>
//           <button className="btn btn-primary" onClick={handleAddTodo}>
//             Add To do
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewTodoList;




// import React, { useState } from 'react';

// const TodoList = () => {
//   const todos = ["Buy groceries", "Clean the house", "Walk the dog"];
//   const [selectedItemIndex, setSelectedItemIndex] = useState(null);

//   const handleItemClick = (index) => {
//     setSelectedItemIndex(index);
//   };

//   return (
//     <div>
//       <h2>To-Do List</h2>
//       <ul className="list-group">
//         {todos.map((todo, index) => (
//           <li
//             className={`list-group-item ${index === selectedItemIndex ? "active" : ""}`}
//             key={index}
//             onClick={() => handleItemClick(index)}
//           >
//             {todo}
//           </li>
//         ))}
//       </ul>
//       {todos.length === 0 && <p>No to-dos available.</p>}
//     </div>
//   );
// };

// export default TodoList;
