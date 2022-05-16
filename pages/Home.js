const elements={

    regusterbtn:{
        selector:'.ico-register',
        strategy:"css selector"
    },


    searchinput:{
        selector:"#small-searchterms",
        startegy:"css selector"

    },
    searhcclick:{
        selector:"button[type='submit']",
        strategy:"css selector"
    },
    contactclick:{
        selector:"a[href='/contactus']",
        staategy:"css selector"
    }





}
const commands=[{
    clickbtn(){
        
       return this.click('@regusterbtn')
    },


    searchinput(productname){
return this.setValue("@searchinput",productname)
    },
    searchinputclick(){
        return this.click("@searhcclick")
    },
    contactclick(){
        this.assert.visible("@contactclick")
        return this.click("@contactclick")
    }


}]





module.exports={



elements:elements,
commands:commands



}