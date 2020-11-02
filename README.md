# is-react-synthetic-event [![npm version](https://badge.fury.io/js/is-react-synthetic-event.svg)](https://badge.fury.io/js/is-react-synthetic-event) [![Coverage Status](https://coveralls.io/repos/github/taehwanno/is-react-synthetic-event/badge.svg?branch=main)](https://coveralls.io/github/taehwanno/is-react-synthetic-event?branch=main) [![CircleCI](https://circleci.com/gh/taehwanno/is-react-synthetic-event.svg?style=shield&circle-token=8b1bede88ffe4132550adc8c26a079ad45d866a7)](https://circleci.com/gh/taehwanno/is-react-synthetic-event)

> Is it react synthetic event?

- [Installation](#installation)
- [Usage](#usage)
- [Disclaimer](#disclaimer)
- [Examples](#examples)
- [Contribution](#contribution)
- [License](#license)

## Installation

```shell
$ npm i is-react-synthetic-event
```

Alternatively, using yarn:

```shell
$ yarn add is-react-synthetic-event
```

Then with a module bundler, you can use like this:

```js
// ES6 modules
import isReactSyntheticEvent from 'is-react-synthetic-event';

// CommonJS modules
const isReactSyntheticEvent = require('is-react-synthetic-event');
```

## Usage

```js
function isReactSyntheticEvent(event: any): boolean
```

## Disclaimer

Because implementation uses some properties related to only internal purpose in React, this package implementation is a bit dangerous. Therefore, it can not be used if the underlying implementation changes.

[The implementation is tested by each specific version starting from v0.14](https://github.com/taehwanno/is-react-synthetic-event/tree/main/tests), and [the implementation can be seen here.](https://github.com/taehwanno/is-react-synthetic-event/blob/main/src/index.js)

- **Is there a reason you did not compare strings like below?**

```js
function isReactSyntheticEvent(event) {
  let proto = Object.getPrototypeOf(event);
  while (proto) {
    if (proto.constructor.name === 'SyntheticEvent') {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return false;
}
```

If you have a build process, because the name of the constructor (`'SyntheticEvent'`) changes in minified react codes, you will not be able to use it in a production environment. (`process.env.NODE_ENV === 'production'`)

## Examples

- in React component

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import isReactSyntheticEvent from 'is-react-synthetic-event';

class Button extends React.Component {
  handleClick(event) {
    console.log(isReactSyntheticEvent(event)); // Obviously true
  }
  render() {
    return <button type="button" onClick={this.handleClick} />;
  }
}

ReactDOM.render(<Button />, document.body);
```

- in Redux custom action creator helper (variation of [`redux-actions's createAction`](https://redux-actions.js.org/api/createaction#createactiontype))

```js
import isReactSyntheticEvent from 'is-react-synthetic-event';

function createAction(type, payloadCreator = (v) => v) {
  if (typeof type !== 'string') throw new Error('type must be string');
  if (typeof payloadCreator !== 'function') throw new Error('payload creator must be function');

  return function actionCreator(...args) {
    const payload = payloadCreator(...args);
    const action = { type };

    if (payload instanceof Error) action.error = true;
    if (payload !== undefined || !isReactSyntheticEvent(payload)) action.payload = payload;

    return action;
  };
}
```

Then, you will not see unnecessary methods and the following warning messages.

![react synthetic event warning message](https://user-images.githubusercontent.com/7760903/51564944-f80c5000-1ed3-11e9-942f-b5f15b124f2b.png)

The difference of before and after using the variation of redux-actions `createAction`:

```diff
import React from 'react';
import { connect } from 'react-redux';

// Same as createAction in examples.
import createAction from '../store/createAction';

class Example extends React.Component {
-  constructor(props) {
-    super(props);
-    this.handleClick = this.handleClick.bind(this);
-  }
-  handleClick() {
-    this.props.createConnection();
-  }
  /**
   * ... Some other codes
   */
  render() {
-    return <button type="button" onClick={this.handleClick} />;
+    return <button type="button" onClick={this.props.createConnection} />;
  }
}

const createConnection = createAction('CONNECTION_CREATE');
const mapDispatchToProps = { createConnection };

export default connect(undefined, mapDispatchToProps);
```

## Contribution

1. Fork to your repository.
2. `git clone https://github.com/<your-username>/is-react-synthetic-event`
3. `cd is-react-synthetic-event`
4. `npm install`
5. `npm run bootstrap`
6. `npm run test`
7. Make some change to codes using with `npm run test:watch`
8. Commit those changes.
9. Push to your origin repository and Submit a pull request to this repository.

## License

MIT © [Taehwan Noh](https://github.com/taehwanno)
