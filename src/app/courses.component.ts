
import{Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector: 'courses',
    template: `
    {{ text | summary }} 
    `
})
export class CoursesComponent{
   text = `
        Men seni suiom! Men seni suiom! Men seni suiom! Men seni suiom!
        seni suiom!
        `
}