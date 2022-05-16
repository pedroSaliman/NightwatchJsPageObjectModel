const elements={

    lablink:{
        selector:"h2[class='product-title'] a",
        startegy:"css selector"
    },

    wishlink:{
        selector:"#add-to-wishlist-button-4",
        startegy:"css selector"
    },
    wishlinkbar:{
        selector:"p[class='content'] a",
        startegy:"css selector"
    },
    comparelink:{
        selector:"div[class='compare-products'] button[type='button']",
        strategy:"css selector"
    },

comparelinkbar:{
    selector:"p[class='content'] a",
    strategy:"css selector"

}
   




}
const commands=[{
    clickbtn(){
        
       return this.click('@lablink')
    },
    wishclick(){
        return this.click('@wishlink')

    },
    wishclickbar(){
        return this.click('@wishlinkbar')

    },

compareclick(){
    this.assert.visible("@comparelink")
    return this.click("@comparelink")

},
compareclickbar(){
    this.assert.visible("@comparelinkbar")
    return this.click("@comparelinkbar")

}
    

}]





module.exports={



elements:elements,
commands:commands



}