import {
    Box,
    Center,
    Text,
    Stack,
    Button,
    Flex,
    Spacer,
} from '@chakra-ui/react';
import Link from 'next/link';

type HomeLinkProps = {
    title: string;
    description?: string;
    buttonTitle: string;
    href: string;
};

const HomeLink = ({
    title,
    description,
    buttonTitle,
    href,
}: HomeLinkProps) => {
    return (
        <Center py={6}>
            <Box
                maxW={'330px'}
                minW={'330px'}
                minH={'380px'}
                w={'full'}
                bg={'white'}
                boxShadow={'2xl'}
                rounded={'md'}
                overflow={'hidden'}
            >
                <Stack
                    textAlign={'center'}
                    p={6}
                    color={'gray.800'}
                    align={'center'}
                >
                    <Text
                        fontSize={'xl'}
                        fontWeight={500}
                        bg={'gray.50'}
                        p={2}
                        px={3}
                        color={'gray.600'}
                        rounded={'full'}
                    >
                        {title}
                    </Text>
                </Stack>

                <Box bg={'gray.50'} px={6} py={10}>
                    <Flex minH={'220px'} direction="column">
                        <Text textAlign={'center'}>{description}</Text>
                        <Spacer />
                        <Link href={href}>
                            <Button
                                mt={10}
                                w={'full'}
                                bg={'green.400'}
                                color={'white'}
                                rounded={'xl'}
                                boxShadow={
                                    '0 5px 20px 0px rgb(72 187 120 / 43%)'
                                }
                                _hover={{
                                    bg: 'green.500',
                                }}
                                _focus={{
                                    bg: 'green.500',
                                }}
                            >
                                {buttonTitle}
                            </Button>
                        </Link>
                    </Flex>
                </Box>
            </Box>
        </Center>
    );
};

export default HomeLink;
