import { MatchDetails, MatchParticipant } from '../match-service-types';

export const matchParticipants: MatchParticipant[] = [
  {
    id: 'participant-1',
    matchId: '1',
    team: 'Hendrick Motorsports',
    manufacturer: 'Chevrolet',
    driverName: 'Chase Elliott',
    driverImageUrl: '/images/driver-chase-elliott.png',
    brandIconUrl: '/images/brand-chevrolet.png',
    laps: [{ time: 1.3 }, { time: 2.3 }, { time: 3.3 }],
    position: 1,
  },
  {
    id: 'participant-2',
    matchId: '1',
    team: 'Team Penske',
    manufacturer: 'Ford',
    driverName: 'Joey Logano',
    driverImageUrl: '/images/driver-joey-logano.png',
    brandIconUrl: '/images/brand-ford.png',
    laps: [{ time: 1.5 }, { time: 2.5 }, { time: 3.5 }],
    position: 2,
  },
  {
    id: 'participant-3',
    matchId: '1',
    team: 'Joe Gibbs Racing',
    manufacturer: 'Toyota',
    driverName: 'Denny Hamlin',
    driverImageUrl: '/images/driver-denny-hamlin.png',
    brandIconUrl: '/images/brand-toyota.png',
    laps: [{ time: 1.7 }, { time: 2.7 }, { time: 3.7 }],
    position: 3,
  },
  {
    id: 'participant-4',
    matchId: '1',
    team: 'Trackhouse Racing Team',
    manufacturer: 'Chevrolet',
    driverName: 'Ross Chastain',
    driverImageUrl: '/images/driver-ross-chastain.png',
    brandIconUrl: '/images/brand-chevrolet.png',
    laps: [{ time: 1.9 }, { time: 2.9 }, { time: 3.9 }],
    position: 4,
  },
];

function randomParticipants(matchId: string) {
  return matchParticipants.map((participant, index) => {
    return {
      ...participant,
      matchId,
      position: Math.floor(Math.random() * (matchParticipants.length - index)),
    };
  });
}

export const mockMatches: MatchDetails[] = [
  {
    id: '1',
    trackType: 'Superspeedway',
    trackLength: 2.26,
    country: 'Alabama',
    city: 'Talladega',
    totalLaps: 188,
    participants: randomParticipants('1'),
    scheduledAt: '1663774907885',
    finishedAt: '1663947678267',
  },
  {
    id: '2',
    trackType: 'Superspeedway',
    trackLength: 2.26,
    country: 'Alabama',
    city: 'Talladega',
    totalLaps: 188,
    participants: randomParticipants('2'),
    scheduledAt: '1663774907885',
    finishedAt: '1663947678267',
  },
  {
    id: '3',
    trackType: 'Superspeedway',
    trackLength: 2.26,
    country: 'Alabama',
    city: 'Talladega',
    totalLaps: 188,
    participants: randomParticipants('3'),
    scheduledAt: '1663774907885',
    finishedAt: '1663947678267',
  },
  {
    id: '4',
    trackType: 'Superspeedway',
    trackLength: 2.26,
    country: 'Alabama',
    city: 'Talladega',
    totalLaps: 188,
    participants: randomParticipants('4'),
    scheduledAt: '1663774907885',
    finishedAt: '1663947678267',
  },
];
