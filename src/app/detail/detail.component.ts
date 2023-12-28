import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit{

  constructor(private _data:DataService, private act:ActivatedRoute){}

  id:any;
  article:any;
  ngOnInit(): void {
    this.id=this.act.snapshot.paramMap.get('id');

    this._data.getArticleById(this.id).subscribe(
      res=>{
        this.article=res;
      },
      err=>{
        console.error(err);
        
      }
    )
  }

}
