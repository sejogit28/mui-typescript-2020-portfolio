import Particles from 'react-tsparticles';

import particlesConfig from '../config/particlesConfig';

interface PortfolioParticlesProps {
    
}

  
const ParticleBackground = (props: PortfolioParticlesProps) => {
    return (
        <>
            <Particles id="tsparticles" params={particlesConfig}
        />
        </>
    )
}

export default ParticleBackground
