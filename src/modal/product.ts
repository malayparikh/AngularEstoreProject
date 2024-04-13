export class Product{

  pid:number;
  name:string;
  price:number;
  ratings:number;

  constructor(pid:number,name:string,price:number,ratings:number){

    this.pid=pid;
    this.name=name;
    this.price=price;
    this.ratings=ratings;
  }
  showProduct(){
    console.log("[Product]: "+this.pid+" "+this.name+" "+this.price+" "+this.ratings);
  }

}

