import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
import prisma from "../lib/prisma.js"


export const register = async (req , res) =>{
    // db operations
    const {username , email , password , gender} = req.body;
    try{
    // hash the password    
    const hashpass = await bcrypt.hash(password, 10)
    // create a new user and save it to data base

    const newUser = await prisma.user.create({
        data: {
            username, 
            email,
            password: hashpass,
        },
    });

    console.log(newUser);   
    res.status(201).json({message:"user created successfully"})
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: "failed to create user"})
        
    }
    
};

export const login = async(req , res) =>{
    const {username , password} = req.body;
    try{
        const user = await prisma.user.findUnique({
            where:{username}
        })
        if(!user) return res.status(401).json({message:"Invalid credentials"})
        
        const ispassvalid = await bcrypt.compare(password,user.password)
        if(!ispassvalid) return res.status(401).json({message:"Invalid credentials"})
        
            // generate cookies
        // res.setHeader("Set-Cookie" , "test = " + "my value").json("success")
        const age = 1000 * 60 *60 *24 * 7
        const token = jwt.sign(
            {id: user.id},
            'cahihYz@1KyQV/BS+vkGwZbeuudVWf4A2GDgj FR7t7A=' , 
        {expiresIn: age});

        const {password:userpassword , ...userinfo} = user

        res.cookie("token" , token , {
            httpOnly: true,
            maxAge: age,
            // secure:true
        }).status(200)
        .json(userinfo)
    }
    catch(err){
        console.log(err);
        res.status(500).json({message:"failed to login"})
    }

    // check if user exits
    // if yes then check the password
    // generate a cookie token and sent to the user
}

export const logout = (req , res) =>{
    res.clearCookie("token").status(200).json({message: "logout successful"})
}
