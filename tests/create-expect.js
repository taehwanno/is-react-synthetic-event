import isReactSyntheticEvent from '../src';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Create 'expect' and 'matcher' for testing.
 *
 * @param {Object} React
 * @param {Object} ReactDOM
 * @param {Object} ReactTestUtils
 *
 * @example
 * import React from 'react';
 * import ReactDOM from 'react-dom';
 * import ReactTestUtils from 'react-dom/test-utils';
 * import createExpect from '../create-expect';
 *
 * describe('isReactSyntheticEvent', () => {
 *   const expectIsReactSyntheticEvent = createExpect(React, ReactDOM, ReactTestUtils);
 *   it('should return true when argument is instance of react synthetic event', () => {
 *     expectIsReactSyntheticEvent('click').toBe(true);
 *   });
 * });
 */
export default function createExpect(React, ReactDOM, ReactTestUtils) {
  function expectIsReactSyntheticEvent(eventName) {
    const div = document.createElement('div');
    const propName = 'on' + capitalize(eventName);
    const mock = jest.fn(isReactSyntheticEvent);
    const button = ReactDOM.render(React.createElement('button', { [propName]: mock }), div);
    ReactTestUtils.Simulate[eventName](button);

    return {
      toBe(expected) {
        expect(mock).toHaveReturnedWith(expected);
      },
    };
  }

  return expectIsReactSyntheticEvent;
}
