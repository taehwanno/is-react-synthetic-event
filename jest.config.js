module.exports = {
  projects: ['default', 'v0.14.0', 'v15.0.0', 'v16.0.0', 'v16.4.0'].map(version => ({
    displayName: version,
    testMatch: [`<rootDir>/tests/${version}/*.spec.js`],
  })),
};
