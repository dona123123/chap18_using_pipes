import { Pipe } from "@angular/core";
import { Product } from "./product.model";

@Pipe({
    name: "filter",
    pure: false
})
export class PaCategoryFilterPipe{

    transform( products: Product[], category: string): Product[]{
        console.log("L11 catFitler.pipe =" + category);
        return category == undefined? 
            products :  products.filter( p => p.category==category);
    }
}