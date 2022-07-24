import { Td, UnorderedList, ListItem } from '@chakra-ui/react';

type ArrayCellInput = {
    value: Array<string> | string;
};

export const ArrayCell = ({ value }: ArrayCellInput) => {
    return (
        <Td>
            <UnorderedList>
                {value instanceof Array && value.length !== 0
                    ? value.map((node) => {
                          return <ListItem key={node}>{node}</ListItem>;
                      })
                    : ''}
            </UnorderedList>
        </Td>
    );
};
