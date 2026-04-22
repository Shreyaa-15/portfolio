const CoffeeCup = () => {
  return (
    <div className="relative flex justify-center items-center animate-float">
      
      {/* Glow */}
      <div className="absolute w-[300px] h-[300px] bg-[#c8923a22] blur-[100px] rounded-full"></div>

      <svg width="380" height="380" viewBox="0 0 200 200">

        {/* PLATE */}
        <ellipse cx="100" cy="170" rx="60" ry="10" stroke="#c8923a" opacity="0.3"/>

        {/* CUP BODY */}
        <path
          d="M55 65 V135 Q55 160 100 160 Q145 160 145 135 V65"
          fill="#2d1200"
          stroke="#c8923a"
        />

        {/* HANDLE */}
        <path
          d="M145 85 Q175 105 145 125"
          stroke="#c8923a"
          fill="none"
        />

        {/* COFFEE TOP */}
        <ellipse cx="100" cy="65" rx="45" ry="12" fill="#3a1800" stroke="#c8923a"/>

        {/* SWIRL */}
        <path d="M80 65 Q100 55 120 65" stroke="#c8923a" opacity="0.6"/>
        <path d="M85 67 Q100 60 115 67" stroke="#c8923a" opacity="0.4"/>

        {/* PULSE RINGS */}
        <circle cx="100" cy="65" r="0" className="pulse"/>
        <circle cx="100" cy="65" r="0" className="pulse delay"/>

        {/* STEAM */}
        <path d="M85 55 C75 35,95 25,85 10" stroke="#c8923a" className="steam"/>
        <path d="M100 55 C90 35,110 25,100 10" stroke="#c8923a" className="steam delay-1"/>
        <path d="M115 55 C105 35,125 25,115 10" stroke="#c8923a" className="steam delay-2"/>

      </svg>
    </div>
  );
};

export default CoffeeCup;