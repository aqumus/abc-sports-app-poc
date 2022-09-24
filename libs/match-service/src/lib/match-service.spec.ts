import { matchService } from './match-service';

describe('matchService', () => {
  it('should work', () => {
    expect(matchService()).toMatchObject(
      expect.objectContaining({
        getMatchHighlights: expect.any(Function),
        getFixtures: expect.any(Function),
        getLeaderBoardEntries: expect.any(Function),
      })
    );
  });
});
