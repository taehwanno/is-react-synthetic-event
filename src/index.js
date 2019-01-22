/**
 * Returns true if the passed value is "React Synthetic Event" object
 *
 * @param {any} event The event to inspect.
 * @returns {boolean} True if the argument appears to be a react synthetic event.
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
