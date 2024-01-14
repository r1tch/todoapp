import React, { useState } from 'react'
import './App.css'
import { Container, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import Checkbox from '@mui/material/Checkbox'

function App () {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, { text: input, isCompleted: false }])
      setInput('')
    }
  }

  const handleComplete = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  const handleDelete = index => {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  return (
    <Container maxWidth="sm">
      <h1>Todo App</h1>
      <TextField
        label="Add a new task"
        variant="outlined"
        fullWidth
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddTodo()}
        />
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddTodo}
      >
        Add
      </Button>
      <List>

        {todos.map((todo, index) => (
          <ListItem key={index} dense onClick={() => handleComplete(index)}>
            <Checkbox
              edge="start"
              checked={todo.isCompleted}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={todo.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

    </Container>

  )
}

export default App
