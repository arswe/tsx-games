import { useQuery } from '@tanstack/react-query';
import platforms from '../data/platforms';
import apiClient, { FetchResponse } from '../services/api-client';
import { Platform } from './useGames';

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: () => apiClient.get<FetchResponse<Platform>>('/platforms/lists/parents').then((res) => res.data),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
    initialData: { count: platforms.length, results: platforms },
  });

export default usePlatforms;