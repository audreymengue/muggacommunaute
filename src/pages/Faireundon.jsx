import { Box, Heading, Text, Card, CardBody, CardHeader, CardFooter, Button } from "@chakra-ui/react"

const Faireundon = () => {
    return (
        <Box>
            <Heading as="h2" textAlign="center" my="2rem">Merci de soutenir nos communautes des facons suivantes:</Heading>
            <Card align='center' m="4rem">
                <CardHeader>
                    <Heading size='md'> Faire un don d'internet</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'><a href="https://forms.office.com/r/03Db1Dq1BU" target="_blank" rel="noreferrer">Donner</a></Button>
                </CardFooter>
            </Card>
            <Card align='center' m="4rem">
                <CardHeader>
                    <Heading size='md'> Devenir talkeur ou talkeuse</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'><a href="https://forms.office.com/r/buGwttRJnC" target="_blank" rel="noreferrer">Formulaire</a></Button>
                </CardFooter>
            </Card>
            <Card align='center' m="4rem">
                <CardHeader>
                    <Heading size='md'> Sponsoriser un evenement</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'><a href="https://forms.office.com/r/s5JEKaMpCs" target="_blank" rel="noreferrer">Formulaire</a></Button>
                </CardFooter>
            </Card>
            <Card align='center' m="4rem">
                <CardHeader>
                    <Heading size='md'> Sponsoriser un local pour nos evenements</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'><a href="https://forms.office.com/r/s5JEKaMpCs" target="_blank" rel="noreferrer">Formulaire</a></Button>
                </CardFooter>
            </Card>
            <Card align='center' m="4rem">
                <CardHeader>
                    <Heading size='md'> Sponsoriser le transport</Heading>
                </CardHeader>
                <CardBody>
                    <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                    <Button colorScheme='blue'>Donner</Button>
                </CardFooter>
            </Card>
        </Box>
    )
}

export default Faireundon