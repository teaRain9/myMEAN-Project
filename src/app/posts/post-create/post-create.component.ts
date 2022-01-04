import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Post} from "../post.model";
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  postTitle = ''
  postContent = ''
  @Output() postCreated = new EventEmitter<Post>()

  createNewPost(form : NgForm) {
    if (form.invalid) {
      return;
    }
    const createdPost : Post = {
      title : form.value.title,
      content : form.value.content
    }
    this.postCreated.emit(createdPost)
    form.resetForm()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
