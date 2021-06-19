import { useState } from 'react'
import Buttons from './components/Buttons/Buttons'
import Input from './components/Input/Input'
import ToDoList from './components/ToDoList/ToDoList'

const App = () => {
  const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : []
  const [items, setItems] = useState(tasks)
  const [isActive, setIsActive] = useState(false)
  const [isCompleted, setIsCompleted] = useState(false)

  localStorage.setItem('tasks', JSON.stringify(items))

  // Add task
  const todoItemsHandler = item => {
    setItems(prevItems => [...prevItems, item])
  }

  // Update task item if the checkbox is checked or not
  const activeTodoHandler = item => {
    const findIndex = items.findIndex(listItem => listItem.name === item.name)
    const findItem = items[findIndex]
    const updateItem = {
      ...findItem,
      isChecked: item.isChecked,
    }
    const updatedItems = [...items]
    updatedItems[findIndex] = updateItem
    setItems(updatedItems)
  }

  // Display all tasks
  const showAllListHandler = () => {
    setIsCompleted(false)
    setIsActive(false)
  }

  // Display only the active tasks
  const showActiveListHandler = () => {
    setIsCompleted(false)
    setIsActive(true)
  }

  // Display only the completed tasks
  const showCompletedListHandler = () => {
    setIsActive(false)
    setIsCompleted(true)
  }

  // Delete all completed tasks
  const deleteCompletedTasksHandler = () => {
    const deleteCompletedTasks = items.filter(item => !item.isChecked)
    setItems(deleteCompletedTasks)
  }

  // Delete a specific completed task
  const deleteCompletedTaskHandler = name => {
    const deleteCompletedTask = items.filter(item => item.name !== name)
    setItems(deleteCompletedTask)
  }

  return (
    <>
      <main>
        <h1>#todo</h1>
        <Buttons
          items={items}
          isActive={isActive}
          isCompleted={isCompleted}
          showAllList={showAllListHandler}
          showActiveList={showActiveListHandler}
          showCompletedList={showCompletedListHandler}
        />
        <Input onTodoHandler={todoItemsHandler} items={items} isCompleted={isCompleted} />
        <ToDoList
          items={items}
          activeTodoHandler={activeTodoHandler}
          isActive={isActive}
          isCompleted={isCompleted}
          deleteCompletedTasks={deleteCompletedTasksHandler}
          deleteCompletedTask={deleteCompletedTaskHandler}
        />
      </main>
      <footer>
        <p>
          created by <strong>glomvardos</strong>
        </p>
      </footer>
    </>
  )
}

export default App
