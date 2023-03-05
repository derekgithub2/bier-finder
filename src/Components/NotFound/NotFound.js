import './NotFound.css'
import { useNavigate } from 'react-router-dom'
import background from '../../images/wheatbackground.png'

const NotFound = () => {
    const navigation = useNavigate()

    const handleBack = () => {
        navigation('/')
    }
    
    return(
        <div className="page-not-found" style={{backgroundImage: `url(${background})`}}>
            <h2>Sorry we could not find that page!</h2>
            <h2>404 - Page Not Found</h2>
            <button className="backButton" onClick={handleBack}>Go Back</button>
        </div>
    )
}

export default NotFound;