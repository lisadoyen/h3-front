
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img_1 from '../img/img_carousel1.svg'
import img_2 from '../img/img_carousel2.svg'
import img_3 from '../img/img_carousel3.svg'
import img_4 from '../img/img_carousel4.svg'
import img_5 from '../img/img_carousel5.svg'
import "../css/Style.css"
import "../css/Carousel.css"

function DemoCarousel() {
  return(
    <div >
        <div>
        </div>
            <div className='carousel'>
                <Carousel autoPlay infiniteLoop showStatus={false} showArrows={false} swipeable={true} showThumbs={false} emulateTouch={true}>
                    <div>
                        <img className='imgCarousel' src={img_1} />
                        <div className="legend">Recevez des suggestions personnalisées.</div>
                    </div>
                    <div>
                        <img className='imgCarousel' src={img_2} />
                        <div className="legend">Développez votre esprit culturel !</div>
                    </div>
                    <div>
                        <img className='imgCarousel' src={img_3} />
                        <div className="legend">Trouvez rapidement vos futures lectures.</div>
                    </div>
                    <div>
                        <img className='imgCarousel' src={img_4} />
                        <div className="legend">Créer vos bibliothèques personnalisées.</div>
                    </div>
                    <div>
                        <img className='imgCarousel' src={img_5} />
                        <div className="legend">Partagez vos coups de coeur avec d’autres lecteurs !</div>
                    </div>
                </Carousel>
            </div>
        </div>
  );
}

export default DemoCarousel;