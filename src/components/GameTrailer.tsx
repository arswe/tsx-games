import { Box, Heading } from '@chakra-ui/react';
import useTrailers from '../hooks/useTrailers';

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;

  if (error) throw error;

  const first = data?.results[0];
  return (
    <Box>
      <Heading fontSize='2xl' marginY={5}>
        {first?.name}
      </Heading>
      {first ? <video src={first.data[480]} poster={first.preview} controls /> : null}
    </Box>
  );
};

export default GameTrailer;
