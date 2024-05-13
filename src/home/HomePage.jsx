import React, { useState, useEffect } from 'react';
import Mobile from '../pages/mobile/HomePage/homePageMobile';
import Desktop from '../pages/desktop/HomePage/HomePageDesktop';
import LoadingScreen from './LoadingScreen'; // Componente de tela de carregamento

function HomePage() {
    const [isMobile, setIsMobile] = useState(true); // Estado inicial como móvel
    const [isLoading, setIsLoading] = useState(true); // Estado para controlar o carregamento

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); 
    };

    useEffect(() => {
        handleResize();

       
        window.dispatchEvent(new Event('resize'));

        window.addEventListener('resize', handleResize);

        
        setTimeout(() => {
            setIsLoading(false); 
        }, 2000);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const switchToDesktopVersion = () => {
        setIsMobile(false); 
    };

    const switchToMobileVersion = () => {
        setIsMobile(true); 
    };

    return (
        <div>
            {isLoading ? ( 
                <LoadingScreen />
            ) : (
                <div>
                    {isMobile ? ( 
                        <Mobile switchToDesktop={switchToDesktopVersion} />
                    ) : ( 
                        <Desktop switchToMobile={switchToMobileVersion} />
                    )}
                </div>
            )}
        </div>
    );
}

export default HomePage;

