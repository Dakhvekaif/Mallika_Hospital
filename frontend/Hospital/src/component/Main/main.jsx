import Healthquote from "./HealthQuote/Healthquote";
import Specialities from "./Specialities/Specialities";
import Authorities from "./Authorities/Authorities";
import Achievements from './Achievement/Achievement'
import FAQ from "./FAQ/faq";
import Chooseus from "./ChooseUs/ChooseUs";

export default function Main () {
    return (
        <div className="min-h-screen w-full">
            <Healthquote/>
            <Specialities/>
            <Authorities/>
            <Achievements/>
            <FAQ/>
            <Chooseus/>
        </div>
    );
}