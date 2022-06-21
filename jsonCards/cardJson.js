$(document).ready(function() {
    $.getJSON("red.json", function(data) 
    {
        tempdata = data;
        let headArr = Object.keys(tempdata[0]);
        console.log(headArr);

        const cardDiv = $('#cardDiv');
        for (let i = 0; i < tempdata.length; i++) {
            const card = $('<div class="card shadow col-sm-6 m-1" style="width: 20rem;"></div>');
            const imgC = $("<img>");
            imgC.attr({
                class: "card-img-top shadow imageCard",
                src: `${tempdata[i].ImageUrl}`,
                style: "width: 16rem; height: 180px;"
            })
            const cardBody = $('<div></div>');
            cardBody.attr("class", "card-body");
            const p1 = $(`<p class="card-text fs-5">Author: ${tempdata[i].Author} </P>`);
            const p2 = $(`<p class="card-text fs-5">Genre: ${tempdata[i].Genre} </P>`);

            const p3 = $(`<p class="card-text fs-5">Rating: ${tempdata[i].Rating} </P>`);
            const p4 = $(`<p class="card-text fs-5">Available Qty: ${tempdata[i].QuantityAvailable} </P>`);
            const p5 = $(`<p class="card-text fs-5">Unit Price: ${tempdata[i].Price} </P>`);
            cardBody.append(p1);
            cardBody.append(p2);
            cardBody.append(p3);
            cardBody.append(p4);
            cardBody.append(p5);

            card.append(imgC)
            card.append(cardBody);

            cardDiv.append(card);
        }

    })
})