import { Flex, Box, Heading, Text, Button, Spacer, HStack } from '@chakra-ui/react'
import logo from '../images/muggalogo.png'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        // <div>Hello</div>
        <Flex as="nav" px="20px" py="5px" alignItems="center" bg="whiteAlpha.200" color="blue.300" fontWeight="bold">
            <Box w="50px"><img src={logo} alt='The logo of MUUGA' /></Box>
            <Spacer />

            <HStack spacing="20px">
                <Box p="10px">
                    <NavLink to="joindre">Bienvenus</NavLink>
                </Box>
                <Box p="10px">
                    <NavLink to="contactes">Contactes</NavLink>
                </Box>
                <Box p="10px">
                    <NavLink to="donner">Soutien</NavLink>
                </Box>
                <Box p="10px">
                    <NavLink to="blog">Blog</NavLink>
                </Box>
                <Box p="10px">
                    <NavLink to="activites">Activités</NavLink>
                </Box>
            </HStack>
        </Flex>
    )
}

export default NavBar