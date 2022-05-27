import { DBGet, DBPost } from "./orbit";
export default function handler(req,res) {
    const body = req.body;
    if (!body.email || !body.password) {
      return res.status(500).json({msg: 'Details not provided!'});
    }
    var data = {"email": body.email, "password": body.password};
    const t = DBGet(data.email);
    return res.status(200).json("Entry found!");
}
