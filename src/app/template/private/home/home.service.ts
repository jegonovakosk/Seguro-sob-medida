import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../../shared/models/post.interface';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.interface';

@Injectable({
    providedIn: 'root'
})
export class HomeService {

    constructor(private readonly http: HttpClient) {
    }

    getUser(): Observable<User> {
        return this.http.get<User>('assets/mocks/user.json');
    }

    getPosts(): Observable<Post[]> {
        return this.http.get<Post[]>('assets/mocks/posts.json');
    }


}
