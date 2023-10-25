import React from 'react'
import NavBar from '../components/NavBar'
import { Box, Divider, Flex } from '@chakra-ui/react'
import Mbolosamba from '../pages/Mbolosamba'

const RootLayout = () => {
    return (
        <Flex direction="column">
            <NavBar />
            <Divider orientation='horizontal' />
            <Mbolosamba />
        </Flex>
    )
}

export default RootLayout