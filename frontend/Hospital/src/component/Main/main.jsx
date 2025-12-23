import Specialities from "./Specialities/Specialities";
import Achievements from './Achievement/Achievement'
import Healthquote from "./HealthQuote/Healthquote";
import AppointmentForm from "../AppoinmentFrom/appointmentform";
import Authorities from "./Authorities/Authorities";
import Chooseus from "./ChooseUs/ChooseUs";

export default function Main () {
    return (
        <div className="min-h-screen w-full border">
            <Healthquote/>
            <Specialities/>
            <Achievements/>
            <Authorities/>
            <Chooseus/>
            <AppointmentForm/>
        </div>
    );
}