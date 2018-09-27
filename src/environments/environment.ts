// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig:{
    apiKey: "AIzaSyC4vHIig5lA0O9QESGJIAOhrzcx_wESW-8",
    authDomain: "loginapp-b34a5.firebaseapp.com",
    databaseURL: "https://loginapp-b34a5.firebaseio.com",
    projectId: "loginapp-b34a5",
    storageBucket: "loginapp-b34a5.appspot.com",
    messagingSenderId: "956098645508"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
