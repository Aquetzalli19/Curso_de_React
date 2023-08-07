import { TwitterFollowCard } from './TwitterFollowCard.jsx'
import './App.css'
export function App (){
    const format = (userName) => `@${userName}`
    return(
        <section className='App'>
            <TwitterFollowCard
                formatUserName={format}
                isFollowin 
                userName="Riversgg" 
                name="Samanta Rivera"/>
            <TwitterFollowCard
                formatUserName={format}
                isFollowin={false} 
                userName="ElMariana" 
                name="Oswaldo Napoleon"/>
            <TwitterFollowCard 
                formatUserName={format}
                isFollowin 
                userName="Elonmusk" 
                name="Elon Musk"/>
        </section>
    )
}