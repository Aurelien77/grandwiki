

const cherche =()=> {






url= "https://grandwiki.herokuapp.com/api";

const fetchGetMessageHandler = async () => { 

try {
    const response =  fetch(url,
        
        
        {
            
            method:'GET',
        
        headers:{Accept: 'application/json',
        
        'Content-Type': 'application/json'}
    
    
    
    
    }
        
        
        
        )   .then(
            
            res=>{
            
                function greet(){
                    window.location.reload()
                    console.log("Reponse OK")
                  }
                  setTimeout(greet, 6000);
                  document.getElementById("myDIV").style.display = "block"; 
          
      

      
      
         
        })
        
        
        
     
        
        
        .catch(error => console.log(error))
    
  /*   const datareponse =  response.json(); */
    


    }
    
    catch(error){
    console.log("Problème serveur la requête n'est pas partie");
    console.log(error);
    
    }
    
    
       
 
}

fetchGetMessageHandler() 

}