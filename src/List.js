import React, { useContext } from 'react'

import * as R from 'ramda'

import TodoContext from './TodoContext'

export function ListItem(props) {
  return (
    <li>
      <input value={props.todo} type="text" onChange={props.onChange} />
    </li>
  )
}

const getEventVal = R.path(['target','value'])

export function List() {
  const [todos, setField] = useContext(TodoContext)
  return (
    <ul style={{ listStyle: 'none' }}>
      {R.map(
        item => (
          <ListItem
            todo={item.todo}
            key={item._id}
            onChange={(evt) => {
              setField(getEventVal(evt), item._id)
            }}
          />
        ),
        todos || []
      )}
    </ul>
  )
}
