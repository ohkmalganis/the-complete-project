import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { PostsInterface } from "../models/posts.interface";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private basicurl = 'https://jsonplaceholder.typicode.com/';

  constructor(
    private http: HttpClient
  ) {
  }

  getHeaders(): {} {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return {headers: headers}
  }

  getalldata(): Observable<PostsInterface[]> {
    return this.http.get<PostsInterface[]>(this.basicurl + 'posts', this.getHeaders());
  }

  getonedata(data:number): Observable<PostsInterface> {
    return this.http.get<PostsInterface>(this.basicurl + 'posts/' + data, this.getHeaders());
  }

}
