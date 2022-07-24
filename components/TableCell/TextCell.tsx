import { Text, Td } from '@chakra-ui/react';

type TextCellInput = {
    value: string | string[];
};

export const TextCell = ({ value }: TextCellInput) => {
    return (
        <Td>
            <Text>{value}</Text>
        </Td>
    );
};
