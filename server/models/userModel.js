const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  vans: [{ type: mongoose.Types.ObjectId, ref: "Van", required: true}],
});




userSchema.statics.signup = async function (name, email, password) {

  if (!name || !email || !password) {
      
      throw Error('All fields must be filled')
  }
  
  if (!validator.isEmail(email)) {
      throw Error('Email is not valid')
  }

 
  
  if (!validator.isStrongPassword(password)) {
      throw Error('Password not strong enough')
  }


  const emailExist = await this.findOne({ email })

  if (emailExist) {
      throw Error('Email already in use')
  }

  const salt = await bcrypt.genSalt(10)
  const hash = await bcrypt.hash(password, salt)

  const user = await this.create({name, email, password: hash, vans:[]})

  return user
}

userSchema.statics.login = async function (email,password) {

  if (!email || !password) {
      
      throw Error('All fields must be filled')
  }
  
  const userExist = await this.findOne({ email })

  if (!userExist) {
      throw Error('Incorrect email')
  }

  const match = await bcrypt.compare(password, userExist.password)

  if (!match) {
      throw Error ('Incorrect password')
  }
  return userExist
}

module.exports = mongoose.model('User', userSchema)



