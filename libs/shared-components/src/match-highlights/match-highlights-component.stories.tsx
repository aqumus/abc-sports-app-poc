import { ComponentStory, ComponentMeta } from '@storybook/react';
import { MatchHighlightComponent as MatchHighlightReactComponent } from './match-highlights-component';
import { MatchHighlight } from '@abc/shared-model';
import { mockMatchHighlights } from '@abc/match-service';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'MatchHighlights',
  component: MatchHighlightReactComponent,
} as ComponentMeta<typeof MatchHighlightReactComponent>;

//👇 We create a “template” of how args map to rendering
const MatchHighlightReactComponentTemp: ComponentStory<
  typeof MatchHighlightReactComponent
> = (args: MatchHighlight) => <MatchHighlightReactComponent {...args} />;

//👇 Each story then reuses that template
export const MatchHighlightComponent = MatchHighlightReactComponentTemp.bind(
  {}
);
MatchHighlightComponent.args = mockMatchHighlights[0];
