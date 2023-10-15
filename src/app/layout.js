import { Bar } from "../../components/molecules/menu/Menu";
import "./globals.css";
import { Inter } from "next/font/google";
import { CurrentPageProvider } from "./store/CurrentProvider";
import ProviderReservation from "./store/ProviderReservation";

const inter = Inter({
    subsets: ["latin"],
    weight: ["400", "500", "700", "800", "900"],
});

export const metadata = {
    title: "toLand",
    description:
        "development made by jairo berdu.go using Nextjs as a framework, implementing visual design conceptualized in analog photography from the late 80s",
    //visiting places of yesteryear, evoking nostalgia and desire to return to 'that' place...development made by jairo berdu.go using Nextjs as a framework implementing visual design conceptualized in analog photography from the late 80s.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <ProviderReservation>
                <CurrentPageProvider>
                    <body className={inter.className}>
                        <Bar />
                        {children}
                    </body>
                </CurrentPageProvider>
            </ProviderReservation>
        </html>
    );
}
