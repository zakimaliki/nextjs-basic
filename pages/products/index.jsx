import { useRouter } from "next/router";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ModalCreate from "../../components/ModalCreate";
import Link from "next/link";
import ModalDelete from "../../components/ModalDelete";
import ModalEdit from "../../components/ModalEdit";

const products = () => {
  const router = useRouter();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get('https://seemly-business-production.up.railway.app/api/v1/products')
      .then((res) => {
        console.log(res);
        setProducts(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(process.env.REACT_APP_API_BACKEND);
  }, []);
  return (
    <div className="container">
      <h1>Product</h1>
      <ModalCreate>Create</ModalCreate>
      <table className="table table-bordered">
        <thead>
          <tr className="bg-secondary text-light text-center">
            <th scope="col">NO</th>
            <th scope="col">NAMA</th>
            <th scope="col">STOCK</th>
            <th scope="col">PRICE</th>
            <th scope="col">IMAGE</th>
            <th scope="col">DESCRIPTION</th>
            <th scope="col">ACTION</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={item.id} className="text-center">
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.stock}</td>
              <td>{item.price}</td>
              <td><a target="_blank" rel="noopener noreferrer" href={item.photo}>{item.photo}</a></td>
              <td>{item.description}</td>
              <td className="text-center">
                <Link href={`products/${item.id}`}>
                  <button
                    className="btn btn-primary"
                    style={{ marginRight: "10px" }}
                  >
                    Detail
                  </button>
                </Link>
                <ModalEdit
                  id={item.id}
                  name={item.name}
                  stock={item.stock}
                  price={item.price}
                  photo={item.photo}
                  description={item.description}
                >
                  Edit
                </ModalEdit>
                <ModalDelete id={item.id} name={item.name}>
                  Delete
                </ModalDelete>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default products;
