    /*

        name - the name of the coffee
        pic - the picture of the coffee
        color - the color associated with the coffee
        alt - the alt tag identifying the coffee
        day - the day of the week
        desc - a description of the coffee

    */



    let myDate = new Date();

    let today = myDate.getDay();

    let coffee = "";

    //use location object to access querystring (address bar)
    const queryString = window.location.search;
        
    //output to console    
    console.log(queryString);
        
    //separate query string parameters
    const urlParams = new URLSearchParams(queryString);


    function coffeeTemplate(coffee){
        
        return`
        
        <p>
        <img src="${coffee.pic}" alt="${coffee.pic}" id="coffee" />
        <strong class="feature">${coffee.day}'s Coffee Special:</strong> ${coffee.day}'s daily coffee special is <strong class="feature">${coffee.name}</strong>, ${coffee.desc}</p>
       
       `;

    }

    //today = 3;

    if(urlParams.has("day")){//from querystring
        today = urlParams.get("day");
    }

    today = parseInt(today);

    switch(today){
        
    case 1:
        today = "Monday";


        coffee = {
            name: "Bubble Tea",
            pic: "images/bubble-tea.jpg",
            alt: "A picture of a bubble tea",
            color: "pink",
            day: "Monday",
            desc: `I love me some bubble tea!`
        };

    break;

    case 2:
        today = "Tuesday";

        coffee = {
            name: "Mocha",
            pic: "images/mocha.jpg",
            alt: "A picture of a mocha",
            color: "brown",
            day: "Tuesday",
            desc: `I love me some mocha!`
        };

    break;

    case 3:
        today = "Wednesday";
    break;

    default:
        today = "Day is unknown";
}

document.getElementById("coffee-cup").innerHTML = coffeeTemplate(coffee);

document.querySelector("html").style.backgroundColor = coffee.color;

console.log(coffee);