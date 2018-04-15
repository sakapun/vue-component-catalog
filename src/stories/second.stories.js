/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HoverGradient from '../components/HoverGradient.vue';


storiesOf('HoverGradient', module)
  .add('with text', () => ({
    components: { HoverGradient },
    template: '<div style="width: 300px"><HoverGradient></div>',
    methods: { action: action('clicked') },
  }))
/* eslint-enable react/react-in-jsx-scope */
