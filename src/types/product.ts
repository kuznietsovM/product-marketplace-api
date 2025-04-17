export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  averageCategoryRate?: number;
}
interface Rating {
  rate: number;
  count: number;
}

export type NewProductFakestoreResponse = Omit<
  IProduct,
  'rating' | 'averageCategoryRate'
>;
