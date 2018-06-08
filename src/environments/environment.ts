// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};

const firebaseConfig = {
  apiKey: 'AIzaSyCtjHYYrMMDgqZ3tnGmVk7FdXaRIy-FflY',
  authDomain: 'angular-trucks.firebaseapp.com',
  databaseURL: 'https://angular-trucks.firebaseio.com',
  projectId: 'angular-trucks',
  storageBucket: 'angular-trucks.appspot.com',
  messagingSenderId: '815734067179'
};

export const ENV_FIREBASE_CONFIG: any = firebaseConfig;
