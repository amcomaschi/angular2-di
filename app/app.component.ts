/**
 * Created by amcomaschi on 19/07/16.
 */
import { Component } from '@angular/core';

import { Logger } from './logger.service';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular 2 App</h1>',
    providers: [ Logger ]
})

export class AppComponent { }
