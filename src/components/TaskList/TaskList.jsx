import React from 'react'

const TaskList = ({items, renderItems = (item) => {}}) => {
  return (
            <ul>
                {items.map((item) => {
                    return renderItems(item);
                })}
            </ul>
  )
}

export default TaskList