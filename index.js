/**
 * plusopration, operasi tambah
 * 
 * @param {Number} num1 
 * @param {Number} num2 
 * @returns {Number}
 */
function plusopration(num1,num2){
    complex(num1,num2);
    return num1+num2;
}

// /**
//  * @typedef {Object} Address
//  * @property {String} city
//  * @property {String} province
//  * @property {String} zipcode
//  */


// /**
//  * @typedef {Object} Profile
//  * @property {String} name
//  * @property {Address} address
//  * @property {Array} role
//  */

// /**
//  * 
//  * @param {Profile} var1 
//  * @returns 
//  */

/**
 * 
 * @param {import("../type").Profile} var1 
 * @param {import("../type").Address[]} var2
 */
function complex(var1,var2){
    console.log(var1.name)
    var2.map(item=>{
        console.log(item.city)
    })
}

/**
 * 
 * @type {import("../type").Address[] }
 */
let address;
address.map((item)=>{
    console.log(item.city)
})