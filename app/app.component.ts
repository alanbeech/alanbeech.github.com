import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Component} from 'angular2/core';

import {CrisisCenterComponent}              from './crisis-center/crisis-center.component';
import {HeroListComponent}                  from './heroes/hero-list.component';
import {HeroDetailComponent}                from './heroes/hero-detail.component';
import {HomeComponent}                      from './home/home.component';
import {AboutComponent}                     from './about/about.component';

import {XamarinFormsImageSwipeComponent}    from './blog/xamarin-forms-image-swipe/xamarin-forms-image-swipe.component';

import {DialogService}         from './dialog.service';
import {HeroService}           from './heroes/hero.service';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    providers:  [DialogService, HeroService],
    directives: [ROUTER_DIRECTIVES]


})
@RouteConfig([

    { 
        path: '/crisis-center/...',
        name: 'CrisisCenter',
        component: CrisisCenterComponent
    },

    {path: '/heroes',   name: 'Heroes',     component: HeroListComponent},

    {path: '/home',   name: 'Home',     component: HomeComponent, useAsDefault: true},
    {path: '/about',   name: 'About',     component: AboutComponent},

    {path: '/blog/xamarin-forms-image-swipe',   name: 'XamarinFormsImageSwipe',     component: XamarinFormsImageSwipeComponent},

    //XamarinFormsImageSwipeComponent
    
    {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
    {path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', {id:3}]}
])
export class AppComponent { }
