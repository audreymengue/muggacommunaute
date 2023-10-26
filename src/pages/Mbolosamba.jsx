import { Box, Divider, Grid, GridItem, Flex, Heading, Text } from '@chakra-ui/react'
import muggalogo from '../images/muggalogo.png'
import newbg from '../images/bg.jpg'
import bg from '../images/images.jpg'
import React from 'react'

const Mbolosamba = () => {
    return (
        <Flex
            backgroundImage={newbg}
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            justifyContent="space-between"
            bgSize="cover"
            textAlign="center"
            mx="50px" mt="10px"
            borderRadius="10px"
        >
            <Box mx="auto" my="100px" py="20px" px="10px" borderRadius="10px" border="2px" borderColor="yellow.300">
                <Heading as="h1" color="white">
                    Microsoft User Group Gabon
                </Heading>
                <Text color="white"> Pour les passionnés des technologies Microsoft </Text>
            </Box>

            {/* <Divider /> */}
            {/* <Box textAlign="center">
                <img src={gabon9} style={{ width: '400px' }} alt='The logo of Microsft User Group Gabon' />
            </Box> */}
        </Flex>
    )
}

export default Mbolosamba
