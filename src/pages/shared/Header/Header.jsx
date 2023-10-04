import logo from '../../../assets/assets/logo.png';
import moment from 'moment';

const Header = () => {
    return (
        <div className='text-center'>
            <img className='mx-auto' src={logo} alt="logo" />
            <p>Journalism Without Fear of Favour</p>
            <p className='text-xl'>
                {
                    moment().format('dddd, MMMM D, YYYY')
                }
            </p>
        </div>
    );
};

export default Header;