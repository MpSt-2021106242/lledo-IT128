import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from '../../models/post.model';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-post-detail',
  imports: [],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css'
})
export class PostDetailComponent implements OnInit {
private routeSub: Subscription = new Subscription();
private id: number = 0;

post?: Post;

constructor(
  private route: ActivatedRoute,
  private http: HttpClient
){ }

ngOnInit(): void{
  this.routeSub = this.route.params.subscribe(params =>{
    this.id = params['id'];
  })
  this.initData();
}

initData(): void{
  this.http.get<Post>("http://localhost:5049/api/post/" + this.id).subscribe({
    next:(data:Post) =>{
      this.post = data;
      console.log(this.post);
    }
  })
}
}
