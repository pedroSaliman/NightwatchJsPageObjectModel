const elements={

    clear:{
        selector:".clear-list",
        startegy:"css selector"
    },

   

   




}
const commands=[{

    theclickbtn(){
        this.assert.visible("@clear")
        return this.click("@clear")
    }


    

}]





module.exports={



elements:elements,
commands:commands



}