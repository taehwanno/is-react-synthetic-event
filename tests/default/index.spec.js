import isReactSyntheticEvent from '../../src';

describe('isReactSyntheticEvent', () => {
  it('should return false when argument is not react synthetic event', () => {
    expect(isReactSyntheticEvent(true)).toBe(false);
    expect(isReactSyntheticEvent(null)).toBe(false);
    expect(isReactSyntheticEvent(undefined)).toBe(false);
    expect(isReactSyntheticEvent(1)).toBe(false);
    expect(isReactSyntheticEvent('string')).toBe(false);
    expect(isReactSyntheticEvent(Symbol())).toBe(false);
    expect(isReactSyntheticEvent([])).toBe(false);
  });
});
