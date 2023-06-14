import { MapPinIcon } from "@heroicons/react/24/solid"
import { useDispatch, useSelector } from "react-redux"


const Footer = () => {

    const dispatch = useDispatch()

    const loginState = useSelector((state) => state.login)

  return (
    <>
        <div className={`${loginState ? 'blocked' : ''} bg-gray-700 py-10 px-14`}>
            <div className=''>
                <div className='grid grid-cols-4 md:grid-cols-3 sm:grid-cols-2 div-borded pb-[45px]'>
                    <div className="md:hidden">
                        <div>
                            <MapPinIcon onClick={() => dispatch({type:"PROVA"})} className='icon-style inline mx-2'/><span className='text-slate-100'>Italia</span>
                        </div>
                    </div>
                    <div className="sm:hidden">
                        <ul>
                            <h6 className='footer-title'>PRODOTTI</h6>
                            <li className='footer-list-items'>Tapis Roulant</li>
                            <li className='footer-list-items'>Bike</li>
                            <li className='footer-list-items'>Ellittiche</li>
                            <li className='footer-list-items'>Vogatore</li>
                            <li className='footer-list-items'>Forza</li>
                            <li className='footer-list-items'>Accessori</li>
                            <li className='footer-list-items'>Tutti i prodotti</li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                            <h6 className='footer-title'>SUPPORTO</h6>
                            <li className='footer-list-items'>Contatti</li>
                            <li className='footer-list-items'>E-learning</li>
                            <li className='footer-list-items'>Marketing Support</li>
                            <li className='footer-list-items'>Interior design</li>
                            <li className='footer-list-items'>Supporto Clienti</li>
                            <li className='footer-list-items'>Room Planner</li>
                        </ul>
                    </div>
                    <div>
                    <ul>
                            <h6 className='footer-title'>AZIENDA</h6>
                            <li className='footer-list-items'>Chi Siamo</li>
                            <li className='footer-list-items'>Business</li>
                            <li className='footer-list-items'>Newsroom</li>
                            <li className='footer-list-items'>Technogym Talks</li>
                            <li className='footer-list-items'>Lavora con noi</li>
                            <li className='footer-list-items'>Investor Relations</li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-between flex-wrap div-borded py-[45px]'>
                    <div className='flex flex-col justify-between mb-2'>
                        <h6 className='footer-title'>SEGUICI SU</h6>
                        <div className='flex'>
                            <img src="/src/assets/social-linkedin.png" alt="linkedin-logo/img" className='icon-style mx-3'/>
                            <img src="/src/assets/social-instagram.png" alt="instagram-logo/img" className='icon-style mx-3'/>
                            <img src="/src/assets/social-twitter.png" alt="twitter-logo/img" className='icon-style mx-3'/>
                            <img src="/src/assets/social-facebook.png" alt="facebook-logo/img" className='icon-style mx-3'/>
                            <img src="/src/assets/social-tiktok.png" alt="tiktok-logo/img" className='icon-style mx-3'/>
                        </div>
                    </div>
                    <div>
                        <h6 className='footer-title'>SCARICA L'APP TECHNOGYM</h6>
                        <div className='flex'>
                            <img src="/src/assets/google-play-badge.png" alt="badge-google/img" className='w-32 sm:w-20 rounded-lg mt-4 mr-4'/>
                            <img src="/src/assets/app-store-badge.png" alt="badge-apple/img" className='w-32 sm:w-20 rounded-lg mt-4'/>
                            {/* <div className='google-badge w-30'></div>
                            <div className='apple-badge w-30 h-20'></div> */}
                        </div>
                    </div>
                </div>
                <div className='pt-10'>
                    <ul className='flex justify-between flex-wrap sm:flex-col'>
                        <li className='footer-list-item-2'>Utilizzo sicuro dei prodotti</li>
                        <li className='footer-list-item-2'>Informativa sulla privacy</li>
                        <li className='footer-list-item-2'>Politica sui cookie</li>
                        <li className='footer-list-item-2'>Termini e condizioni</li>
                        <li className='footer-list-item-2'>Condizioni di vendita</li>
                        <li className='footer-list-item-2'>Politica di reso</li>
                        <li className='footer-list-item-2'>Impostazioni cookie</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer