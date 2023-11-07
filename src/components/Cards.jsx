import { Card, CardHeader, CardBody, Heading, Text, SimpleGrid, Box } from '@chakra-ui/react'

import { HiUserGroup } from "react-icons/hi";
import { TfiStatsUp } from "react-icons/tfi";
import { BsStars } from "react-icons/bs";
const Cards = () => {

    return (
        <Box>
            <Heading as={"h3"}>Une communaute pas comme les autres...</Heading>
            <SimpleGrid m="30px" borderRadius="10px" alignItems="center" justifyContent="center" w="800px" p="10px" spacing={6} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' mx="auto">

                <Card>
                    <CardHeader>
                        <Heading alignContent="center" justifyContent="center" size='2xl' color="green.300"> <HiUserGroup /> </Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>L'esprit de communaute est l'essence meme de notre exixtance.</Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='2xl' color="green.300"> <TfiStatsUp /> </Heading>
                    </CardHeader>
                    <CardBody>
                        <Text> Nous vous aidons a entrer le domaine du travail bien equipes.</Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardHeader>
                        <Heading size='2xl' color="green.300"> <BsStars /> </Heading>
                    </CardHeader>
                    <CardBody>
                        <Text> Nos contenus donnent de l'importance a vos diplomes universitaire.</Text>
                    </CardBody>
                </Card>
            </SimpleGrid>
        </Box>
    )
}

export default Cards