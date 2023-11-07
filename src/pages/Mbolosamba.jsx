import { Box, Divider, Grid, GridItem, Flex, Heading, Text, SimpleGrid, Container } from '@chakra-ui/react'
import muggalogo from '../images/muggalogo.png'
import newbg from '../images/bg.jpg'
import bg from '../images/images.jpg'
import React from 'react'
import Banner from '../components/Banner'
import AnimatedText from '../components/Animatedtext'
import Cards from '../components/Cards'
import AccordionComponent from '../components/Accordion'

const Mbolosamba = () => {
    return (
        <Flex direction="column" textAlign="center" >
            <Banner />
            <Cards />
            <AccordionComponent />
        </Flex>
    )
}

export default Mbolosamba
