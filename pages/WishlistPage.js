const elements={

    quantity:{
        selector:"input.qty-input",
        strategy:"css selector"
    },

    updatelink:{
        selector:"#updatecart",
        strategy:"css selector"
    },
   textmessage:{
    selector:"div[class='page-title'] h1",
    strategy:"css selector"
   }
   




}
const commands=[{
    clearvalueq(){
        
       return this.clearValue('@quantity')
    },
    thequantity(thenumbers){
        return this.setValue('@quantity',thenumbers)

    },
    upclick(){
        this.assert.visible("@updatelink")
        return this.click('@updatelink')

    },
    getmessage(){
         this.expect.element("@textmessage").text.equal("Wishlist")
    }
 


    

}]





module.exports={



elements:elements,
commands:commands



}