import { Component } from "react";
import "./cards.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addcart } from "../redux/productslice";

const mapDispatchToProps = (dispatch)=>{
  return {
    addcart:(data)=>dispatch(addcart(data))
  }
}
class GeneralCards extends Component {
  // addcart=(products)=>{
  //   this.props.addcart(products)
  // }
  
  render() {
    return (
      <div className={this.props.classname}>
        <div className="cardimg">{this.props.image}</div>
        <h4> {this.props.name ? this.props.name : ""} </h4>
            <p className="cardpara">
          {this.props.description ? this.props.description : ""}
        </p>
        {this.props.price ? (
            <>
               <div className="carddiv">
            <p>
              <b> price</b>:{this.props.price}
            </p>
            <p> {this.props.discount}</p>
            <p>
              <b>Rating</b>:{this.props.rating}
            </p>
          </div>
           <button onClick={()=>this.props.addcart(this.props.cartproduct)} className="buybutton">
            Add to cart
          </button>
            </>
       
        ) : (
          ""
        )}
          <Link
          to={`/${this.props.comppath}`}
          state={{ category: this.props.name,cartitem:this.props.cartproduct }}
        >
          <button className="cardbutton">
            {this.props.button ? this.props.button : "check products"}{" "}
          </button>
         
        </Link>
       
      </div>
    );
  }
}

export default connect(null,mapDispatchToProps)(GeneralCards);
