System.register(['angular2/router', 'angular2/core', './crisis-center/crisis-center.component', './heroes/hero-list.component', './heroes/hero-detail.component', './home/home.component', './about/about.component', './blog/xamarin-forms-detect-swipe/xamarin-forms-detect-swipe.component', './dialog.service', './heroes/hero.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var router_1, core_1, crisis_center_component_1, hero_list_component_1, hero_detail_component_1, home_component_1, about_component_1, xamarin_forms_detect_swipe_component_1, dialog_service_1, hero_service_1;
    var AppComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (crisis_center_component_1_1) {
                crisis_center_component_1 = crisis_center_component_1_1;
            },
            function (hero_list_component_1_1) {
                hero_list_component_1 = hero_list_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (xamarin_forms_detect_swipe_component_1_1) {
                xamarin_forms_detect_swipe_component_1 = xamarin_forms_detect_swipe_component_1_1;
            },
            function (dialog_service_1_1) {
                dialog_service_1 = dialog_service_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './app/app.component.html',
                        providers: [dialog_service_1.DialogService, hero_service_1.HeroService],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/crisis-center/...',
                            name: 'CrisisCenter',
                            component: crisis_center_component_1.CrisisCenterComponent
                        },
                        { path: '/heroes', name: 'Heroes', component: hero_list_component_1.HeroListComponent },
                        { path: '/home', name: 'Home', component: home_component_1.HomeComponent, useAsDefault: true },
                        { path: '/about', name: 'About', component: about_component_1.AboutComponent },
                        { path: '/blog/xamarin-forms-detect-swipe', name: 'XamarinFormsDetectSwipe', component: xamarin_forms_detect_swipe_component_1.XamarinFormsDetectSwipeComponent },
                        { path: '/hero/:id', name: 'HeroDetail', component: hero_detail_component_1.HeroDetailComponent },
                        { path: '/disaster', name: 'Asteroid', redirectTo: ['CrisisCenter', 'CrisisDetail', { id: 3 }] }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map