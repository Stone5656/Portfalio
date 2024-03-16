export default function Logo({url}){
    return (
        <svg 
          xmlns = {url} 
          width="100" 
          height="100" 
          viewBox="0 0 100 100" 
          className="logo">
          <path d="M10,10 L90,10 L90,90 L10,90 Z" fill="currentColor"></path>
        </svg>
      );
};