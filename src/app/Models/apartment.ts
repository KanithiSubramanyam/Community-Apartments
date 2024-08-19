
export class Apartment{
    constructor(
        public name: string,
        public price: string,
        public availability: string,
        public imageUrl: string,
        public features: string[],
        public description: string,
        public amenities: string[],
        public houseRules: string[],
        public cancellation: string,
        public icons: string[]
    ){}
}