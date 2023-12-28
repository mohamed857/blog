import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AngularEditorModule } from '@kolkov/angular-editor';

@Component({
  selector: 'app-createarticle',
  standalone: true,
  imports: [FormsModule,AngularEditorModule],
  templateUrl: './createarticle.component.html',
  styleUrl: './createarticle.component.css'
})
export class CreatearticleComponent {

  constructor(private _data:DataService,private _auth:AuthService,private router:Router){}

  article={
    title: '',
    description: '',
    content: '',
    image: '',
  }
  tags:any[]=[];

  tag:any='';

  select=(e:any)=>{
    this.article.image=e.target.files[0];
  };

  createArticle=()=>{
    let fd = new FormData();
    fd.append('title',this.article.title);
    fd.append('content',this.article.content);
    fd.append('tags',this.tags.toString());
    fd.append('description',this.article.description);
    fd.append('image',this.article.image);
    fd.append('idAuthor',this._auth.getAuthorDataFromToken()._id);

    this._data.createArticle(fd).subscribe(
      res=>{
        this.router.navigate(['/home'])
      },
      err=>{
        console.error(err);
        
      }

    )
  }

}
