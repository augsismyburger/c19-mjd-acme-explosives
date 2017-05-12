"use strict";

// REAL STUFF STARTS HERE
function getTypes(grandData) {
    return new Promise((resolve, reject) => {
        $.ajax({
            url: 'jsons/types.json',

            success: (data) => {
                // console.log(data);
                let parentData = data;
                let groupData = [grandData, parentData];
                resolve(groupData);
            }
        }).fail(() => {
            reject(new Error('error', request.statusText))
        });
    });
}
module.exports = {getTypes};
