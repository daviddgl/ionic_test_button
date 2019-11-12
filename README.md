To run the application:
- git clone 
- npm ci
- ionic cordova build ios --device

Open the project in XCode and build the app and install it in an iPhone or an emulator.

To reproduce the issue:
Open the app, go to `Tab two`, scroll down and you'll see that the text of the button is not visible. If you click the button, the view is refreshed and it appears. If you swipe a slide, scrolling previously to hide the button, and go back to that slide and scroll to see the button, you'll see the text is not visible until you click it.

This only happen with iOS. It works in Chrome and Android.

The only changes I did in this blank app are:
- I added a `ion-slide` in `Tab two`
- I added the following styles in the `tab2.page.scss` file:
```
ion-slides,
ion-slide {
  overflow-y: scroll;
  border-radius: 10px;
  height: 100% !important;
}
```
