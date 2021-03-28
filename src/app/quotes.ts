export class Quotes {
   

  constructor(
    public name: string,
    public quote:string,
    public author: string,  
    public completeDate: Date,
    public upvotes: number,
   public downvotes: number, 
   public id:number) {
    // this.name=name
    // this.quote = quote
    // this.author = author
  }

}
