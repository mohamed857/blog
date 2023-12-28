import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './author.component.html',
  styleUrl: './author.component.css'
})
export class AuthorComponent implements OnInit{

  id: any;
  author :any;
  articles:any;
  constructor(private _auth:AuthService, private act: ActivatedRoute,private _data:DataService){}

  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');
    this._auth.getById(this.id).subscribe(
      res=>{
        this.author=res;
      },
      err=>{
        console.error("error on getauthor: "+err);
      }
    );

    this._data.getArticleByAuthorId(this.id).subscribe(
      res=>{
        this.articles=res;
      },
      err=>{
        console.error("error on getauthor: "+err);
      }
    )

    this
  
}
image : any;
select=(e:any)=>{
  this.author.image=e.target.files[0];
}

}
