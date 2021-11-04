import React from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Header from '../components/layout/Header/Header';
import Footer from '../components/layout/Footer/Footer';
import HomePage from '../components/Home/Home';
import AboutPage from '../components/About/About';
import ProductsPage from '../components/Products/Products';
import NotFoundPage from '../components/NotFound/NotFound';
import ProductDetails from '../components/ProductDetails/ProductDetails';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import '../custom.css';

const AppRouter = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path={["/", "/home", "/Ev", "/Anasayfa", "/hakkimizda", "/about", "/telefon", "/bilgisayar", "/tvsesvegoruntusistemleri", "/beyazesyaveankastre", "/elektriklievaletleriveyasam", "/kisiselbakimvesaglik", "/oyunkonsollarihobiveeglence", "/fotografmakinesi", "/ofismalzemelerivemobilyalari", "/aksesuarlar", "/kurulumdestekpaketleri", "/telefon/:id", "/bilgisayar/:id", "/tvsesvegoruntusistemleri/:id", "/beyazesyaveankastre/:id", "/elektriklievaletleriveyasam/:id", "/kisiselbakimvesaglik/:id", "/oyunkonsollarihobiveeglence/:id", "/fotografmakinesi/:id", "/ofismalzemelerivemobilyalari/:id", "/aksesuarlar/:id", "/kurulumdestekpaketleri/:id"]} render={props => (
                <>
                    <Header></Header>
                    <Switch>
                        <Route exact path={["/", "/home", "/Ev", "/Anasayfa"]} component={HomePage} />
                        <Route path={["/hakkimizda", "/about"]} component={AboutPage} />
                        <Route exact path={["/telefon", "/bilgisayar", "/tvsesvegoruntusistemleri", "/beyazesyaveankastre", "/elektriklievaletleriveyasam", "/kisiselbakimvesaglik", "/oyunkonsollarihobiveeglence", "/fotografmakinesi", "/ofismalzemelerivemobilyalari", "/aksesuarlar", "/kurulumdestekpaketleri"]} component={ProductsPage} />
                        <Route path={["/telefon/:id", "/bilgisayar/:id", "/tvsesvegoruntusistemleri/:id", "/beyazesyaveankastre/:id", "/elektriklievaletleriveyasam/:id", "/kisiselbakimvesaglik/:id", "/oyunkonsollarihobiveeglence/:id", "/fotografmakinesi/:id", "/ofismalzemelerivemobilyalari/:id", "/aksesuarlar/:id", "/kurulumdestekpaketleri/:id"]} component={ProductDetails} />
                    </Switch>
                    <Footer></Footer>
                </>
            )} />

            <Route component={NotFoundPage} />
            {/*    <Route exact path="/blogs" component={BlogListPage} />*/}
            {/*    <Route path="/edit/:id" component={EditBlogPage} />*/}
            {/*    <Route path="/blogs/:id" component={BlogDetailsPage} />*/}
            {/*    <Route path="/contact" component={ContactPage} />*/}
        </Switch>
        </BrowserRouter>
    )
}

export default AppRouter
