/**
 * Returns true if the passed value is "React Synthetic Event" object.
 * @param {any} event The event to inspect.
 * @returns {boolean} True if the argument appears to be a react synthetic event.
 *
 * Please refer to the implementation of each version.
 * @see https://github.com/facebook/react/blob/v0.14.0/src/renderers/dom/client/syntheticEvents/SyntheticEvent.js
 * @see https://github.com/facebook/react/blob/v15.0.0/src/renderers/dom/client/syntheticEvents/SyntheticEvent.js
 * @see https://github.com/facebook/react/blob/v16.0.0/src/renderers/shared/shared/event/SyntheticEvent.js
 * @see https://github.com/facebook/react/blob/v16.4.0/packages/events/SyntheticEvent.js
 */
export default function isReactSyntheticEvent(event) {
  if (typeof event !== 'object' || event === null) {
    return false;
  }

  const proto = Object.getPrototypeOf(event);
  if ('_dispatchListeners' in event && proto && proto.constructor.Interface) {
    return true;
  }
  return false;
}
