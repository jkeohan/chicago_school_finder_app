$(document).ready(function(){

// $('body').append("<p>JQ Works!</p>")
//********************** Zipcode Data **************************************/
let schools = [];
$('#zipcode-search').submit(function(e){
        e.preventDefault();
        // console.log("form is good!")
        const zipcodeData = $('#zip-search-request').val();
        // console.log(zipcodeData);
        const schoolRequest = {
        url: `https://data.cityofchicago.org/resource/76dk-7ieb.json?&location_zip=${zipcodeData}`, 
        success: (data)=>{
            for(let i=0; i < data.length; i ++){
                const schoolRating= data[i]; 
                console.log(schoolRating);
                console.log(schoolRating.long_name);
                if(i === 0){
                   
                    $('.firstSchool').append(schoolRating.long_name)
                }
                if(i === 1){
            
                    $('.firstSchool2').append(schoolRating.long_name)
                }
                if(i === 2){
                
                    $('.firstSchool3').append(schoolRating.long_name)
                };

            }

    },


    error: ()=>{
        console.log('bad request');

    }

    

   }     
    

$.ajax(schoolRequest)

});

});
//********************** Ratings Data **************************************/
// $(document).ready(function(){
// $('#ratings-search').submit(function(e){
//         e.preventDefault();
//         // console.log("form is good!")
//         const ratingData = $('#rating-search-request').val();
//         console.log(ratingData);
//         const ratingRequest = {
//             url: `https://data.cityofchicago.org/resource/76dk-7ieb.json?&rating_statement=${ratingData}`, 
//         success: (data)=>{
//             for(let i=0; i < data.length; i ++){
//                 const schoolRating = data[i]; 
//                 console.log(schoolRating);
//                 console.log(schoolRating.rating_statement);
//                 if(i === 0){
                   
//                     $('.ratingSchool').append(schoolRating.rating_statement)
//                 }
//                 if(i === 1){
            
//                     $('.ratingSchool2').append(schoolRating.rating_statement)
//                 }
//                 if(i === 2){
                
//                     $('.ratingSchool3').append(schoolRating.rating_statement)
//                 };

//             }
            

//     },


//     error: ()=>{
//         console.log('bad request');

//     }

    

//    }     
    

// $.ajax(ratingRequest)

// });



// });
