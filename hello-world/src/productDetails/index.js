import { Component } from "react";
import "./style.css";
import ProductDetails from "./product";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [
        {
          name: "Mango",
          description: "Champagne Mango",
          price: "10",
          image:
            "https://images.hindustantimes.com/img/2021/06/25/550x309/9a156550-c367-11eb-9d53-2d5cae187b44_1624624374058.jpg",
        },
        {
          name: "Apple",
          description: "Fuji Apple",
          price: "20",
          image: "https://m.media-amazon.com/images/I/61OX7dhIPVL._SL1500_.jpg",
        },
        {
          name: "Blueberry",
          description: "Blueberrry",
          price: "30",
          image: "https://static.tnn.in/photo/msid-93835504/93835504.jpg",
        },
        {
          name: "Orange",
          description: "Orange",
          price: "8",
          image:
            "https://thumbs.dreamstime.com/b/orange-fruit-isolated-white-background-109006430.jpg",
        },
        {
          name: "Pomegranate",
          description: "Pomegranate",
          price: "25",
          image:
            "https://images.healthshots.com/healthshots/en/uploads/2021/09/27184641/pomegranate-1600x900.jpg",
        },
      ],
    };
  }
  render() {
    // console.log(this.state.productData);
    return (
      <div className="container">
        <div className="box">
          {this.state.productData.map((product, index) => {
            return (
              <ProductDetails
                key={index}
                name={product.name}
                description={product.description}
                price={product.price}
                image={product.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default ProductList;
