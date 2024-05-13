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
        handleResize(); // Chama a função handleResize imediatamente após a montagem do componente

        // Simula manualmente o evento de redimensionamento da janela
        window.dispatchEvent(new Event('resize'));

        window.addEventListener('resize', handleResize);

        // Simula um tempo de carregamento com setTimeout (pode ser substituído por uma chamada de API)
        setTimeout(() => {
            setIsLoading(false); // Define isLoading como falso após o tempo de carregamento simulado
        }, 2000); // Tempo de carregamento simulado de 2 segundos

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const switchToDesktopVersion = () => {
        setIsMobile(false); // Define isMobile como falso para exibir a versão desktop
    };

    const switchToMobileVersion = () => {
        setIsMobile(true); // Define isMobile como verdadeiro para exibir a versão móvel
    };

    return (
        <div>
            {isLoading ? ( // Mostra a tela de carregamento se isLoading for verdadeiro
                <LoadingScreen />
            ) : (
                <div>
                    {isMobile ? ( // Mostra a versão móvel se isMobile for verdadeiro
                        <Mobile switchToDesktop={switchToDesktopVersion} />
                    ) : ( // Mostra a versão desktop se isMobile for falso
                        <Desktop switchToMobile={switchToMobileVersion} />
                    )}
                </div>
            )}
        </div>
    );
}

export default HomePage;

