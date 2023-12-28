import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.css'
})
export class BlogListComponent implements OnInit{
  articles :any;
  constructor(private _data: DataService){}
  ngOnInit(): void {
    this._data.getAll().subscribe(
      res=>{
        this.articles=res
      },
      err=>{
        console.error(err);
        
      }
    )
  }

}
