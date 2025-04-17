import { ReactNode } from 'react'
import SpotlightCard from './SpotlightCard'
import Heading from './Heading'

const SpotlightContainer = ({ spotlightColor = "gray", children, title, className }: { spotlightColor?: string, children: ReactNode, title: string, className?: string }) => {

    return (
        <SpotlightCard className={className} spotlightColor={spotlightColor}>
            <Heading className='mt-5 mb-10'>
                {title}
            </Heading>
            <div>
                {children}
            </div>
        </SpotlightCard>
    )
}

export default SpotlightContainer