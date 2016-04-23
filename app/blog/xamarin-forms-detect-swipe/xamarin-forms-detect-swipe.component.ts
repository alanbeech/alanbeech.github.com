import {Component}  from 'angular2/core';

declare var hljs : any;

@Component({
    templateUrl: './app/blog/xamarin-forms-detect-swipe/xamarin-forms-detect-swipe.component.html'
})
export class XamarinFormsDetectSwipeComponent {

    ngAfterViewChecked() {

        hljs.initHighlighting.called = false; // makes sure its initialised each time
        hljs.initHighlighting();
    }

    constructor(){
    }

}
