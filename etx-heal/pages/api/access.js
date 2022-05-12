import gun from 'gun/gun'
const api = process.env.NEXT_PUBLIC_API_URL;

const Gun = gun(['https://gun-db.herokuapp.com/gun']);
export default function handler(req,res) {
    var data;
    var dat = Gun.get('quick');
    const body = req.body;
    if (!body.hash) {
        return res.status(500).json({msg: 'Details not provided!'});
      }
      data = {"hash": body.hash};
      var res1 = dat.get(hash);
      console.log(res1);
      return res.status(200).json({msg: 'Success'});
}
