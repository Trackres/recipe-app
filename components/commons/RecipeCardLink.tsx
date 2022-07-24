import {
    Box,
    Center,
    Text,
    Stack,
    Button,
    Flex,
    Image,
    Spacer,
    Spinner,
} from '@chakra-ui/react';
import Link from 'next/link';

type RecipeCardLinkProps = {
    label: string;
    image?: string;
    href: string;
};

const RecipeCardLink = ({ label, image, href }: RecipeCardLinkProps) => {
    const getIdFromUrl = () => {
        let url = new URL(href);
        return url.pathname.substring(url.pathname.lastIndexOf('/') + 1);
    };

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
                        {label}
                    </Text>
                </Stack>

                <Box bg={'gray.50'} px={6} py={10}>
                    <Flex minH={'220px'} direction="column">
                        <Image src={image} fallback={<Spinner />} />
                        <Spacer />
                        <Link href={'/recipes/details/' + getIdFromUrl()}>
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
                                See full details
                            </Button>
                        </Link>
                    </Flex>
                </Box>
            </Box>
        </Center>
    );
};

export default RecipeCardLink;
