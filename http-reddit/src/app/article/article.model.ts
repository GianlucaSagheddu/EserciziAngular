export class Article {
  userId: number;
  id: number;
  title: string;
  body: string;
  votes: number;

  constructor(userId: number, id: number, title: string, body: string) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
    this.votes = 0;
  }

  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  // domain() is a utility function that extracts
  // the domain from a URL, which we'll explain shortly
  /*domain(): string {
    try {// e.g. http://foo.com/path/to/bar
     const domainAndPath: string = this.link.split('//')[1]; // e.g. foo.com/path/to/bar
     return domainAndPath.split('/')[0];
    }
    catch (err) {
      return null;
    }
  } */


}
