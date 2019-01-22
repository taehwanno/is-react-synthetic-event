import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';

import pkg from './package.json';
import createExpect from '../create-expect';

/**
 * See https://github.com/facebook/react/blob/v16.0.0/src/renderers/shared/shared/event/SyntheticEvent.js
 */
describe(`${pkg.name} isReactSyntheticEvent`, () => {
  const expectIsReactSyntheticEvent = createExpect(React, ReactDOM, ReactTestUtils);

  it('should return true when argument is instance of react synthetic event', () => {
    // Clipboard Event
    expectIsReactSyntheticEvent('copy').toBe(true);
    // Composition Events
    expectIsReactSyntheticEvent('compositionEnd').toBe(true);
    // Keyboard Event
    expectIsReactSyntheticEvent('keyDown').toBe(true);
    // Focus Event
    expectIsReactSyntheticEvent('focus').toBe(true);
    // Form Event
    expectIsReactSyntheticEvent('change').toBe(true);
    // Mouse Event
    expectIsReactSyntheticEvent('click').toBe(true);
    // Pointer Event
    expectIsReactSyntheticEvent('pointerDown').toBe(true);
    // Selection Event
    expectIsReactSyntheticEvent('select').toBe(true);
    // Touch Event
    expectIsReactSyntheticEvent('touchCancel').toBe(true);
    // UI Event
    expectIsReactSyntheticEvent('scroll').toBe(true);
    // Wheel Event
    expectIsReactSyntheticEvent('wheel').toBe(true);
    // Media Event
    expectIsReactSyntheticEvent('abort').toBe(true);
    // Image Event
    expectIsReactSyntheticEvent('load').toBe(true);
    // Animation Event
    expectIsReactSyntheticEvent('animationStart').toBe(true);
    // Transition Event
    expectIsReactSyntheticEvent('transitionEnd').toBe(true);
    // Other Event
    expectIsReactSyntheticEvent('toggle').toBe(true);
  });
});
