import {Component}  from 'angular2/core';

declare var hljs : any;

@Component({
    templateUrl: './app/blog/xamarin-forms-image-swipe/xamarin-forms-image-swipe.component.html'
})
export class XamarinFormsImageSwipeComponent {

    ngAfterViewChecked() {
        hljs.initHighlighting();
    }


    constructor(){
        //alert(0);

    }

}
