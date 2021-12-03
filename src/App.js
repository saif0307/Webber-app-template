import {Route, BrowserRouter, Routes} from 'react-router-dom'

import CaseStudies from './Routes/CaseStudies'
import Overview from './Routes/Overview'
import Faq from './Routes/Faq'
import Pricing from './Routes/Pricing'
import InnerCase from './Routes/innerCaseStudies'

import Header from './components/Header'
import MobileMenu from './components/MobileMenu'


const App = () => {
    return (<div>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route exact path="/" element={<Overview/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
                <Route path="/casestudies" element={<CaseStudies/>}/>
                <Route path="/innercase" element={<InnerCase/>}/>
                <Route path="/faq" element={<Faq/>}/>
                <Route path="/mobilemenu" element={<MobileMenu/>}/>
            </Routes>
        </BrowserRouter>
    </div>)
}
export default App