import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  gameQuery: GameQuery
}

const GameHeading = ({ gameQuery }: Props) => {
  const {data :genrs} = useGenres();
  const genre = genrs?.results.find((genre) => genre.id === gameQuery.genreId);

  const {data :platforms} = usePlatforms();
  const platform = platforms?.results.find((platform) => platform.id === gameQuery.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

  return (
    <Heading as='h1' marginY={5} fontSize='3xl'>{heading}</Heading>
  )
}

export default GameHeading