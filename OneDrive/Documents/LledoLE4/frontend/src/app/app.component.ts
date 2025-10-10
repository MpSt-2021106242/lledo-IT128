import { Component } from '@angular/core';
import { ListPostsComponent } from './components/list-posts/list-posts.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [HttpClientModule, ListPostsComponent],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Blog Frontend';
}
