export interface Product {
  id: number;
  name: string;
  supplierId: number;
  category: string;
  image: string;
  available: boolean;
  description: string;
  numberOfSales:number;
}
