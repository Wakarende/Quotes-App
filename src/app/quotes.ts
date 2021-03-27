export class Quotes {
  public name: string;
  public quote: string;
  public author: string;
  public like:number;
  public dislike:number;
 
  

  constructor(name,quote,author,like,dislike) {
    this.name=name
    this.quote = quote
    this.author = author
    this.like= like
    this.dislike = dislike
  }

}
