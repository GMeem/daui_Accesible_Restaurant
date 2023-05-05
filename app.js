
//--------------- theme --------------

var switcher = document.getElementById('themeBtn');
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);

});

//-------------- open json and make cards ---------------

var i = 0; //index

fetch('yelp_result12.json')
  .then(response => response.json())
  .then(data => {

    var restaurant_div = document.getElementById('restaurant_div');

    // create a new row div
    var row = document.createElement('div');
    row.classList.add('row')

    // iterate through the file and add the business
    data.businesses.forEach(business => {

        i = i + 1;

        //create a card with image, rating, categories, address, and descriptopm 
        row.innerHTML += `
            <div class = "card col-md m-2" tabindex="4">
                <img class = "card-img-top" src = "${business.image_url}" alt = "business.image_alt">
                <div class = "card-body ">
                    <h3 class="card-title"> ${business.name} </h3>
                    <p class="card-text lead" id="list-rating">Rating: ${business.rating}</p>
                    <p class="card-text lead" id="list-category">Category: ${business.categories.map(category => `<span class="cat">${category.title}</span>`).join(' ')}</p>
                    <p class="card-text lead" id="list-address">Address: ${business.location.display_address.join(', ')} </p>
                    <p class="card-text lead">Description: ${business.description}</p>
                </div>
            </div>
            `

        // if three cards are in a row create a new row
        // add the row to the row to the restaurant_div
        if(i%3 === 0){
            restaurant_div.appendChild(row);
            row = document.createElement('div');
            row.classList.add('row')
        } else {
            restaurant_div.appendChild(row);
        }
    });
})
.catch(err => console.error(err));

//------------ submit button --------------

var submitBtn = document.getElementById('submitBtn');
submitBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('emailTextArea').value="";
    document.getElementById('CommentTextarea1').value="";
});