export class Quotes {
    showauthor: boolean;

  constructor(public id: number , public quote: string,public author: string, public like:number, public dislike:number,public submission:string, public post:Date ){
    this.showauthor=false;
  }
}