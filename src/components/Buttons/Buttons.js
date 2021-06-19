import Button from './Button/Button'

import classes from './Buttons.module.css'

const Buttons = props => {
  return (
    <div className={classes.control}>
      <Button
        text='All'
        onClickHandler={props.showAllList}
        isActive={props.isActive}
        isCompleted={props.isCompleted}
      />
      <Button text='Active' onClickHandler={props.showActiveList} isActive={props.isActive} />
      <Button
        text='Completed'
        onClickHandler={props.showCompletedList}
        isCompleted={props.isCompleted}
      />
    </div>
  )
}

export default Buttons
