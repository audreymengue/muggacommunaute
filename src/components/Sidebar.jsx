import { List, ListItem } from '@chakra-ui/react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <List color="white" fontSize="1.2em">
      <ListItem>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/create">Newtask</NavLink>
        <NavLink to="/profile">Pofile</NavLink>
      </ListItem>
    </List>
  )
}

export default Sidebar
