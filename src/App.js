import React from 'react'
import { List } from './List'
import { TodoProvider } from './TodoContext'

function App() {
  return (
    <TodoProvider>
      <List />
    </TodoProvider>
  )
}

export default App
