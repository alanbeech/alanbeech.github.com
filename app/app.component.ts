import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component} from 'angular2/core';

import {CrisisCenterComponent} from './crisis-center/crisis-center.component';
import {HeroListComponent}     from './heroes/hero-list.component';
import {HeroDetailComponent}   from './heroes/hero-detail.component';

import {DialogService}         from './dialog.service';
import {HeroService}           from './heroes/hero.service';

@Component({
    selector: 'my-app',
    template: `
          <h1>Component Router</h1>
          <nav>
            <a [routerLink]="['CrisisCenter']">Crisis Center</a>
            <a [routerLink]="['Heroes']">Heroes</a>
          </nav>
          <md-checkbox>Test</md-checkbox>
          
          <router-outlet></router-outlet>`
    ,
    providers:  [DialogService, HeroService],
    directives: [ROUTER_DIRECTIVES]


})
@RouteConfig([

    { // Crisis Center child route
        path: '/crisis-center/...',
        name: 'CrisisCenter',
        component: CrisisCenterComponent,
        useAsDefault: true
    },

    {path: '/heroes',   name: 'Heroes',     component: HeroListComponent},
    {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
    {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
])
export class AppComponent { }
