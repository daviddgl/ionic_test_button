To run the application:
- git clone 
- npm ci
- ionic cordova build ios --device

Open the project in XCode and build the app and install it in an iPhone or an emulator.
Open the app, go to `Tab two`, scroll down and you'll see that the button text doesn't appear. If you click the button, the view is refresh and it appears.

This only happen with iOS. I works in Chrome and Android.

The changes I only did in this blank app are:
- I added a ion-slide in `Tab two`
- I added the following styles in the `tab2.page.scss` file:
```
ion-slides,
ion-slide {
  overflow-y: scroll;
  border-radius: 10px;
  height: 100% !important;
}
```
