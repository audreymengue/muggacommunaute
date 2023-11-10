import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Heading,
} from '@chakra-ui/react'

const AccordionComponent = () => {
    return (
        <Box w="800px" mx="auto">
            <Accordion allowToggle>
                <Heading as="h3">FAQS</Heading>
                <AccordionItem b>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Comment devenir membre de Microsoft User Group Gabon?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        C'est simple! Abonnez-vous a nos pages sur les reseaux sociaux, LinkedIn, X, WhatsApp etc...
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem >
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Faut-il payer pour participer a un evenement?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        ABSOLUMENT TOUT nos evenements sont gratuits... Ne payez rien s'il vous plait. Et veuillez signaler si quelqu'un vous demande de payer.
                    </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Y'a t'il une limite d'age pour participer a un evenement?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        En presentiel, tous les mineurs doivent etre accompagnes d'un adulte mais ilk n y a pas de limite d'age pour les evenements en ligne
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Que dois-je faire pour apprendre des sessions que j'ai rate?
                            </Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Pas de soucis! Toutes nos sessions seront sur notre chaine YouTube. Alors, abonnez-vous!
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </Box>
    )
}

export default AccordionComponent

