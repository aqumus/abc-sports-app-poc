import { ComponentStory, ComponentMeta } from '@storybook/react';
import { LeaderBoardItem as LeaderboardItemComponent } from './leaderboard-item';
import { MatchParticipant } from '@abc/shared-model';
import { mockMatchParticipants } from '@abc/match-service';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Leaderboard',
  component: LeaderboardItemComponent,
} as ComponentMeta<typeof LeaderboardItemComponent>;

//👇 We create a “template” of how args map to rendering
const LeaderboardItemComponentTemp: ComponentStory<
  typeof LeaderboardItemComponent
> = (args: MatchParticipant) => <LeaderboardItemComponent {...args} />;

//👇 Each story then reuses that template
export const LeaderboardItem = LeaderboardItemComponentTemp.bind({});
LeaderboardItem.args = mockMatchParticipants[0];
