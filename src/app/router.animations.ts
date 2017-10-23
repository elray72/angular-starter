/** ====================================================================================================================
 // Router.Animations
 // ================================================================================================================= */

import {trigger, state, animate, style, transition} from '@angular/animations';


export class RouterAnimations {

    animate(): void {

    }
}

export function RouterTransition() {

    function slideToTop() {
        return trigger('RouterTransition', [
            state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
            state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
            transition(':enter', [
                style({transform: 'translateY(100%)'}),
                animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
            ]),
            transition(':leave', [
                style({transform: 'translateY(0%)'}),
                animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
            ])
        ]);
    }


    return slideToTop();
}

function slideToRight() {
    return trigger('RouterTransition', [
        state('void', style({position:'fixed', width:'100%'}) ),
        state('*', style({position:'fixed', width:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateX(-100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
        ])
    ]);
}

function slideToLeft() {
    return trigger('RouterTransition', [
        state('void', style({position:'fixed', width:'100%'}) ),
        state('*', style({position:'fixed', width:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateX(100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(-100%)'}))
        ])
    ]);
}

function slideToBottom() {
    return trigger('RouterTransition', [
        state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
        state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateY(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
        ])
    ]);
}

function slideToTop() {
    return trigger('RouterTransition', [
        state('void', style({position:'fixed', width:'100%', height:'100%'}) ),
        state('*', style({position:'fixed', width:'100%', height:'100%'}) ),
        transition(':enter', [
            style({transform: 'translateY(100%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
            style({transform: 'translateY(0%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
        ])
    ]);
}