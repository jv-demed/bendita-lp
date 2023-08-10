import { intro, welcome, benefits, equip, steps, faq } from '../src/assets/lps/content-depilacao';
import { WhatsappBtn } from '../src/components/buttons/WhatsappBtn';
import { Footer } from '../src/components/footer/Footer';
import { FaqSection } from '../src/components/sales-sections/FaqSection';
import { EquipSection } from '../src/components/sales-sections/EquipSection';
import { IntroSection } from '../src/components/sales-sections/IntroSection';
import { StepsSection } from '../src/components/sales-sections/StepsSection';
import { WelcomeSection } from '../src/components/sales-sections/WelcomeSection';
import { BenefitsSection } from '../src/components/sales-sections/BenefitsSection';

export default function Depilacao(){
    return(
        <>
            <IntroSection content={intro} />
            <WelcomeSection content={welcome} />
            <BenefitsSection content={benefits} />
            <EquipSection content={equip} />
            <StepsSection content={steps} />
            <FaqSection content={faq} />
            <Footer />
            <WhatsappBtn />
        </>
    )
}