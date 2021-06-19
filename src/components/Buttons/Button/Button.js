import classes from './Button.module.css'

const Button = props => {
  let activeClass

  if (props.text === 'All' && !props.isActive && !props.isCompleted) {
    activeClass = classes.active
  }

  if (props.text === 'Active' && props.isActive) {
    activeClass = classes.active
  }

  if (props.text === 'Completed' && props.isCompleted) {
    activeClass = classes.active
  }

  return (
    <div className={classes.btn}>
      <button onClick={props.onClickHandler}>{props.text}</button>
      <div className={activeClass}></div>
    </div>
  )
}

export default Button
