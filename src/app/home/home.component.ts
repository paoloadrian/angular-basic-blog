import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'Awesome blogs over here';
  postsList: Post[] = [];
  errorMessage: string = 'Error reading posts';
  showError: boolean = false;

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((response: Post[]) => {
      this.postsList = response;
    }, (error) => {
      console.error(error);
      this.showError = true;
    });
  }

}
