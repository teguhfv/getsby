import React from 'react'
import { Link } from "gatsby"
import PropTypes from 'prop-types'
import tfv from '../images/tfv-small1.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        {/* <div className="logo"> */}
        <img className="logo" src={tfv} alt="" />
            {/* <span className="icon fa-diamond"></span> */}
        {/* </div> */}
        <div className="content">
            <div className="inner">
                <h1>TEGUH F V</h1>
                <p>A fully responsive site template designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
                {/* <li><a href="javascript:;" onClick={() => {Link to="/page-2"}}>Contact2</a></li> */}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
