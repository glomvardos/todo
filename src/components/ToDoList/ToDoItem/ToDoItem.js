import classes from './ToDoItem.module.css'

const ToDoItem = props => {
  const onChangeHandler = event => {
    props.activeTodoHandler({
      name: event.target.id,
      isChecked: event.target.checked,
    })
  }

  return (
    <div className={classes.flex_item}>
      <div className={classes.checkbox}>
        <input
          id={props.label}
          type='checkbox'
          checked={props.isChecked}
          onChange={onChangeHandler}
        />
        <label htmlFor={props.label}>{props.label}</label>
      </div>
      {props.isCompleted && (
        <i onClick={props.deleteCompletedTask} className='far fa-trash-alt'></i>
      )}
    </div>
  )
}

export default ToDoItem
