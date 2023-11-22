export const IconDot = () => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6" cy="6" r="6" fill="#33B0D0" />
    </svg>
  );
};

export const CheckIcon = ({ fill = "#c4c3c2" }) => {
  return (
    <svg
      width="11"
      height="9"
      viewBox="0 0 11 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.71233 0.711629C8.88842 0.54399 9.12274 0.451312 9.36585 0.453152C9.60897 0.454991 9.84186 0.551204 10.0154
        0.721488C10.1889 0.891773 10.2895 1.12281 10.2959 1.36585C10.3024 1.60888 10.2141 1.84491 10.0498 2.02413L5.06233 
        8.26163C4.97657 8.354 4.87306 8.42813 4.758 8.47959C4.64293 8.53104 4.51867 8.55877 4.39264 8.5611C4.26662 8.56343 
        4.14142 8.54033 4.02453 8.49317C3.90763 8.44601 3.80145 8.37576 3.71233 8.28663L0.404831 4.97913C0.312722 4.8933 0.238845 
        4.7898 0.187605 4.6748C0.136365 4.5598 0.108812 4.43566 0.106591 4.30978C0.10437 4.1839 0.127526 4.05887 0.174678 
        3.94213C0.221829 3.8254 0.29201 3.71935 0.381033 3.63033C0.470057 3.54131 0.576099 3.47113 0.692834 3.42398C0.809569 
        3.37682 0.934606 3.35367 1.06048 3.35589C1.18636 3.35811 1.3105 3.38566 1.4255 3.4369C1.5405 3.48814 1.644 3.56202
        1.72983 3.65413L4.34733 6.27038L8.68858 0.739129C8.6964 0.729505 8.70474 0.720324 8.71358 0.711629H8.71233Z"
        fill={fill}
      />
    </svg>
  );
};

export const CalendarIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_3257_28796)">
      <path
        d="M14 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2L0 14C0 14.5304 0.210714 15.0391 
        0.585786 15.4142C0.960859 15.7893 1.46957 16 2 16H14C14.5304 16 15.0391 15.7893 15.4142 15.4142C15.7893 15.0391 16 14.5304 
        16 14V2C16 1.46957 15.7893 0.960859 15.4142 0.585786C15.0391 0.210714 14.5304 0 14 0V0ZM1 3.857C1 3.384 1.448 3 2 3H14C14.552
         3 15 3.384 15 3.857V14.143C15 14.616 14.552 15 14 15H2C1.448 15 1 14.616 1 14.143V3.857Z"
        fill="#979797"
      />
      <path
        d="M6.5 7C6.76522 7 7.01957 6.89464 7.20711 6.70711C7.39464 6.51957 7.5 6.26522 7.5 6C7.5 5.73478 7.39464 5.48043 7.20711 
        5.29289C7.01957 5.10536 6.76522 5 6.5 5C6.23478 5 5.98043 5.10536 5.79289 5.29289C5.60536 5.48043 5.5 5.73478 5.5 6C5.5 6.26522 
        5.60536 6.51957 5.79289 6.70711C5.98043 6.89464 6.23478 7 6.5 7ZM9.5 7C9.76522 7 10.0196 6.89464 10.2071 6.70711C10.3946 6.51957 
        10.5 6.26522 10.5 6C10.5 5.73478 10.3946 5.48043 10.2071 5.29289C10.0196 5.10536 9.76522 5 9.5 5C9.23478 5 8.98043 5.10536 8.79289
         5.29289C8.60536 5.48043 8.5 5.73478 8.5 6C8.5 6.26522 8.60536 6.51957 8.79289 6.70711C8.98043 6.89464 9.23478 7 9.5 7ZM12.5 
         7C12.7652 7 13.0196 6.89464 13.2071 6.70711C13.3946 6.51957 13.5 6.26522 13.5 6C13.5 5.73478 13.3946 5.48043 13.2071 5.29289C13.0196 
         5.10536 12.7652 5 12.5 5C12.2348 5 11.9804 5.10536 11.7929 5.29289C11.6054 5.48043 11.5 5.73478 11.5 6C11.5 6.26522 11.6054 6.51957
          11.7929 6.70711C11.9804 6.89464 12.2348 7 12.5 7ZM3.5 10C3.76522 10 4.01957 9.89464 4.20711 9.70711C4.39464 9.51957 4.5 9.26522 4.5 
          9C4.5 8.73478 4.39464 8.48043 4.20711 8.29289C4.01957 8.10536 3.76522 8 3.5 8C3.23478 8 2.98043 8.10536 2.79289 8.29289C2.60536 8.48043 
          2.5 8.73478 2.5 9C2.5 9.26522 2.60536 9.51957 2.79289 9.70711C2.98043 9.89464 3.23478 10 3.5 10ZM6.5 10C6.76522 10 7.01957 9.89464 7.20711 
          9.70711C7.39464 9.51957 7.5 9.26522 7.5 9C7.5 8.73478 7.39464 8.48043 7.20711 8.29289C7.01957 8.10536 6.76522 8 6.5 8C6.23478 8 5.98043
           8.10536 5.79289 8.29289C5.60536 8.48043 5.5 8.73478 5.5 9C5.5 9.26522 5.60536 9.51957 5.79289 9.70711C5.98043 9.89464 6.23478 10 6.5
            10ZM9.5 10C9.76522 10 10.0196 9.89464 10.2071 9.70711C10.3946 9.51957 10.5 9.26522 10.5 9C10.5 8.73478 10.3946 8.48043 10.2071
             8.29289C10.0196 8.10536 9.76522 8 9.5 8C9.23478 8 8.98043 8.10536 8.79289 8.29289C8.60536 8.48043 8.5 8.73478 8.5 9C8.5 9.26522
              8.60536 9.51957 8.79289 9.70711C8.98043 9.89464 9.23478 10 9.5 10ZM12.5 10C12.7652 10 13.0196 9.89464 13.2071 9.70711C13.3946
               9.51957 13.5 9.26522 13.5 9C13.5 8.73478 13.3946 8.48043 13.2071 8.29289C13.0196 8.10536 12.7652 8 12.5 8C12.2348 8 11.9804
                8.10536 11.7929 8.29289C11.6054 8.48043 11.5 8.73478 11.5 9C11.5 9.26522 11.6054 9.51957 11.7929 9.70711C11.9804 9.89464
                 12.2348 10 12.5 10ZM3.5 13C3.76522 13 4.01957 12.8946 4.20711 12.7071C4.39464 12.5196 4.5 12.2652 4.5 12C4.5 11.7348 4.39464
                  11.4804 4.20711 11.2929C4.01957 11.1054 3.76522 11 3.5 11C3.23478 11 2.98043 11.1054 2.79289 11.2929C2.60536 11.4804 2.5 
                  11.7348 2.5 12C2.5 12.2652 2.60536 12.5196 2.79289 12.7071C2.98043 12.8946 3.23478 13 3.5 13ZM6.5 13C6.76522 13 7.01957 
                  12.8946 7.20711 12.7071C7.39464 12.5196 7.5 12.2652 7.5 12C7.5 11.7348 7.39464 11.4804 7.20711 11.2929C7.01957 11.1054
                   6.76522 11 6.5 11C6.23478 11 5.98043 11.1054 5.79289 11.2929C5.60536 11.4804 5.5 11.7348 5.5 12C5.5 12.2652 5.60536 
                   12.5196 5.79289 12.7071C5.98043 12.8946 6.23478 13 6.5 13ZM9.5 13C9.76522 13 10.0196 12.8946 10.2071 12.7071C10.3946
                    12.5196 10.5 12.2652 10.5 12C10.5 11.7348 10.3946 11.4804 10.2071 11.2929C10.0196 11.1054 9.76522 11 9.5 11C9.23478
                     11 8.98043 11.1054 8.79289 11.2929C8.60536 11.4804 8.5 11.7348 8.5 12C8.5 12.2652 8.60536 12.5196 8.79289 12.7071C8.98043
                      12.8946 9.23478 13 9.5 13Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_3257_28796">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const IconSearch = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.5 10.5L8.257 8.253L10.5 10.5ZM9.5 5.25C9.5 6.37717 9.05223 7.45817 8.2552 8.2552C7.45817 9.05223 
      6.37717 9.5 5.25 9.5C4.12283 9.5 3.04183 9.05223 2.2448 8.2552C1.44777 7.45817 1 6.37717 1 5.25C1 4.12283
       1.44777 3.04183 2.2448 2.2448C3.04183 1.44777 4.12283 1 5.25 1C6.37717 1 7.45817 1.44777 8.2552 2.2448C9.05223 
       3.04183 9.5 4.12283 9.5 5.25V5.25Z"
      stroke="#525253"
      strokeLinecap="round"
    />
  </svg>
);

export const SelectIcon = ({ rotate }) => {
  return (
    <svg
      width="20"
      height="8"
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute right-0 cursor-pointer pointer-events-none ${rotate && "rotate-180"}`}
    >
      <path
        d=" M3.246 7.08715C3.20733 7.04948 3.042 6.90725 2.906 6.77476C2.05067 5.99801 0.650667 3.97171 
            0.223333 2.91115C0.154667 2.75008 0.00933333 2.34287 0 2.1253C0 1.91683 0.048 1.7181 0.145333 
            1.52845C0.281333 1.29205 0.495333 1.10241 0.748 0.998498C0.923333 0.931604 1.448 0.827691 1.45733 
            0.827691C2.03133 0.723778 2.964 0.666626 3.99467 0.666626C4.97667 0.666626 5.87133 0.723778 6.454 
            0.808857C6.46333 0.818599 7.11533 0.922512 7.33867 1.03617C7.74667 1.24464 8 1.65185 8 2.08764V2.1253C7.99 
            2.40912 7.73667 3.00597 7.72733 3.00597C7.29933 4.00938 5.968 5.98892 5.08333 6.7845C5.08333 6.7845 4.856 
            7.00856 4.714 7.10598C4.51 7.25796 4.25733 7.33329 4.00467 7.33329C3.72267 7.33329 3.46 7.24821 3.246 7.08715Z"
        fill="#979797"
      />
    </svg>
  );
};

