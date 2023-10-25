import { Flex, Box, Heading, Text, Button, Spacer, HStack } from '@chakra-ui/react'
import logo from '../images/muggalogo.png'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <Flex as="nav" p="5px" alignItems="center" bg="blue.200" >
            <Box w="80px"><img src={logo} alt='The logo of MUUGA' /></Box>
            <Spacer />

            <HStack spacing="20px">
                <Box bg="gray.200" p="10px">
                    <NavLink to="/">Bienvenu</NavLink>
                </Box>
                <Box bg="gray.200" p="10px">
                    <NavLink to="contactes">Contactes</NavLink>
                </Box>
                <Box bg="gray.200" p="10px">
                    <NavLink to="donner">Donner</NavLink>
                </Box>
                <Box bg="gray.200" p="10px">
                    <NavLink to="blog">Blog</NavLink>
                </Box>
                <Box bg="gray.200" p="10px">
                    <NavLink to="activites">Activites</NavLink>
                </Box>
            </HStack>
        </Flex>
    )
}

export default NavBar