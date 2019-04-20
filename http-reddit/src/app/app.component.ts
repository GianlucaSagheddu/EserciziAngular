import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


 articles:Article[];   // <-- component property
 data: Object;
   loading: boolean;
   o :Observable<Article[]>;


  constructor(public http: HttpClient){
    this.makeTypedRequest();
    /*this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];*/
  }

  makeTypedRequest(): void {
    this.o = this.http.get<Article[]>('https://jsonplaceholder.typicode.com/posts');
    this.o.subscribe(data => {this.articles = data;});

   }
   //Nota bene, questo è un metodo alternativo e compatto per fare la stessa cosa di
   //makeRequest senza dichiarare la variabile Observable e creando l’arrow function
   //direttamente dentro il metodo subscribe
   makeCompactPost(): void {
   this.loading = true;
   this.http
     .post('https://jsonplaceholder.typicode.com/posts',
       JSON.stringify({
         body: 'bar',
         title: 'foo',
         userId: 1
       })
     )
     .subscribe(data => {
       this.data = data;
       this.loading = false;
     });
 }



  addArticle(userId: HTMLInputElement, id: HTMLInputElement, title: HTMLInputElement, body: HTMLInputElement): boolean {
    //console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article( Number(userId.value), Number(id.value), title.value, body.value));
    title.value = '';
    userId.value = '';
    body.value = '';
    id.value = '';
    return false;
  }

  /*sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }*/

  


  /*addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    let t = title.value;
    let v= link.value;
    console.log(`Adding article title: `+t+ ` and link: `+ v);
    //console.log(`Adding article title: `+title.value+ ` and link: `+ link.value);
    //console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }*/

}
