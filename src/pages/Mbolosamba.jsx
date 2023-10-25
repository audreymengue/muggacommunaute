import { Box, Divider, Grid, GridItem, Flex, Heading, Text } from '@chakra-ui/react'
import muggalogo from '../images/muggalogo.png'
import React from 'react'

const Mbolosamba = () => {
    return (
        <Flex bg="gray.50" justifyContent="space-between">
            <Box bg="red.200" w="50%" textAlign="center" >
                <Box mx="auto" my="200px">
                    <Heading as="h1">
                        Microsoft User Group Gabon
                    </Heading>
                    <Text> Pour les passionés des technologies Microsoft </Text>
                </Box>
            </Box>
            {/* <Divider /> */}
            <Box textAlign="center">
                <img src={muggalogo} style={{ width: '500px' }} alt='The logo of Microsft User Group Gabon' />
            </Box>
        </Flex>
    )
}

export default Mbolosamba
