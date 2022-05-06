import gun from 'gun/gun'
const api = process.env.NEXT_PUBLIC_API_URL;

const Gun = gun(['http://localhost:8765/gun', 'https://gun-manhattan.herokuapp.com/gun']);
export default function handler(req,res) {
    var data;
    var dat = Gun.get('dat');
    const body = req.body;
    if (!body.email || !body.password) {
        return res.status(500).json({msg: 'Details not provided!'});
      }
    
      data = {"email": body.email, "password": body.password};
      var res1 = dat.get('email').put(null);
      console.log(res);
      return res.status(200).json({msg: 'Entry added'});
}
