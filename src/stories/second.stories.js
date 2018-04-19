/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import HoverGradient from '../components/HoverGradient.vue';
import HalfTextMove from '../components/HalfTextMove.vue';
import StaggerImage from '../components/StaggerImage/';

storiesOf('HoverGradient', module)
  .add('with text', () => ({
    components: { HoverGradient },
    template: '<div style="width: 300px"><HoverGradient></div>',
    methods: { action: action('clicked') },
  }))
  .add('HalfTextMove', () => ({
    components: { HalfTextMove },
    template: '<HalfTextMove text="Hoge" />',
    methods: { action: action('clicked') },
  }))
  .add('StaggerImage', () => ({
    components: { StaggerImage },
    template: '<StaggerImage text="Hoge" />',
    methods: { action: action('clicked') },
  }))
/* eslint-enable react/react-in-jsx-scope */
