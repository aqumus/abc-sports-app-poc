import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  Leaderboard as LeaderBoardComponent,
  LeaderboardProps,
} from './leaderboard';
import { mockMatchParticipants } from '@abc/match-service';

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Leaderboard',
  component: LeaderBoardComponent,
} as ComponentMeta<typeof LeaderBoardComponent>;

//๐ We create a โtemplateโ of how args map to rendering
const LeaderBoardComponentTemp: ComponentStory<typeof LeaderBoardComponent> = (
  args: LeaderboardProps
) => <LeaderBoardComponent {...args} />;

//๐ Each story then reuses that template
export const Leaderboard = LeaderBoardComponentTemp.bind({});
Leaderboard.args = {
  participants: mockMatchParticipants.slice(0, 3),
};
