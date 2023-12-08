import Review from "../datatypes/reviews";


const reviews: Review[] = [ 


 { id: 2, 
 rating: 5, 
 name: "Jane Doe",
    occupation: "ML Engineer",
 comment:  "Derma AI is like having a skincare expert in my pocket. The intuitive interface makes it easy to input information, and the AI's recommendations are spot-on. It's the future of dermatology – accessible, reliable, and surprisingly personal. My skin has never been happier",
 date: new Date(), 
 imgUrl: "https://i.ibb.co/NCpZNrf/PSX-20230511-214524.jpg", },
 
 {
 id: 3, 
 rating: 3, 
    occupation: "driver",
comment: " Impressed by the precision of Derma AI! It accurately diagnosed my skin concern and provided tailored advice that I could understand. The convenience of having a virtual dermatologist is unmatched. I've recommended it to all my friends looking for smart skincare solutions", 
 date: new Date(), 
 name: "Jane Doe",
 imgUrl:  "https://i.ibb.co/8b8NJBN/PSX-20230511-214634.jpg", }, ];


 export default reviews;