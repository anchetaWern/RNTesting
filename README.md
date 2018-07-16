# RNTesting

A sample React Native app showing how to implement snapshot and end-to-end testing with Jest and Detox.

_Note: the React Native code in this repo may be a little bit outdated and won't run immediately after you've followed the setup instructions. Be sure to refactor the code to use the more recent React Native syntax if it doesn't run for you._

## Prerequisites

-   React Native development environment
-   [Yarn](https://yarnpkg.com)

## Getting Started

1.  Clone the repo:

```
git clone https://github.com/anchetaWern/RNTesting.git
```

2.  Install the dependencies:

```
cd RNTesting
yarn install
```

3.  Run the tests:

```
yarn test
detox build -c android.emu.debug # or detox build -c ios.sim.debug
detox test -c android.emu.debug # or detox test -c ios.sim.debug
```

## Built With

-   [React Native](https://facebook.github.io/react-native/)
-   [Detox](https://github.com/wix/detox)
-   [Jest](https://jestjs.io/)

