const jwt = require("jsonwebtoken")
const secret_key = "mern-market"

const auth = async(req,res, next) => {

    //GETの場合はログイン不要
    if(req.method === "GET"){
        return next()
    }

    //トークンを受け取る
    // const token = await req.headers.authorization.split(" ")[1]
    // const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTc1NzA3ODQxMywiZXhwIjoxNzU3MTYxMjEzfQ.0-QAMFVM9KMXzq7C_YKhQJRKdECN8h8JHQM2M0fMxgw"
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXIxQGdtYWlsLmNvbSIsImlhdCI6MTc1NzE2NDQ2NSwiZXhwIjoxNzU3MjQ3MjY1fQ.n7TjzK-Ps1tI3c5Crc5odBBFwBRjrjgK2YMZlovwdFs"

    //トークンが無い場合
    if(!token){
        return res.status(400).json({message: "トークンがありません"})
    }

    //トークンの検証
    try{
        const decoded = jwt.verify(token, secret_key)
        // console.log(decoded.email)
        req.body.email = decoded.email
        return next()
    }catch(err){
        return res.status(400).json({message: "トークンが正しくないので、ログインしてください"})
    }
}

module.exports = auth