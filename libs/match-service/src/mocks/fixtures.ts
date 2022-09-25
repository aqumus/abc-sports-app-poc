import { Fixture, MatchDetails } from '@abc/shared-model';
import { mockMatches } from './matches';

export const mockFixtures: Fixture[] = [
  {
    id: '1',
    matchId: '1',
    season: 'Season 1',
    championship: 'Nascar Cup 2022',
    match: mockMatches.find(({ id }) => id === '1') as MatchDetails,
  },
  {
    id: '2',
    matchId: '2',
    season: '',
    championship: '',
    match: mockMatches.find(({ id }) => id === '2') as MatchDetails,
  },
  {
    id: '3',
    matchId: '3',
    season: '',
    championship: '',
    match: mockMatches.find(({ id }) => id === '3') as MatchDetails,
  },
  {
    id: '4',
    matchId: '4',
    season: '',
    championship: '',
    match: mockMatches.find(({ id }) => id === '4') as MatchDetails,
  },
];
