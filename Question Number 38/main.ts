function describeCities (city:string, country:string = "Pakistan"){
    console.log(`${city} is in ${country}`);
}
//calling a function
describeCities("Karachi");
describeCities("Istanbul","Turkey");
describeCities("Berlin","Germany");