import { Component } from '@angular/core';
import { CoverComponent } from "./cover/cover.component";
import { BlogListComponent } from "./blog-list/blog-list.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CoverComponent, BlogListComponent]
})
export class HomeComponent {

}
