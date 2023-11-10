import { Flex, Box, Heading, Text, Button, Spacer, HStack } from '@chakra-ui/react'
import logo from '../images/muggalogo.png'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        // <div>Hello</div>
        <Flex as="nav" px="20px" position="fixed" w="100%" py="5px" alignItems="center" bg="whiteAlpha.200" color="blue.300" fontWeight="bold">
            <Box w="50px"><img src={logo} alt='The logo of MUUGA' /></Box>
            <Spacer />

            <HStack spacing="20px">
                <Box p="10px">
                    <NavLink to="donner">Faire un don</NavLink>
                </Box>
                <Box p="10px">
                    <NavLink to="activites">Activités</NavLink>
                </Box>
                <Box p="10px">
                    <NavLink to="contactes">Contactes</NavLink>
                </Box>
            </HStack>
        </Flex>
    )
}

export default NavBar