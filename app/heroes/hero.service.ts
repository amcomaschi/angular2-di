/**
 * Created by amcomaschi on 19/07/16.
 */
import { Injectable } from '@angular/core';

import { HEROES }     from './mock-heroes';

    @Injectable()
export class HeroService {
    getHeroes() { return HEROES;  }
}
