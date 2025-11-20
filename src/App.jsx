import { useState } from 'react'
import "./assets/App.css"
import ToDoItem from './ToDoItem';

function App() {

  let [addedText, setAddedText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newText = event.target.value;
    setAddedText(newText);
  }
  function addItem(event) {
    setItems(prevValue => {
      return [addedText, ...prevValue]
    })

    setAddedText("");
    event.preventDefault();
  }
  
  function getItems(item, index){
    return <ToDoItem text={item} key={index} id={index} onDelete={deleteItem}/>
  }

  function deleteItem(id){
    setItems(prevValue => prevValue.filter((item, index)=> index !== id))
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-do</h1>
      </div>
      <form>
        <input onChange={handleChange} type="text" value={addedText} />
        <button onClick={addItem}>
          Add
        </button>
      </form>
      <ul>
        {items.map(getItems)}
      </ul>
    </div>
  )
}

export default App
