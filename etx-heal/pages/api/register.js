import gun from 'gun/gun'
const api = process.env.NEXT_PUBLIC_API_URL;

const Gun = gun(['http://localhost:8765/gun', 'https://gun-manhattan.herokuapp.com/gun']);
export default function handler(req,res) {
    var data;
    var dat = Gun.get('dat');
    const body = req.body;
    if (!body.first_name || !body.last_name || !body.email || !body.password) {
        return res.status(500).json({msg: 'Details not provided!'});
      }
    
      res.status(200).json({name: `${body.first_name} ${body.last_name}`});
      data = {"first_name": body.first_name, "last_name": body.last_name, "email": body.email, "password": body.password};
      dat.put(data);
      console.log("Entry added");
}
