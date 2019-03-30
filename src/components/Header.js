import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import tfv from '../images/tfv-small1.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}> 
        <img className="logo" src={tfv} alt="" /> 
        <div className="content">
            <div className="inner">
                <h1>TEGUH FV</h1>
                <p>Fullstack Developer, Informatics Engineering Degree. <br/>Based in Bali Indonesia
</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="https://blogs-teguhfv.netlify.com/">Blog</a></li>
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
