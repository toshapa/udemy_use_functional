import { useState, useEffect, useCallback} from 'react';
import {Container} from 'react-bootstrap';
import './App.css';


// class Slider extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             autoplay: false,
//             slide: 0
//         }
//     }

//     changeSlide = (i) => {
//         this.setState(({slide}) => ({
//             slide: slide + i
//         }))
//     }

//     toggleAutoplay = () => {
//         this.setState(({autoplay}) => ({
//             autoplay: !autoplay
//         }))
//     }

//     render() {
//         return (
//             <Container>
//                 <div className="slider w-50 m-auto">
//                     <img className="d-block w-100" src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" alt="slide" />
//                     <div className="text-center mt-5">Active slide {this.state.slide} <br/> {this.state.autoplay ? 'auto' : null}</div>
//                     <div className="buttons mt-3">
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(-1)}>-1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={() => this.changeSlide(1)}>+1</button>
//                         <button 
//                             className="btn btn-primary me-2"
//                             onClick={this.toggleAutoplay}>toggle autoplay</button>
//                     </div>
//                 </div>
//             </Container>
//         )
//     }
// }


const Slider = (props) => {

    const [slider, setSlider] = useState(0);
    const [autoplay, setAutoplay] = useState(false)

    const getImages = useCallback(() => {
        return [
            'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            'https://images.pexels.com/photos/1133957/pexels-photo-1133957.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        ]
    },[slider])

    function toggleAutoplay () {
        setAutoplay(autoplay => !autoplay)
    }

    function changeSlider (i) {
        setSlider(slider => slider + i)
    }

    useEffect(() => {
        document.title = `Slider: ${slider}`
    }, []);


    return (
        <Container>
            <div className="slider w-50 m-auto">
                {/* {
                    getImages().map((img, i) => {
                        return (
                            <img key={i} className="d-block w-100" src={img} alt="slide" />
                        )
                    })
                } */}
                <Slide  getImages={getImages}/>

                <div className="text-center mt-5">Active slide {slider} <br/>{autoplay ? 'auto' : null}</div>
                <div className="buttons mt-3">
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlider(-1)}>-1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={() => changeSlider(1)}>+1</button>
                    <button 
                        className="btn btn-primary me-2"
                        onClick={toggleAutoplay}>toggle autoplay</button>
                </div>
            </div>
        </Container>
    )
}

const Slide = ({getImages}) => {
    const [img, setImg] = useState([])
    useEffect(() => {
        setImg(getImages())
    }, [getImages])
    return (
        img.map((url, i) => {
            return <img key={i} className="d-block w-100" src={url} alt="slide" />
        })
   )
}


function App() {
  return (
        <Slider/>
  );
}

export default App;
