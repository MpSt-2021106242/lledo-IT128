import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../models/post.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-posts',
  imports: [CommonModule],
  templateUrl: './list-posts.component.html',
  styleUrl: './list-posts.component.css'
})
export class ListPostsComponent implements OnInit{
posts?: Post[] = [];

constructor(private http: HttpClient) {}

ngOnInit(): void {
  this.initData();
}
initData(): void{
  this.http.get<Post[]>('http://localhost:5049/api/post')
  .subscribe({
    next:(data:Post[]) =>{
      this.posts=data;
      console.log(this.posts);
    }
  })
}
}
