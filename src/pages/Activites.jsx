import { Box, Stack, CardHeader, Text, Heading, Card, CardBody } from "@chakra-ui/react"

const Activites = () => {
    return (
        <Box>
            <Heading as="h2" textAlign="center" m="2rem">Voici nos dernieres activites...</Heading>
            <Stack spacing='4' m="4rem">
                {['elevated', 'outline', 'filled'].map((variant) => (
                    <Card key={variant} variant={variant}>
                        <CardHeader>
                            <Heading size='md'> {variant}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>variant = {variant}</Text>
                        </CardBody>
                    </Card>
                ))}
            </Stack>
            <Stack spacing='4' m="4rem">
                {['elevated', 'outline', 'filled'].map((variant) => (
                    <Card key={variant} variant={variant}>
                        <CardHeader>
                            <Heading size='md'> {variant}</Heading>
                        </CardHeader>
                        <CardBody>
                            <Text>variant = {variant}</Text>
                        </CardBody>
                    </Card>
                ))}
            </Stack>
        </Box>
    )
}

export default Activites