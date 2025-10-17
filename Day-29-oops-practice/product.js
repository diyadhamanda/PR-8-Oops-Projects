class Product{
    constructor(name, price, category, stock = 0){
         this.name = name;
        this.price = price;
        this.category = category;
        this.stock = stock;
        this.sku = this.generateSKU(); 
    }
    
    generateSKU() {
        const prefix = this.category.slice(0, 3).toUpperCase();
        const random = Math.random().toString(36).substr(2, 6).toUpperCase();
        return `${prefix}-${random}`;
    }    
    
    updateStock(quantity) {
        if (this.stock + quantity < 0) {
            throw new Error('Insufficient stock');
        }
        this.stock += quantity;
        console.log(`Stock updated: ${this.stock} units available`);
    }

    applyDiscount(percentage) {
        if (percentage < 0 || percentage > 100) {
            throw new Error('Invalid discount percentage');
        }
        this.price = this.price * (1 - percentage / 100);
        return this.price;
    }
}

const laptop = new Product('MacBook Pro', 1999, 'electronics', 10);
laptop.updateStock(-2); 
laptop.applyDiscount(10);
console.log(laptop.sku);