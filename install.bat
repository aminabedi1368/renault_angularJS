::
:: Create output (Cordova) directory
::
mkdir www

::
:: Install client libraries
::
bower install

::
:: Install cordova plugins
:: The quickest option is to ask from Ionic
:: to restore the state of the app.
:: https://github.com/driftyco/ionic-cli::ionic-state-restore
:: If this process fails comment this line and uncomment the
:: "cordova plugin add ..." lines that follow.
::
ionic state restore
::
:: cordova plugin add ionic-plugin-keyboard
:: cordova plugin add cordova-plugin-console
:: cordova plugin add cordova-plugin-device
:: cordova plugin add cordova-plugin-inappbrowser
:: cordova plugin add cordova-plugin-geolocation
:: cordova plugin add cordova-plugin-network-information
:: cordova plugin add cordova-plugin-whitelist
:: cordova plugin add cordova-plugin-camera
:: cordova plugin add cordova-plugin-transport-security
:: cordova plugin add cordova-plugin-admobpro
:: cordova plugin add de.appplant.cordova.plugin.email-composer@0.8.2
:: cordova plugin add phonegap-plugin-push --variable SENDER_ID="228071472080"
:: cordova plugin add https://github.com/EddyVerbruggen/SocialSharing-PhoneGap-Plugin.git
:: cordova plugin add https://github.com/keosuofficial/cordova-audio-stream-plugin.git
:: cordova plugin add https://github.com/pushandplay/cordova-plugin-apprate.git
:: cordova plugin add https://github.com/litehelpers/Cordova-sqlite-storage.git
:: cordova plugin add https://github.com/Telerik-Verified-Plugins/Stripe --variable API_KEY="sk_test_TX5jK09TJSBo7Q85m2zpShiP"

::
:: Add target platform
::
:: Comment out the platform(s) your system supports
:: If this fails, add "ios" and/or "android" in cordovaPlatforms in package.json
::
::grunt platform:add:ios
 grunt platform:add:android

::
:: Build the  project and generate the cordova directory (www)
::
grunt build
