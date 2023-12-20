import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItems = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as='dt' fontWeight='bold' fontSize='md' color='gray.600'>
        {term}
      </Heading>
      <Box as='dd'>{children}</Box>
    </Box>
  );
};

export default DefinitionItems;
