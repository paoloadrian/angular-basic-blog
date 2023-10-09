import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post/post.service';
import { Post } from '../models/post';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title: string = 'My Super Blog';
  postsList: Post[] = [];
  errorMessage: string = 'Error reading posts';
  showError: boolean = false;

  constructor(private postService: PostService, private userService: UserService) { }

  ngOnInit(): void {
    this.postService.getPosts().subscribe((response: Post[]) => {
      this.postsList = response;
    }, (error) => {
      console.error(error);
      this.showError = true;
    });
  }

  logout(): void {
    this.userService.logout();
  }
}
