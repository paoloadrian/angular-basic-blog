import {Observable} from 'rxjs';
import { Post } from '../models/post';

const POSTS_LIST: Post[] = [
    {
        userId: 2,
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        body: "itaque id aut magnam praesentium quia et ea odit et ea voluptas et sapiente quia nihil amet occaecati quia id voluptatem incidunt ea est distinctio odio"
    }
];

export const PostServiceMock = {
    postsList: POSTS_LIST,
    getPosts: () => {
        return new Observable( (observer) => {
            observer.next(
                JSON.parse(JSON.stringify(POSTS_LIST))
            );
            observer.complete();
            return {
                unsubscribe() { }
            };
        });
    }
};
