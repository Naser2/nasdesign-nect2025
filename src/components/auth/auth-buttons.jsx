
export const GoogleButton = () => {
  return <button className="social-btn hover:bg-black hover:text-white">
    <span className="social-logo-wrapper">
        <img
        className="social-logo"
        src="https://auth.openai.com/assets/google-logo-NePEveMl.svg"
        alt="Google logo"
        />
    </span>
    <span className="social-text">Continue with Google</span>
    </button>
 }

export const MicrosoftButton  = () =>{
  return <button className="social-btn hover:bg-black hover:text-white">
    <span className="social-logo-wrapper">
        <img
        className="social-logo"
        src="https://auth.openai.com/assets/microsoft-logo-BUXxQnXH.svg"
        alt="Microsoft logo"
        />
    </span>
    <span className="social-text">Continue with Microsoft Account</span>
    </button>
}
export const AppleButton = () =>{
   return <button className="social-btn ">
    <span className="social-logo-wrapper">
        <img
        className="social-logo"
        src="https://auth.openai.com/assets/apple-logo-tAoxPOUx.svg"
        alt="Apple logo"
        />
    </span>
    <span className="social-text">Continue with Apple</span>
 </button>
}
