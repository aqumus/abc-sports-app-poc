import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Fixtures as FixturesReactComponent, FixturesProps } from './fixtures';
import { mockFixtures } from '@abc/match-service';

export default {
  /* ๐ The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Fixtures',
  component: FixturesReactComponent,
} as ComponentMeta<typeof FixturesReactComponent>;

//๐ We create a โtemplateโ of how args map to rendering
const FixturesTemplate: ComponentStory<typeof FixturesReactComponent> = (
  args: FixturesProps
) => <FixturesReactComponent {...args} />;

//๐ Each story then reuses that template
export const Fixtures = FixturesTemplate.bind({});
Fixtures.args = {
  fixtures: mockFixtures.slice(0, 2),
};
