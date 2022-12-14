import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fixtures as FixturesReactComponent, FixturesProps } from './fixtures';
import { mockFixtures } from '@abc/match-service';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Fixtures',
  component: FixturesReactComponent,
} as ComponentMeta<typeof FixturesReactComponent>;

//👇 We create a “template” of how args map to rendering
const FixturesTemplate: ComponentStory<typeof FixturesReactComponent> = (
  args: FixturesProps
) => <FixturesReactComponent {...args} />;

//👇 Each story then reuses that template
export const Fixtures = FixturesTemplate.bind({});
Fixtures.args = {
  fixtures: mockFixtures.slice(0, 2),
};
