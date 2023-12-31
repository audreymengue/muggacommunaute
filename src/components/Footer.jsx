'use client'

import {
    Box,
    chakra,
    Container,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { BiMailSend } from 'react-icons/bi'


const SocialButton = ({
    children,
    label,
    href,
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <SimpleGrid
                    templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
                    spacing={8}>
                    <Stack spacing={6}>

                        <Text fontSize={'sm'}>© 2023 Microsoft User Group Gabon.</Text>
                        <Stack direction={'row'} spacing={6}>
                            <SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/company/microsoft-user-group-gabon/'}>
                                <FaLinkedin />
                            </SocialButton>
                            <SocialButton label={'YouTube'} href={'https://www.youtube.com/@muggacommunaute'}>
                                <FaYoutube />
                            </SocialButton>
                            <SocialButton label={'Twitter'} href={'https://twitter.com/muggacommunaute'}>
                                <FaTwitter />
                            </SocialButton>
                        </Stack>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Communauté</ListHeader>
                        <Box as="a" href={'#'}>
                            Programmes
                        </Box>
                        <Box as="a" href={'#'}>
                            Emplois
                        </Box>
                        <Box as="a" href={'#'}>
                            Directives
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Liens faciles</ListHeader>
                        <Box as="a" href={'https://experiences.microsoft.fr/calendrier-formations/'}>
                            Formation Gratuites
                        </Box>
                        <Box as="a" href={'https://www.microsoft.com/fr-fr/microsoft-learn'}>
                            Microsoft Learn
                        </Box>
                        <Box as="a" href={'#'}>
                            Le Open source
                        </Box>
                    </Stack>
                    <Stack align={'flex-start'}>
                        <ListHeader>Abonnez-vous</ListHeader>
                        <Stack direction={'row'}>
                            <Input
                                placeholder={'Votre E-Mail...'}
                                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                                border={0}
                                _focus={{
                                    bg: 'whiteAlpha.300',
                                }}
                            />
                            <IconButton
                                bg={useColorModeValue('green.400', 'green.800')}
                                color={useColorModeValue('white', 'gray.800')}
                                _hover={{
                                    bg: 'green.600',
                                }}
                                aria-label="Subscribe"
                                icon={<BiMailSend />}
                            />
                        </Stack>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    )
}