import ToDoItem from './ToDoItem/ToDoItem'

import classes from './ToDoList.module.css'

const ToDoList = props => {
  const allItems = props.items.map((item, i) => (
    <ToDoItem
      key={i}
      label={item.name}
      activeTodoHandler={props.activeTodoHandler}
      isChecked={item.isChecked}
    />
  ))

  const activeItems = props.items
    .filter(item => !item.isChecked)
    .map((item, i) => (
      <ToDoItem
        key={i}
        label={item.name}
        activeTodoHandler={props.activeTodoHandler}
        isChecked={item.isChecked}
      />
    ))

  const completedItems = props.items
    .filter(item => item.isChecked)
    .map((item, i) => (
      <ToDoItem
        key={i}
        label={item.name}
        activeTodoHandler={props.activeTodoHandler}
        isChecked={item.isChecked}
        isCompleted={props.isCompleted}
        deleteCompletedTask={() => props.deleteCompletedTask(item.name)}
      />
    ))

  return (
    <>
      <div className={classes.list}>
        {!props.isActive && !props.isCompleted && allItems}
        {props.isActive && !props.isCompleted && activeItems}
        {!props.isActive && props.isCompleted && completedItems}
        {props.isCompleted && completedItems.length > 1 && (
          <button onClick={props.deleteCompletedTasks} className={classes.btn}>
            <i className='far fa-trash-alt'></i> delete all
          </button>
        )}
      </div>
    </>
  )
}

export default ToDoList
