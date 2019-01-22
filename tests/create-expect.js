import isReactSyntheticEvent from '../src';

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

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
