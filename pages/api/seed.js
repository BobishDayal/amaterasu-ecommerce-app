import db from "../../utils/db";
import data from "../../utils/Data";
import Product from "../../models/Product";
import User from "../../models/User";

const handler = async (res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await db.disconnect();
  res.send({ message: "seeded successfully" });
};

export default handler;
