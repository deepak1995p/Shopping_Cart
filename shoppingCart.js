
    var test = (function() {
        var cart = [];
        var obj = {};
        obj.addItem = function(name) {
            cart.push(name);
            //  alert(cart);
            console.log(cart);
        }
        obj.countItem = function() {
            console.log("total item in cart " + cart.length);
        }
        obj.deleteItem = function(name) {
            cart.pop(name);
            console.log(cart);
        }
        obj.display = function() {
            calc = 0;
            for (var i = 0; i < cart.length; i++) {
                if (cart[i] === "Banana") {
                    calc += 70;
                } else if (cart[i] === "Apple") {
                    calc += 100;
                } else if (cart[i] === "Grapes") {
                    calc += 80;
                } else if (cart[i] === "Mango") {
                    calc += 40;
                }
            }
            console.log("total cart value is : Rs." + calc);
        }
        return obj;
    })();
    test.addItem("Banana");
    test.addItem("Apple");
    test.addItem("Grapes");
    test.addItem('Mango');
    // test.deleteItem();
    // test.deleteItem();
    test.countItem();
    test.display();
    console.log(test.cart);
