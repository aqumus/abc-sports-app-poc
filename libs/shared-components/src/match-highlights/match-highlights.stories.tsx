import { ComponentStory, ComponentMeta } from '@storybook/react';
import {
  MatchHighlights as MatchHighlightsReactComponent,
  MatchHighlightsProps,
} from './match-highlights';
import { mockMatchHighlights } from '@abc/match-service';

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MatchHighlights',
  component: MatchHighlightsReactComponent,
} as ComponentMeta<typeof MatchHighlightsReactComponent>;

//๐ We create a โtemplateโ of how args map to rendering
const MatchHighlightsReactComponentTemp: ComponentStory<
  typeof MatchHighlightsReactComponent
> = (args: MatchHighlightsProps) => <MatchHighlightsReactComponent {...args} />;

//๐ Each story then reuses that template
export const MatchHighlights = MatchHighlightsReactComponentTemp.bind({});
MatchHighlights.args = { highlights: mockMatchHighlights.slice(0, 2) };
