import db from "../models/index.js";

// create man models
const Product = db.products;
const Review = db.reviews;

// main work

// 1. create product
const addProduct = async (req, res) => {
  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false,
  };

  const product = await Product.create(info);
  res.status(201).send(product);
  console.log(product);
};

// 2. get all products
const getAllProducts = async (req, res) => {
  let products = await Product.findAll();
  res.status(200).send(products);
};

// 3. get single product
const getOneProduct = async (req, res) => {
  let id = req.params.id;
  let product = await Product.findOne({ where: { id: id } });
  res.status(200).send(product);
};

// edit product
const updateProduct = async (req, res) => {
  let id = req.params.id;
  const product = await Product.update(req.body, { where: { id: id } });
  res.status(200).send(product);
};

// delet product
const deleteProduct = async (req, res) => {
  let id = req.params.id;
  await Product.destroy({ where: { id: id } });
  res.status(204).json({"message": "Product is deleted"});
};

// published product
const getPublishedProduct = async (req, res) => {
  let products = await Product.findAll({ where: { published: true } });
  res.status(200).send(products);
};

export default {
  getAllProducts,
  getOneProduct,
  addProduct,
  updateProduct,
  deleteProduct,
  getPublishedProduct,
};
