import { Box, Text, Stack } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box bg={'gray.50'} color={'gray.600'} minH={'4vh'} py={4} px={2}>
            <Stack isInline justify={'center'}>
                <Text textAlign={'center'}>
                    © 2022 Bartosz Swistacz. Created as example usage of NextJS
                    application with ChakraUI.
                </Text>
            </Stack>
        </Box>
    );
};

export default Footer;
