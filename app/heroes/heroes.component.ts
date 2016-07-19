/**
 * Created by amcomaschi on 19/07/16.
 */
import { Component }          from '@angular/core';

import { HeroService }        from './hero.service';
import { HeroListComponent } from './hero-list.component';

@Component({
    selector: 'my-heroes',
    template: `
          <h2>Heroes</h2>
          <hero-list></hero-list>
    `,
    directives: [HeroListComponent],
    providers: [HeroService] 
})

export class HeroesComponent { }
