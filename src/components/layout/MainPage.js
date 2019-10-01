import React, { Component } from 'react';
import {AddItem} from "./AddItem";
import {ItemCard} from "./ItemCard";



class MainPage extends Component {
    state = {
                product: "",
                name: "",
                price: "",
                filterItemId: undefined,
                items: [
                    {id:1,product:'Winter body', name: "test1", price:110},
                    {id:2,product:'Adidas', name: "test2", price:80},
                    {id:3,product:'Vans', name: "test3",price:120},
                    {id:4,product:'White', name: "test4", price:260},
                    {id:5,product:'Cropped-sho', name: "test5", price:160},
                    {id:6,product:'Blues', name: "test6",price:90}
                ]
            };
            
     

    /**
     * Handle input changes in the AddItem component.
     * @param event
     */
    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
       const name = target.name;        
        this.setState({
            [name]: value
        });
    };

    /**
     * Add an item to state.
     * @param event
     */
    addItem = event => {
        event.preventDefault();
        const {product, name, price} = this.state;
        const itemsInState = this.state.items;
        const itemsArrayLength = itemsInState.length;
        const id = itemsArrayLength ? (itemsInState[itemsArrayLength - 1].id + 1) : 1;
        this.setState({
        items: [
            ...itemsInState,
            {
            id,
            product,
            name,
            price
            }
        ],
        product: "",
        name: "",
        price: ""
        })
    };


    render() {

    const {product, name, price} = this.state;
        return (
            <div className="container">
                
                <div>
                    <select value={this.state.filterItemId} name="filterItemId" onChange={this.handleInputChange}>
                            {this.state.items.map((x) => <option key={x.id}>{x.product}</option>)}
                    </select>
                </div>
                <h1 className="center">Buyers and their products</h1>
                
                <div className="row">
                    {
                        this.state.items
                        .filter((item) => {
                            return !this.state.filterItemId ? true : item.product.toLowerCase().includes(this.state.filterItemId.toLowerCase())
                        }).map((item)=><ItemCard
                        key={item.id}
                        item={item}/>)
                    }
                </div>
                <div className="card">
                    <AddItem
                        product={product}
                        name={name}
                        price={price}
                        onChange={this.handleInputChange}
                        onSubmit={this.addItem}
                    />
                </div>
                <div >
                <b style={{color: 'black'}}>Total Expenses:{
                   this.state.items.reduce((totalPrices, item) => totalPrices+parseInt(item.price), 0)
                    
                }€ </b>
                </div>
            </div>
        )
    }
}

export default MainPage