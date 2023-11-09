import React from 'react'
import NavBar from '../components/NavBar'
import { Box, Divider, Flex } from '@chakra-ui/react'
import Mbolosamba from '../pages/Mbolosamba'
import Partners from '../components/Partners'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
    return (
        <Box>
            <Flex direction="column">
                <NavBar />
                <Divider orientation='horizontal' />
            </Flex>
            {/* <main style={{ backgroundColor: "blue" }}> */}
            <main>
                <Outlet />
            </main>
            <Footer />
        </Box>
    )
}

export default RootLayout