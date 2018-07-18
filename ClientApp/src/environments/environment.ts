// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  adalConfig: {
    tenant: 'scrippsnetworks.com',
    clientId: 'd9faaac5-25b4-4dbd-9eca-70293f65682f',
    postLogoutRedirectUri: 'https://localhost:44386/logout'
  }
};
