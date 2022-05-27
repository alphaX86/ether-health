import OrbitPost, { DBPost } from "./orbit";
export default async function handler(req,res) {
    var data;
    const body = req.body;
    if (!body.first_name || !body.last_name || !body.email || !body.password) {
        return res.status(500).json({msg: 'Details not provided!'});
      }
      data = {"_id": ID,"first_name": body.first_name, "last_name": body.last_name, "email": body.email, "password": body.password};
      const t = DBPost(data);
      console.log("Entry added");
      return res.status(200).json("Entry added to IPDB node test database");
}
