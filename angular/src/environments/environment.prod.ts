import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'ProductManagement',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44377/',
    redirectUri: baseUrl,
    clientId: 'ProductManagement_App',
    responseType: 'code',
    scope: 'offline_access ProductManagement',
    requireHttps: true
  },
  apis: {
    default: {
      url: 'https://localhost:44377',
      rootNamespace: 'ProductManagement',
    },
  },
} as Environment;
