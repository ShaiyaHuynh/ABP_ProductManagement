import { RoutesService, eLayoutType } from '@abp/ng.core';
import { APP_INITIALIZER } from '@angular/core';

export const APP_ROUTE_PROVIDER = [
  { provide: APP_INITIALIZER, useFactory: configureRoutes, deps: [RoutesService], multi: true },
];

function configureRoutes(routesService: RoutesService) {
  return () => {
    routesService.add([
      {
        path: '/',
        name: 'Home',
        iconClass: 'fas fa-home',
        order: 1,
        layout: eLayoutType.application,
      },
      {
        path: '/Product-store', 
        name:'ProductStore',
        iconClass: 'fas fa-book', 
        order: 2, 
        layout: eLayoutType.application,
      }, 
      {
        path: '/products', 
        name:'Products',
        iconClass: 'fas fa-book', 
        parentName: 'ProductStore',
        layout: eLayoutType.application,
      }
    ]);
  };
}
