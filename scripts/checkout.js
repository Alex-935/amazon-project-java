import {renderOrderSummary} from "./checkout/orderSummary.js";
import {renderPaymentSummary} from "./checkout/paymentSummary.js";
import {loadProductsFetch} from "../data/products.js";
import {loadCart} from "../data/cart.js";
//import '../data/cart-oop.js';
//import '../data/backend-practice.js';


async function loadPage() {

    try {

        //create our own errors
        //throw 'error1';

        //await will make the function wait for asyncrynois code to finish
        await loadProductsFetch();

        const value = await new Promise((resolve, reject) => {

            //throw 'error2;

            loadCart(() => {
                //reject('error3'); if created asyncronously
                resolve('value3');
            });
        });

    } catch (error) {
        console.log('Unexpected Error. Please try again later.');
    }

    renderOrderSummary();
    renderPaymentSummary();
};

loadPage();

/*
//async makes a function return a promise
async function loadPage() {

    console.log('Load Page');
    return 'value2'
};
loadPage((value) => {
    console.log('next step');
    console.log(value);
});
*/


/*
//waits for all promises to finish before going to next step
Promise.all([

    loadProductsFetch(),//as returns product

    new Promise((resolve) => {
        loadCart(() => {
            resolve('value2');
        });
    })

]).then((values) => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

//promise will run the function it's given immediately
//resolve allows you to control when to go to the next step
/*
new Promise((resolve) => {
    //console.log('start promise')
    loadProducts(() => {
        //console.log('finished loading')
        resolve('value1');
        //whatever's given to resolve is the parameter of then
    });
}).then((value) => {
    //console.log('next step')
    return new Promise((resolve) => {
        loadCart(() => {
            resolve();
        });
    })
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/



//Promises prevent nesting from repeated callbacks
//promises split the code into strands when resolve is called
//one strand will run like normal and the .then() strand will wait for a response


/*
loadProducts(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/