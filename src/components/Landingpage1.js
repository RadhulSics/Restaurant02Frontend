import React from "react";
import food1 from "../Assets/res1.jpeg";
import food2 from "../Assets/res2.jpg"
import food3 from "../Assets/res3.jpg";
import food4 from "../Assets/healthyfoods.jpg";
import food5 from "../Assets/pizza.webp"
import food6 from "../Assets/mojito.jpg"

function Landingpage1() {

  return (
    <div> 
      
        <div className="img1">
     
          <img src={food3} style={{width:"100%",height:"auto"}} />
         <div
         style={{
          position:"absolute",
          top:"40%",
          left:"50%",
          transform:"translate(-50%, -50%)",
          textAlign:"center",
          color:"White",
          fontSize:"4em",
          fontWeight:"bold",
          fontFamily:"Dancing Script",
          textShadow:"2px 2px 4px rgba(0,0,0,5)",
         }}
         >
          WELCOME NILA RESTAURANT
          </div>
          <div
          style={{
            position:"absolute",
            top:"50%",
            left:"50%",
            transform:"translate(-50%, -50%)",
            textAlign:"center",
            color:"rgba(189, 201, 212, 0.694)",
            fontSize:"2rem",
            fontfamily: "Slabo 27px",
            textShadow:"2px 2px 4px rgba(0,0,0,10)",
           }}>
            Tasty Food In Afforadle Price
          </div>
        
        </div>
        <div className="img2" style={{ position: "relative", display: "inline-block" }}>
    <img src={food2} style={{ width: "100%", height: "auto" }} />
    <div className="card mb-3" style={{ maxWidth: "1240px", position: "absolute", bottom: "55rem", left: 0,marginLeft:"10rem",backgroundColor:"transparent" ,color:"white"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={food4} className="img-fluid rounded-start" alt="..." style={{height:"200px",width:"300px"}}/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title" style={{fontFamily:"Lugrasimo"}}>FRUIT</h3>
                    <h5 className="card-text" style={{fontFamily:"Oleo Script"}}>Fruits are the means by which flowering plants (also known as angiosperms) 
                    disseminate their seeds. Edible fruits in particular have long propagated using the movements of humans and other animals
                     in a symbiotic relationship that is the means for seed dispersal for the one group and nutrition for the other; 
                     humans and many other animals have become dependent on fruits as a source of food. Consequently, fruits account for a 
                     substantial fraction of the world's agricultural output, and some  have acquired extensive 
                     cultural and symbolic meanings.</h5>
                    <p className="card-text" style={{color:"gray"}}><small className="text-body-secondary" >Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" >
        <div className="row g-0">
            <div className="col-md-4" style={{ maxWidth: "1240px", position: "absolute", bottom: "30rem", left: 0,marginLeft:"30rem",backgroundColor:"transparent" ,color:"white"}} >
            <h3 className="card-title" style={{fontFamily:"Lugrasimo"}}>PIZZA</h3>
                    <h5 className="card-text" style={{fontFamily:"Oleo Script"}}> pizza-like foods can be found throughout ancient history. 
                    In the 6th century BC, the Persian soldiers of the Achaemenid Empire during the rule of Darius
                    the Great baked flatbreads with cheese and dates on top of their battle shields and the ancient Greeks 
                    supplemented their bread with oils, herbs, and cheese. An early reference to a pizza-like food occurs in the Aeneid,
                    foretells that the Trojans would not find peace until they are forced by hunger to eat their tables.</h5>
                    <p className="card-text" style={{color:"gray"}}><small className="text-body-secondary" >Last updated 3 mins ago</small></p>
                
            </div>
            <div className="col-md-8" style={{ maxWidth: "1240px", position: "absolute", bottom: "30rem", left: 0,marginLeft:"80rem",backgroundColor:"transparent" ,color:"white"}}>
                <div className="card-body">
                <img src={food5} className="img-fluid rounded-start" alt="..." style={{height:"200px",width:"300px"}}/>
                </div>
            </div>
        </div>
    </div>

    <div className="card mb-3" style={{ maxWidth: "1240px", position: "absolute", bottom: "10rem", left: 0,marginLeft:"10rem",backgroundColor:"transparent" ,color:"white"}}>
        <div className="row g-0">
            <div className="col-md-4">
                <img src={food6} className="img-fluid rounded-start" alt="..." style={{height:"200px",width:"300px"}}/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h3 className="card-title" style={{fontFamily:"Lugrasimo"}}>MOJITO</h3>
                    <h5 className="card-text" style={{fontFamily:"Oleo Script"}}>When preparing a mojito, fresh lime juice is added to sugar (or to simple syrup) and mint leaves. 
                    The mixture is then gently mashed with a muddler. The mint leaves should only be bruised to release the essential oils and 
                    should not be shredded. Then rum is added and the mixture is briefly stirred to dissolve the sugar and to lift the mint leaves 
                    up from the bottom for better presentation. Finally, the drink is topped with crushed ice and sparkling soda water. 
                    Mint sprigs or lime wedges are used to garnish the glass.</h5>
                    <p className="card-text" style={{color:"gray"}}><small className="text-body-secondary" >Last updated 3 mins ago</small></p>
                </div>
            </div>
        </div>
    </div>
</div>
        <div className="img3">
          <img src={food1} style={{width:"100%",height:"auto"}}/>
        </div>
    </div>
  );
}

export default Landingpage1;
