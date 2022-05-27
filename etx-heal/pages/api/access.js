import { DBGet } from "./orbit";

export default function handler(req,res) {
    var data;
    
    const body = req.body;
    if (!body.hash) {
        return res.status(500).json({msg: 'ID not provided!'});
      }
      data = {"id": body.hash};
      const res1 = DBGet(data.hash);
      console.log(res1);
      return res.status(200).json({msg: 'Success'});
}
