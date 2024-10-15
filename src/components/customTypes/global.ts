export type FeaturedProduct = {
  id: string;
  title: string;
  handle: string;
  thumbnail?: string;
};

export type ProductPreviewType = {
  id: string;
  title: string;
  handle: string | null;
  thumbnail: string | null;
  created_at?: Date;
  price?: {
    calculated_price: string;
    original_price: string;
    difference: string;
    price_type: "default" | "sale";
  };
  isFeatured?: boolean;
};

export type ProductCollectionWithPreviews = Omit<
  [],
  "products"
> & {
  products: ProductPreviewType[];
};

export type InfiniteProductPage = {
  response: {
    products: [];
    count: number;
  };
};

// Use `object` instead of `Object` in `CartWithCheckoutStep`
export type CartWithCheckoutStep = Omit<
  object,
  "beforeInsert" | "beforeUpdate" | "afterUpdateOrLoad"
> & {
  checkout_step: "address" | "delivery" | "payment";
};

// Use `string` instead of `String`
export type ProductCategoryWithChildren = Omit<
  string,
  "category_children"
> & {
  category_children: [];
  category_parent?: [];
};
