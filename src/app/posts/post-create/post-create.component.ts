import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from "../post.model";


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  postTitle = ''
  postContent = ''
  @Output() postCreated = new EventEmitter<Post>()

  createNewPost() {
    const createdPost : Post = {
      title : this.postTitle,
      content : this.postContent
    }
    this.postCreated.emit(createdPost)
    this.postTitle = ''
    this.postContent = ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
