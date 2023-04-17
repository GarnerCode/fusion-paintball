export interface Product {
    id: string,
    name: string,
    price: number,
    category: string,
    manufacturer: string,
    colors: Array<Color>,
    selectedColor?: Color,
}

export interface Color {
    color: string,
    imageUrl: string,
    defaultColor: boolean,
}