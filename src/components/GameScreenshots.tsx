import { Image, SimpleGrid, Text } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data, error, isLoading } = useScreenshots(gameId);
  if (isLoading) return <Text>Loading...</Text>;
  if (error) throw new Error(error.message);

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {data?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} alt={screenshot.id.toString()} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;