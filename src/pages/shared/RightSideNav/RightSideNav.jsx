import {FcGoogle} from 'react-icons/fc';
import {BsGithub} from 'react-icons/bs';
import {FaFacebook} from 'react-icons/fa6';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagramSquare} from 'react-icons/fa';
import qZone1 from '../../../assets/assets/qZone1.png';
import qZone2 from '../../../assets/assets/qZone2.png';
import qZone3 from '../../../assets/assets/qZone3.png';

const RightSideNav = () => {
    return (
        <div className='p-4'>
            <h2 className="text-2xl">Login With</h2>
            <div className='space-y-4'>
                <button className="btn btn-outline mt-3">
                    <FcGoogle></FcGoogle>
                    Signin with Google
                </button>
                <button className="btn btn-outline">
                    <BsGithub></BsGithub>
                    Signin with GitHub
                </button>
            </div>
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-3xl'>Find us on</h2>
                <div>
                    <a className='p-4 border-2 mt-2 flex items-center text-lg rounded rouned-t-lg'>
                        <FaFacebook></FaFacebook>
                        <span>Facebook</span>
                    </a>
                    <a className='p-4 border-2 mt-2 flex items-center text-lg rounded rouned-t-lg'>
                        <FaTwitter></FaTwitter>
                        <span>Twitter</span>
                    </a>
                    <a className='p-4 border-2 mt-2 flex items-center text-lg rounded rouned-t-lg'>
                        <FaInstagramSquare></FaInstagramSquare>
                        <span>Instagram</span>
                    </a>
                </div>
            </div>
            {/* q zone */}
            <div className='p-4 space-y-3 mb-6'>
                <h2 className='text-3xl'>Q Zone</h2>
                <img src={qZone1} alt="qzone1" />
                <img src={qZone2} alt="qzone2" />
                <img src={qZone3} alt="qzone3" />
            </div>
        </div>
    );
};

export default RightSideNav;