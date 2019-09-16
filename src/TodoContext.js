import React, { createContext } from 'react'
import uuid from 'uuid/v4'
import * as R from 'ramda'
// import { useDebouncedCallback } from 'use-debounce'

const TodoContext = createContext()
export default TodoContext

export const TodoProvider = props => {
  const [todos, setTodos] = React.useState(props.todos)
  // const [setFieldDebouced] = useDebouncedCallback(setField, 500)

  const setField = (update, id) => {
    setTodos(oldTodos => {
      const idx = R.findIndex(item => item._id === id, oldTodos)
      const copy = R.clone(oldTodos)
      copy[idx].todo = update
      return copy
    })
  }

  return (
    <TodoContext.Provider value={[todos, setField]}>
      {props.children}
    </TodoContext.Provider>
  )
}

TodoProvider.defaultProps = {
  todos: [
    { _id: uuid(), todo: 'Buy milk' },
    { _id: uuid(), todo: 'Buy bread' },
    { _id: uuid(), todo: 'Buy eggs' },
    { _id: uuid(), todo: 'Buy detergent' }
  ]
}
