import gun from 'gun/gun'
const api = process.env.NEXT_PUBLIC_API_URL;

const Gun = gun(['https://gun-db.herokuapp.com/']);
export default function handler(req,res) {
    var data;
    var dat = Gun.get('dat');
    const body = req.body;
    if (!body.email || !body.password) {
        return res.status(500).json({msg: 'Details not provided!'});
      }
      data = {"email": body.email, "password": body.password};
      var t = dat.get('users').get('email');
      if(t === data.email)
      {
        return res.status(200).json({t});
      }
      else
      {
        return res.status(500).json("Not found!");
      }
}
