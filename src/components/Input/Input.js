import { useRef } from 'react'
import classes from './Input.module.css'

const Input = props => {
  const inputRef = useRef()

  const onSubmitHandler = event => {
    event.preventDefault()

    const enteredInput = inputRef.current.value
    const isSameTask = props.items.find(item => item.name === enteredInput.trim())
    if (enteredInput.trim() === '' || isSameTask) return
    inputRef.current.value = ''
    props.onTodoHandler({
      name: enteredInput,
      isChecked: false,
    })
  }

  return (
    <div className={classes.form_control}>
      <form onSubmit={onSubmitHandler}>
        <input type='text' ref={inputRef} placeholder='add details' />
        <button>Add</button>
      </form>
    </div>
  )
}

export default Input
