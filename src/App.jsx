import React, { useState } from 'react'
import './App.css'
import { Container, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import Checkbox from '@mui/material/Checkbox'
import Paper from '@mui/material/Paper'

import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn'

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
    <Paper elevation={3} style={{ padding: '20px', margin: '20px auto', maxWidth: '600px' }}>

      <h1>
        <AssignmentTurnedInIcon style={{ fontSize: 40, color: 'primary' }} />
        &nbsp;Todo App
      </h1>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>

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
      </div>
      <List>

        {todos.map((todo, index) => (
          <ListItem key={index} dense onClick={() => handleComplete(index)}>
            <Checkbox
              edge="start"
              checked={todo.isCompleted}
              tabIndex={-1}
              disableRipple
            />
            <ListItemText primary={todo.text} style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>

    </Paper>

  )
}

export default App
