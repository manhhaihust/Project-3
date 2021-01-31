import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../css/admin/Header.css'
class Header extends Component {

    render() {
        let { onOpenFormProduct } = this.props
        return (
            <div className="NavAdmin">
                <div className="logo">
                    <Link to="/">
                        <img className="logo-img" src="https://i.imgur.com/YpLMnmW.png" alt="" />
                    </Link>
                </div>
                <div className="add-products-btn" onClick={onOpenFormProduct}>
                    Add Products
                </div>
            </div>
        )
    }
}

export default Header