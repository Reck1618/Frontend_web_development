// OOP and this keyword

var purchase = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        var calculation = this.shoes * this.stateTax
        console.log('Total Price:', calculation)
    }
}

purchase.totalPrice()