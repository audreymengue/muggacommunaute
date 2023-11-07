import React from 'react'
import { Box, Button, Divider, Grid, GridItem, Flex, Heading, Text, SimpleGrid, Container } from '@chakra-ui/react'

const Banner = () => {
    return (
        <Flex m="30px" borderRadius="10px" bg="#190482" alignItems="center">
            <Box mx="auto" my="100px"   >
                <Heading as="h1" color="white">
                    Microsoft User Group Gabon
                </Heading>
                <Text color="white"> Pour les passionnés des technologies Microsoft </Text>
            </Box>
            <Box mx="auto" my="100px" >
                <Text color="white" fontStyle="bold">Une communauté pas comme les autres...</Text>
                {/* <Text color="white">Innovons tous ensemble</Text> */}
                <Button bg="yellow.300" mx="10px">Ambochez les MUGGA</Button>
                <Button bg="green.300">Rejoindre MUGGA</Button>
            </Box>

        </Flex>
    )
}

export default Banner
