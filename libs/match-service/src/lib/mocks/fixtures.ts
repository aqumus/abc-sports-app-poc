import { Fixture, MatchDetails } from '../match-service-types';
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
    season: 'Season 1',
    championship: 'Nascar Cup 2022',
    match: mockMatches.find(({ id }) => id === '2') as MatchDetails,
  },
  {
    id: '3',
    matchId: '3',
    season: 'Season 1',
    championship: 'Nascar Cup 2022',
    match: mockMatches.find(({ id }) => id === '2') as MatchDetails,
  },
  {
    id: '4',
    matchId: '1',
    season: 'Season 1',
    championship: 'Nascar Cup 2022',
    match: mockMatches.find(({ id }) => id === '2') as MatchDetails,
  },
];
