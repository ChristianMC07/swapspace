// need to install spinners-react for this component to work
// with docker - must shut down, clear volumes, and rebuild / spinup all container
import { relative } from "path";
import { SpinnerCircular } from "spinners-react";

// included this here and not in quotes.model.ts so that LoadingOverlay component is easily reusable in other apps
interface LoadingOverlayProps {
    overlayOn: boolean;
    bgColor: string;
    spinnerOn: boolean
    spinnerColor: string;
}

export default function LoadingOverlay({ overlayOn, bgColor, spinnerOn, spinnerColor }: LoadingOverlayProps) {
    return (
        <div
            className={`z-10 absolute top-0 left-0 w-full h-full items-center justify-center`}
            style={{ display: overlayOn ? 'flex' : 'none', background: bgColor, }}
        >
            <SpinnerCircular enabled={spinnerOn} color={spinnerColor} />
        </div>
    );
}