import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import tfv from '../images/index.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}> 
    
        <div className="content">
            <div className="inner">
        <img className="logo" src={tfv} alt="" />  
                <h1>TEGUH</h1> 
                <p>i convert coffee to anything, Informatics Engineering Degree. <br/>Based in <a href="https://www.google.com/search?q=bali" target="_blank">Bali</a> Indonesia</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="https://teguhfv-blog.netlify.app/">Blog</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
