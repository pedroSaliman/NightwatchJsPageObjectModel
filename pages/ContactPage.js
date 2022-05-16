const elements={

    contactusername:{
        selector:"#FullName",
        strategy:"css selector"
    },

    themail:{
        selector:"#Email",
        strategy:"css selector"
    },
    contactmessage:{
        selector:"#Enquiry",
        strategy:"css selector"
    },
    button:{
        selector:"button[name='send-email']",
        strategy:"css selector"

    }


   




}
const commands=[{
    username(theusername){
        this.assert.visible("@contactusername")
        
       return this.setValue('@contactusername',theusername)
    },
    email(contactemail){
    
   
        this.assert.visible("@themail")
        return this.setValue('@themail',contactemail)

    },
    themessage(message){
        this.assert.visible("@contactmessage")
        return this.setValue('@contactmessage',message)

    },
    theclickbtn(){
        this.assert.visible("@button")
        return this.click("@button")
    }


    

}]





module.exports={



elements:elements,
commands:commands



}