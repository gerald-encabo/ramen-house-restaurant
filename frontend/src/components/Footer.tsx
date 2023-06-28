import { FaFacebook, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import { BsFillHouseDoorFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Moment from 'moment';
import '@/styles/footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className="footer-company-logo">
                <Link to='/'>Ramen{' '}<span><BsFillHouseDoorFill /></span>{' '}House</Link>
            </div>
            <div className="footer-right-reserved">
                <p>&#169; { Moment(new Date()).format("YYYY") } All Rights Reserved by Gerald Encabo</p>
            </div>
            <div className='footer-social-media'>
                <ul>
                    <li>
                        <Link to='https://facebook.com/' aria-label='Facebook'>
                            <FaFacebook />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.instagram.com/' aria-label='Instagram'>
                            <FaInstagram />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://twitter.com/' aria-label='Twitter'>
                            <FaTwitter />
                        </Link>
                    </li>
                    <li>
                        <Link to='https://www.youtube.com/' aria-label='Youtube'>
                            <FaYoutube />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}
export default Footer