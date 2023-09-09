const SocialPerson = () => {
  return (
    <div className="hanging-svg">
      <svg
        id="hanging-svg"
        width="30"
        height="40"
        viewBox="0 0 61 81"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="25.5" cy="14" rx="15.5" ry="14" fill="#000000" />
        <line x1="26.5" y1="27" x2="26.5" y2="66" stroke="#000000" />
        <line
          x1="26.2018"
          y1="65.5425"
          x2="60.2018"
          y2="80.5425"
          stroke="#000000"
        />
        <line x1="26" y1="65.5" x2="60" y2="65.5" stroke="#000000" />
        <line x1="26" y1="45.5" x2="60" y2="45.5" stroke="#000000" />
        <line
          x1="0.254701"
          y1="29.5697"
          x2="26.4724"
          y2="45.0897"
          stroke="#000000"
          id="left-hand"
        />
        <circle cx="19" cy="10" r="4" fill="white" />
        <circle cx="33" cy="10" r="4" fill="white" />
        <mask id="path-9-inside-1_201_21" fill="white">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 19C16 22.866 20.4772 26 26 26C31.5228 26 36 22.866 36 19H16Z"
          />
        </mask>
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M16 19C16 22.866 20.4772 26 26 26C31.5228 26 36 22.866 36 19H16Z"
          fill="#ffffff"
        />
        <path
          d="M16 19V18H15V19H16ZM36 19H37V18H36V19ZM26 25C23.4186 25 21.1245 24.266 19.5024 23.1305C17.8772 21.9929 17 20.5171 17 19H15C15 21.3489 16.3614 23.3731 18.3555 24.769C20.3527 26.167 23.0586 27 26 27V25ZM35 19C35 20.5171 34.1228 21.9929 32.4976 23.1305C30.8755 24.266 28.5814 25 26 25V27C28.9414 27 31.6473 26.167 33.6445 24.769C35.6386 23.3731 37 21.3489 37 19H35ZM36 18H16V20H36V18Z"
          fill="black"
          mask="url(#path-9-inside-1_201_21)"
        />
      </svg>
    </div>
  );
};

export default SocialPerson;
