import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FixtureComponent as FixtureReactComponent } from './fixture-component';
import { Fixture } from '@abc/shared-model';
import { mockFixtures } from '@abc/match-service';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Fixtures',
  component: FixtureReactComponent,
} as ComponentMeta<typeof FixtureReactComponent>;

//👇 We create a “template” of how args map to rendering
const FixtureComponentTemplate: ComponentStory<typeof FixtureReactComponent> = (
  args: Fixture
) => <FixtureReactComponent {...args} />;

//👇 Each story then reuses that template
export const FixtureComponent = FixtureComponentTemplate.bind({});
FixtureComponent.args = mockFixtures[0];
