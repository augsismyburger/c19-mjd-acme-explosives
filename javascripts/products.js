"use strict";

// REAL STUFF STARTS HERE
function getProds(groupData) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'jsons/products.json',

            success: (data) => {
                // console.log(data);
                groupData.push(data);
                resolve(groupData);
            }
        }).fail(() => {
            reject(new Error('error', request.statusText))
        });
    });
}
module.exports = {getProds};
