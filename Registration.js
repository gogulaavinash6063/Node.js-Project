const express=require("express")
const mysql=require("mysql")
const app=express()
const db=mysql.createConnection({
    host:"nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com",
    user:"candidate",
    password:"NoTeDeSt^C10.6?SxwY882}",
    database:""
})
db.connect((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})
app.get("/api/getVendorUsers",(req,res)=>{
    const{purchaseRequestId,custOrgId}=req.query
    if(!purchaseRequestId||custOrgId){
        console.log("parameters not found")
        res.send("parametrs not found").status(400)
        res.send("parametrs not found").status(400)
    }
    else{
        console.log("parameters found")
    }
    const query="select *from PrLineItems where purchaseRequestId=? and custOrgId=?";
    db.query(query,[purchaseRequestId,custOrgId],(err,results)=>{
        if(err){
            res.send(err)
        }
        const suppliers=results.map((row)=>row.suppliers).join(",")
        const UniqueSuppliers=array.form(new setImmediate(suppliers.split(",")))
        const VendorUsersQuery="select UserName,Name from VendorUsers where VendorOrganizationId =? and role=?";
        db.query(VendorUsersQuery,[UniqueSuppliers,admin],(req,res)=>{
            if(err){
                console.log(err)
                res.status(400).sen(err)
            }
        })
        res.json({Suppliers:UniqueSuppliers})
        res.json({VendorUsersQuery})
    })

})
app.listen(3000,()=>{
    console.log("server Running")
})