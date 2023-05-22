const{test,expect}=require("@playwright/test")

test.skip("Get Api call and check data",async function({request}){
    const response=await request.get('https://api.plentys.pk/api/v1/public/bestseller/newproduct?cityId=1')
    console.log(await response.json())
    

   

})

test("Post Api call in contact us form",async function({request}){
    const response=await request.post('https://api.plentys.pk/api/v1/public/help/contactUs',{
        data:{
            "name":"sdsad",
            "email":"sohailalimoigmail.com",
            "message":"sdsdsdsdsd"
        }
    })
    console.log(await response.json())
    

   

})