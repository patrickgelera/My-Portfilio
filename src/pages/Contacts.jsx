import classes from './Contacts.module.css'
import {ImFacebook2, ImLinkedin, ImGithub, ImProfile} from 'react-icons/im';

const Contacts = () =>{
    return <div id='contacts-page'>
        <div className={classes['contact-details']}>
            <section className='division'>
                <p>E-mail: <span>patrick.gelera1@gmail.com</span></p>
                <p>Contact Number:<span> 09215350099 || 09559115863</span></p>
                <p>Address:<span> Santa Maria Bulacan</span></p>
                <div className={classes.links}>
                    <a href="https://www.facebook.com/patrickngsv/" target="_blank" rel="noreferrer"><ImFacebook2/></a>
                    <a href="https://www.linkedin.com/in/john-patrick-gelera-32884415a/" target="_blank" rel="noreferrer"><ImLinkedin/></a>
                    <a href="https://github.com/patrickgelera" target="_blank" rel="noreferrer"><ImGithub/></a>
                    <a href="https://drive.google.com/file/d/1-I--GfNxFyDVJ9fSMT-1LVCmyE8rQ5qu/view?usp=sharing" target="_blank" rel="noreferrer"><ImProfile/></a>
                </div>
            </section>
        </div>
    </div>
}

export default Contacts