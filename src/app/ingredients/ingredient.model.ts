export interface Ingredient {
    name?: string;
    calories?: number;
    imagePath?: string;
    tags?: Tag[];
}

export interface Tag {
    name: string;
}
