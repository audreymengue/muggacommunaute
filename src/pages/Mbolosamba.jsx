import { Flex } from '@chakra-ui/react'
import Banner from '../components/Banner'
import Cards from '../components/Cards'
import AccordionComponent from '../components/Accordion'
import Partners from '../components/Partners'

const Mbolosamba = () => {
    return (
        <Flex direction="column" textAlign="center" >
            <Banner />
            <Cards />
            <AccordionComponent />
            <Partners />
        </Flex>
    )
}

export default Mbolosamba
