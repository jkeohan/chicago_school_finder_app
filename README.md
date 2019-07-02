# Chicago Public School Finder App

## Application Goal: 
 
The Chicago School Finder app's ultimate goal is to enable a user to input a keyword in one of (or in) multiple search boxes and return all public K-12 schools that match the keyword entered. This app was developed with a particular user in mind in an attempt to alleviate stressors associated with being a lower-income caregiver who resides in a large urban area. A common problem lower-income caregivers of school-aged children experience is having limited time, money, and/or mobility to make a well-informed decision about what school(s) the children in their care should attend. The Chicago School Finder App increases the caregiver's ability to quickly find or eliminate schools based on the school's zipcode, the school's rating, whether the school has a dress code (uniform) policy, or if a school is proximate to public transit.  

## API Used: 

The API used for this project was through [the city of Chicago website] (https://data.cityofchicago.org/). The app uses AJAX to make requests from the Chicago API to the Chicago Public School Finder App, focusing on the following search criteria: 
 
 -Zipcode
 -School Rating
 -Dress Code
 -Elevated Train Accessibility
 -Metro Bus Accessibility
 
 
## Other Frameworks used:
 
The app primarily uses bootstrap for styling, more specifically for the creation of the forms used throughut the app. The app also utilizes the JQuery javascript library to enable the app to properly display data retrieved from the Chicago API onto the browser after each AJAX request is made. 


## Changes/Improvements :

One way this app could be immediately improved is by incorporating the use of a scroll feature for all returned schools. Another useful improvement would be to create the ability for users to capture the school(s) that match the total sum of their search inputs. 
