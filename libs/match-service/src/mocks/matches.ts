import { MatchDetails, MatchParticipant } from '@abc/shared-model';

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
  return matchParticipants
    .map((participant) => {
      return {
        ...participant,
        matchId,
        sortNum: Math.random(),
      };
    })
    .sort((a, b) => a.sortNum - b.sortNum)
    .map(({ sortNum, ...participantProp }, index) => ({
      ...participantProp,
      position: index + 1,
    }));
}

export const mockMatches: MatchDetails[] = [
  {
    id: '1',
    title: 'NASCAR All-Star Open',
    trackName: 'North Wilkesboro Speedway',
    trackType: 'Superspeedway',
    trackLength: 1.5,
    location: 'North Wilkesboro, North Carolina',
    totalLaps: 125,
    participants: randomParticipants('1'),
    scheduledAt: '1663774907885',
    finishedAt: '1663947678267',
  },
  {
    id: '2',
    title: 'DAYTONA 500',
    trackName: 'Daytona International Speedway',
    trackType: 'Superspeedway',
    trackLength: 500,
    location: 'Daytona Beach, Florida',
    totalLaps: 200,
    participants: randomParticipants('2'),
    scheduledAt: '1663774907885',
    finishedAt: '1663947678267',
  },
  {
    id: '3',
    title: 'Federated Auto Parts 400',
    trackName: 'Richmond Raceway',
    trackType: 'Superspeedway',
    trackLength: 300,
    location: 'Richmond, Virginia',
    totalLaps: 400,
    participants: randomParticipants('3'),
    scheduledAt: '1663774907885',
    finishedAt: '1663947678267',
  },
  {
    id: '4',
    title: 'Xfinity 500',
    trackName: 'Martinville Speedway',
    trackType: 'Superspeedway',
    trackLength: 263,
    location: 'Martinsville, Virginia',
    totalLaps: 500,
    participants: randomParticipants('4'),
    scheduledAt: '1663774907885',
    finishedAt: '1663947678267',
  },
];
