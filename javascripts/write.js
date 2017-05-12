"use strict";

function print(groupData) {
    let categories = groupData[0].categories;
    let types = groupData[1].types;
    let products = groupData[2].products;
    let numHolder;
// SETTING UP SELECTOR
    $('#main-products').html(
    `<h4>Category Select</h4><select><option id="0"class="opt" value="${categories[0].name}">${categories[0].name}</option><option id="1" class="opt" value="${categories[1].name}">${categories[1].name}</option></select><button id="sort">Sort</button>`);
    $(document).ready(function() {
    $('select').material_select();
    });
    // CLICK FUNCTION
    $('#sort').click(() => {
        let options = $('.opt');
        for (let i = 0; i < options.length; i++) {
                // GRABBING CATEGORY
            if (options[i].selected === true) {
                numHolder = options[i].id;
            }
        }
        // SETTING UP TABLE
        let toWrite = "";
        toWrite += `<div><table><thead><tr><th>Cat..</th><th>Type<th>Item</th><th>Description</th></tr></thead><tbody>`;
        // CHECKING PRODUCT CAT AND SORTING AND SETTING TABLE
        for (let i = 0; i < products.length; i++) {
            for (let j in products[i]) {
                if(products[i][j].type == numHolder) {
                    toWrite +=  `<tr><td>${categories[products[i][j].type].name}</td>`;
                    toWrite += `<td>${types[products[i][j].id].name}</td>`;
                    toWrite += `<td>${products[i][j].name}</td>`;
                    toWrite += `<td>${products[i][j].description}</td></tr>`;
                }
            }
        }
        toWrite += `</div>`
        $('#print-area').html(
        toWrite);
    });
}
module.exports = {print};
