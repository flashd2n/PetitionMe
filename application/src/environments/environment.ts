// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAP04SM_2-57rSvPGSMGgX942bAjhbbdas',
    authDomain: 'the-deranged-eagles.firebaseapp.com',
    databaseURL: 'https://the-deranged-eagles.firebaseio.com',
    projectId: 'the-deranged-eagles',
    storageBucket: 'the-deranged-eagles.appspot.com',
    messagingSenderId: '450306476766'
  }
};
