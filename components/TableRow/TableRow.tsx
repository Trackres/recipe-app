import { Tr, Td } from '@chakra-ui/react';
import { TextCell } from '../TableCell/TextCell';
import { ImageCell } from '../TableCell/ImageCell';
import { ArrayCell } from '../TableCell/ArrayCell';

type TableRowProps = {
    detail: string;
    value: string | string[];
};

export const TableRow = ({ detail, value }: TableRowProps) => {
    return (
        <>
            {detail !== 'images' &&
            detail !== 'ingredients' &&
            detail !== 'digest' &&
            detail !== 'totalDaily' &&
            detail !== 'totalNutrients' ? (
                <Tr key={detail}>
                    <Td>
                        {detail &&
                            detail
                                .split(/(?=[A-Z])/)
                                .join(' ')
                                .toLowerCase()}
                    </Td>
                    {
                        {
                            ['uri']: <TextCell value={value} />,
                            ['label']: <TextCell value={value} />,
                            ['source']: <TextCell value={value} />,
                            ['url']: <TextCell value={value} />,
                            ['shareAs']: <TextCell value={value} />,
                            ['yield']: <TextCell value={value} />,
                            ['calories']: <TextCell value={value} />,
                            ['totalWeight']: <TextCell value={value} />,
                            ['totalTime']: <TextCell value={value} />,
                            ['image']: <ImageCell value={value} />,
                            ['dietLabels']: <ArrayCell value={value} />,
                            ['healthLabels']: <ArrayCell value={value} />,
                            ['cautions']: <ArrayCell value={value} />,
                            ['ingredientLines']: <ArrayCell value={value} />,
                            ['cuisineType']: <ArrayCell value={value} />,
                            ['mealType']: <ArrayCell value={value} />,
                            ['dishType']: <ArrayCell value={value} />,
                        }[detail]
                    }
                </Tr>
            ) : (
                ''
            )}
        </>
    );
};
