
import { APP_SLOGAN, APP_THEMATIC } from '../../constants/constants'
import { RoundLine } from '../round-line/RoundLine'
import './css/index.css'

export const Baseline = () => {
    return (
        <div className="baseline">
            <div className="baseline-text">
                <h4 className='thematic'>{APP_THEMATIC}</h4>
                <h2 className='slogan'>{APP_SLOGAN}</h2>
            </div>
            <RoundLine/>
        </div>
    )
}