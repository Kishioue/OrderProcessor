function createOrderProcessor() {
    let processedCount = 0; // Closure variable to keep track of processed orders

    return function processOrder(order, callback) {
        console.log(`Processing order: ${order}`);
        processedCount++;
        callback(processedCount);
    };
}

function notifyCustomer(count) {
    console.log(`Order completed. Total processed orders: ${count}`);
}

// Create an instance of the order processor
const processOrder = createOrderProcessor();

// Test by processing 3 orders
processOrder("Laptop", notifyCustomer);
processOrder("Mobile", notifyCustomer);
processOrder("Headphones", notifyCustomer);