import {Route, BrowserRouter, Routes} from 'react-router-dom'

import CaseStudies from './Routes/CaseStudies'
import Overview from './Routes/Overview'
import Faq from './Routes/Faq'
import Pricing from './Routes/Pricing'

import Header from './components/Header'

const App = () => {
    return (<div>
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route exact path="/" element={<Overview/>}/>
                <Route path="/pricing" element={<Pricing/>}/>
                <Route path="/casestudies" element={<CaseStudies/>}/>
                <Route path="/faq" element={<Faq/>}/>
            </Routes>
        </BrowserRouter>
    </div>)
}
export default App