import React from 'react'
import NavBar from '../components/NavBar'
import { Box, Divider, Flex } from '@chakra-ui/react'
import Mbolosamba from '../pages/Mbolosamba'
import Partners from '../components/Partners'

const RootLayout = () => {
    return (
        <Flex direction="column">
            <NavBar />
            <Divider orientation='horizontal' />
            <Mbolosamba />
            <Partners />
        </Flex>
    )
}

export default RootLayout