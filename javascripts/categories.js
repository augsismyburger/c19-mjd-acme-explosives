"use strict";

// REAL STUFF STARTS HERE
let getCategories = () => {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'jsons/categories.json',

            success: (data) => {
                // console.log(data);
                resolve(data);
            }
        }).fail(() => {
            reject(new Error('error', request.statusText))
        });
    });
}
module.exports = {getCategories};
