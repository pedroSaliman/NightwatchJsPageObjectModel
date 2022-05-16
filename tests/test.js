module.exports={
    before:(browser)=> {

        "this is first test case"
        browser.url("https://demo.nopcommerce.com/")
        browser
        .maximizeWindow()
    },

    "this the wishlisttestcse":async function(browser){    

        const home = await browser.page.Home();
        const p = await browser.page.Product();
        const wish = await browser.page.WishlistPage();
        //await home.clickbtn()
        await home.searchinput("mac")
        await home.searchinputclick()
        await p.clickbtn()
        await p.wishclick()
        await p.wishclickbar()
        await wish.clearvalueq()
        await wish.thequantity("3")

        await wish.upclick()
        await wish.getmessage()


    },
    "this contact case":async function(browser){

        const home = await browser.page.Home();
        const contact=await browser.page.ContactPage();
        await home.contactclick();
        await contact.username("walled");
        await contact.email("walled@gmail.com");
        await contact.themessage("this is good");
        await contact.theclickbtn();


    },
    "the compare case":async function(browser){
        const home = await browser.page.Home();
        const p = await browser.page.Product();
        const compare=await browser.page.ComparePage();

        await home.searchinput("mac")
        await home.searchinputclick()
        await p.clickbtn()
        await p.compareclick()
        await p.compareclickbar()
        await home.searchinput("asus")
        await home.searchinputclick()
        await p.clickbtn()
        await p.compareclick()
        await p.compareclickbar()
        await compare.theclickbtn()

    














        // const result = await browser.element('css selector', '.ico-register');
        // await browser.click(result)
        // const fname = await browser.element("css selector","#FirstName")
        // await browser.setValue(fname,"walled")
        // await browser.clearValue(fname)
    //     const input = await browser.element("css selector","#small-searchterms")
    //     await browser.setValue(input,"mac")
    //     const ele = await browser.element("css selector","button[class='button-1 search-box-button']")
    //     await browser.click(ele)
    //     const laplink = await browser.element("css selector","h2[class='product-title'] a")
    //     await browser.click(laplink)
    //     await browser.pause("2000")
    //    console.log (await browser.getText("#add-to-wishlist-button-4"))
    //    await browser.click("#add-to-wishlist-button-4")
    //    await browser.click("p[class='content'] a")





    //      const wishbutton= await browser.element("css selector","body > div:nth-child(6) > div:nth-child(2) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1)")

    //  console.log(await browser.getText(wishbutton))
    //  await browser.click(wishbutton)
        
      }
}