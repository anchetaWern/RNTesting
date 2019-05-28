# RNTesting

A sample React Native app showing how to implement snapshot and end-to-end testing with Jest and Detox.

Full tutorial is available at: [http://blog.pusher.com/react-native-testing/](http://blog.pusher.com/react-native-testing/)

_Note: the React Native code in this repo may be a little bit outdated and won't run immediately after you've followed the setup instructions. Be sure to refactor the code to use the more recent React Native syntax if it doesn't run for you._

## Prerequisites

-   React Native development environment (Android Studio or Xcode)
-   [Yarn](https://yarnpkg.com)
-   Detox prerequisites installed (detox-cli, applesimutils for iOS)
-   Android emulator/Genymotion virtual device (for Android), iOS simulator

## Getting Started

1.  Clone the repo:

```
git clone https://github.com/anchetaWern/RNTesting.git
```

2.  Install the dependencies:

```
cd RNTesting
yarn install
react-native eject
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

## Donation

If this project helped you reduce time to develop, please consider buying me a cup of coffee :)

<a href="https://www.buymeacoffee.com/wernancheta" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" ></a>
