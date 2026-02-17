import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }
    }, []);

    useEffect(() => {
        // Attempt scroll immediately
        window.scrollTo(0, 0);
        document.documentElement.scrollTo(0, 0);

        // Attempt scroll after a tiny delay to ensure React has finished rendering
        const timeout = setTimeout(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTo(0, 0);
        }, 10);

        return () => clearTimeout(timeout);
    }, [pathname]);

    return null;
}
