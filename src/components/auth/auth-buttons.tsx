import type { FC, FormEvent } from 'react';
import { LoadingDots } from '../icons';

type GoogleButtonProps = {
    handleLogin: (event: FormEvent<HTMLFormElement>) => void;  //
    loading: boolean;
};

export const GoogleButton: FC<GoogleButtonProps> = ({ handleLogin, loading }) => (
    <button className="social-btn hover:bg-black hover:text-white" onClick={handleLogin}>
    <span className="social-logo-wrapper">
        <img
            className="social-logo"
             src="https://auth.openai.com/assets/google-logo-NePEveMl.svg"
            alt="Google logo"
        />
    </span>
    <span className="social-text">{loading ? <LoadingDots color={'black'}/> : "Continue with Google"}</span>
    </button>
    )


export const AppleButton : FC<GoogleButtonProps> = ({ handleLogin, loading }) => (
    <button className="social-btn hover:bg-black hover:text-white"  onClick={handleLogin}>
    <span className="social-logo-wrapper">
        <img
        className="social-logo"
        src="https://auth.openai.com/assets/microsoft-logo-BUXxQnXH.svg"
        alt="Microsoft logo"
        />
    </span>
    <span className="social-text">{loading ? <LoadingDots color={'black'}/> : "Continue with Microsoft Account"}</span>
    </button>
    )

export const MicrosoftButton: FC<GoogleButtonProps> = ({ handleLogin, loading }) => (
    <button className="social-btn hover:bg-black hover:text-white"  onClick={handleLogin}>
    <span className="social-logo-wrapper">
    <img
        className="social-logo"
        src="https://auth.openai.com/assets/apple-logo-tAoxPOUx.svg"
        alt="Apple logo"
        />
    </span>
    <span className="social-text">{loading ? <LoadingDots color={'black'}/> : "Continue with Microsoft Account"}</span>
    </button>)