import { Td, Image, Spinner } from '@chakra-ui/react';

type ImageCellInput = {
    value: string | string[];
};

export const ImageCell = ({ value }: ImageCellInput) => {
    return (
        <Td>
            {typeof value === 'string' ? (
                <Image src={value} fallback={<Spinner />} />
            ) : (
                'Image couldnt be loaded'
            )}
        </Td>
    );
};
