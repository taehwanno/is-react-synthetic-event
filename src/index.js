/**
 * Returns true if the passed value is "React Synthetic Event" object.
 * @param {any} event The event to inspect.
 * @returns {boolean} True if the argument appears to be a react synthetic event.
 *
 * Please refer to the implementation of each version.
 * v0.14.0
 * @see https://github.com/facebook/react/blob/v0.14.0/src/renderers/dom/client/syntheticEvents/SyntheticEvent.js
 * v15.0.0
 * @see https://github.com/facebook/react/blob/v15.0.0/src/renderers/dom/client/syntheticEvents/SyntheticEvent.js
 * v16.0.0
 * @see https://github.com/facebook/react/blob/v16.0.0/src/renderers/shared/shared/event/SyntheticEvent.js
 * v16.4.0
 * @see https://github.com/facebook/react/blob/v16.4.0/packages/events/SyntheticEvent.js
 * v16.13.0
 * @see https://github.com/facebook/react/blob/v16.13.0/packages/legacy-events/SyntheticEvent.js
 * v17.0.0
 * @see https://github.com/facebook/react/blob/v17.0.0/packages/react-dom/src/events/ReactSyntheticEventType.js#L25-L36
 * @see https://github.com/facebook/react/blob/v17.0.0/packages/react-dom/src/events/SyntheticEvent.js#L26-L136
 */
export default function isReactSyntheticEvent(event) {
  if (typeof event !== 'object' || event === null) {
    return false;
  }
  return '_dispatchListeners' in event;
}
