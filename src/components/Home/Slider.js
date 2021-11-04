import * as React from 'react'
import "./Slider.css"

const Slider = () => {
    return (
            <div className="col-md-12">
                <div id="KontrolTusuTetikle1" className="carousel slide slider1" data-bs-ride="carousel">
                    <div className="carousel-inner">               
                        <div id="" className="carousel-item active">
                            <a href="/#"> <img src={require('./SliderImg/8889424805938.jpg').default} className="d-block w-100 " alt="urun1" /></a>
                        </div>    
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889354092594.jpg').default} className="d-block w-100 " alt="urun2" /></a>
                        </div>  
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889322930226.jpg').default} className="d-block w-100 " alt="urun3" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889423855666.jpg').default} className="d-block w-100 " alt="urun4" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889301598258.jpg').default} className="d-block w-100 " alt="urun5" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889423659058.jpg').default} className="d-block w-100 " alt="urun6" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889353633842.jpg').default} className="d-block w-100 " alt="urun7" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8887515775026.jpg').default} className="d-block w-100 " alt="urun8" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889186975794.jpg').default} className="d-block w-100 " alt="urun9" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889326993458.jpg').default} className="d-block w-100 " alt="urun10" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889292652594.jpg').default} className="d-block w-100 " alt="urun11" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8888500551730.jpg').default} className="d-block w-100 " alt="urun12" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889326764082.jpg').default} className="d-block w-100 " alt="urun13" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889419399218.jpg').default} className="d-block w-100 " alt="urun14" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8887843684402.jpg').default} className="d-block w-100 " alt="urun15" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889451675698.jpg').default} className="d-block w-100 " alt="urun16" /></a>
                        </div>
                        <div id="" className="carousel-item">
                            <a href="/#"> <img src={require('./SliderImg/8889323061298.jpg').default} className="d-block w-100 " alt="urun17" /></a>
                        </div>
                    </div>

                    {/*Mobil*/} 
                        <div className="col-md-12 d-none" id="gostergeCubuklari">
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="0" className="active"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="1"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="2"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="3"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="4"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="5"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="6"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="7"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="8"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="9"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="10"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="11"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="12"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="13"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="14"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="15"/>
                            <input type="button" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="16"/>
                        </div>
                    {/*/Mobil*/}

                    <div className="col-md-12" id="tuslar">              
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="0">
                            <img src={require('./SliderImg/sliderTus/8889424871474.jpg').default} className="d-block w-100" alt="urun1tus"/>
                        </button>  
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="1">
                            <img src={require('./SliderImg/sliderTus/8889354158130.jpg').default} className="d-block w-100" alt="urun2tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="2">
                            <img src={require('./SliderImg/sliderTus/8889291538482.jpg').default} className="d-block w-100" alt="urun3tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="3">
                            <img src={require('./SliderImg/sliderTus/8889423921202.jpg').default} className="d-block w-100" alt="urun4tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="4">
                            <img src={require('./SliderImg/sliderTus/8889301729330.jpg').default} className="d-block w-100" alt="urun5tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="5">
                            <img src={require('./SliderImg/sliderTus/8889423724594.jpg').default} className="d-block w-100" alt="urun6tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="6">
                            <img src={require('./SliderImg/sliderTus/8889353764914.jpg').default} className="d-block w-100" alt="urun7tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="7">
                            <img src={require('./SliderImg/sliderTus/8887548575794.jpg').default} className="d-block w-100" alt="urun8tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="8">
                            <img src={require('./SliderImg/sliderTus/8889186943026.jpg').default} className="d-block w-100" alt="urun9tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="9">
                            <img src={require('./SliderImg/sliderTus/8889326927922.jpg').default} className="d-block w-100" alt="urun10tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="10">
                            <img src={require('./SliderImg/sliderTus/8889292685362.jpg').default} className="d-block w-100" alt="urun11tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="11">
                            <img src={require('./SliderImg/sliderTus/8888500617266.jpg').default} className="d-block w-100" alt="urun12tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="12">
                            <img src={require('./SliderImg/sliderTus/8889325125682.jpg').default} className="d-block w-100" alt="urun13tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="13">
                            <img src={require('./SliderImg/sliderTus/8889419464754.jpg').default} className="d-block w-100" alt="urun14tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="14">
                            <img src={require('./SliderImg/sliderTus/8889325125682.jpg').default} className="d-block w-100" alt="urun15tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="15">
                            <img src={require('./SliderImg/sliderTus/8889451708466.jpg').default} className="d-block w-100" alt="urun16tus"/>
                        </button>
                        <button id="" data-bs-target="#KontrolTusuTetikle1" data-bs-slide-to="16">
                            <img src={require('./SliderImg/sliderTus/8889323126834.jpg').default} className="d-block w-100" alt="urun17tus"/>
                        </button>
                    </div>
                </div>
            </div>
        )
}

export default Slider