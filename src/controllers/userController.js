import UserSchema from "../models/userSchema.js";

const getAll = (req, res) => {
  UserSchema.find(function (err, users) {
    if (err) {
      res.status(500).send({ message: err.nessage });
    }
    res.status(200).send(users);
  });
};

//CREATE new users
const createUser = async (req, res) => {
  try {
    const newUser = new UserSchema(req.body);
    const savedUser = await newUser.save();

    res.status(201).send({
      message: "New user created",
      statusCode: 201,
      data: savedUser,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: error.message });
  }
};

export default { getAll, createUser };
