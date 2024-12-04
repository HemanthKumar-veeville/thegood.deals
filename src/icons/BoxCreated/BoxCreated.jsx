import React from "react";

function BoxCreated({ className, color }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M14.8496 8.94615V6.02115C14.8496 5.54303 14.6809 5.09303 14.3715 4.75553L11.6434 1.6899C11.2777 1.29615 10.7715 1.04303 10.209 1.04303H5.11836C4.58399 1.04303 4.04961 1.26803 3.68398 1.6899L0.983984 4.7274C0.674609 5.0649 0.505859 5.54303 0.505859 5.99303V14.0649C0.505859 15.1337 1.37773 15.9774 2.41836 15.9774H9.75899C10.5746 16.8774 11.7559 17.4399 13.0496 17.4399C15.4965 17.4399 17.4934 15.443 17.4934 12.9962C17.4934 11.1962 16.4246 9.62115 14.8496 8.94615ZM10.6871 2.53365L12.7965 4.89615H8.29648V2.30865H10.209C10.4059 2.30865 10.5746 2.39303 10.6871 2.53365ZM4.64023 2.53365C4.75273 2.39303 4.94961 2.30865 5.11836 2.30865H7.03086V4.89615H2.53086L4.64023 2.53365ZM2.41836 14.7399C2.05273 14.7399 1.77148 14.4587 1.77148 14.093V6.16178H13.6121V8.58053C13.4434 8.5524 13.2465 8.5524 13.0777 8.5524C10.6309 8.5524 8.63399 10.5493 8.63399 12.9962C8.63399 13.6149 8.74649 14.2055 8.97149 14.7399H2.41836ZM13.0496 16.2024C11.2777 16.2024 9.87148 14.768 9.87148 13.0243C9.87148 11.2805 11.2777 9.81803 13.0496 9.81803C14.8215 9.81803 16.2277 11.2524 16.2277 12.9962C16.2277 14.7399 14.8215 16.2024 13.0496 16.2024Z"
        fill={color || "#1B4F4A"}
      />
      <path
        d="M15.2843 12.6381H13.5907V10.9657C13.5907 10.7117 13.379 10.5 13.1038 10.5C12.8498 10.5 12.6381 10.7117 12.6381 10.9869V12.6593H10.9657C10.7117 12.6593 10.5 12.871 10.5 13.1462C10.5 13.4002 10.7117 13.6119 10.9869 13.6119H12.6593V15.2843C12.6593 15.5383 12.871 15.75 13.1462 15.75C13.4002 15.75 13.6119 15.5383 13.6119 15.2631V13.5907H15.2843C15.5383 13.5907 15.75 13.379 15.75 13.1038C15.75 12.8498 15.5383 12.6381 15.2843 12.6381Z"
        fill={color || "#1B4F4A"}
      />
    </svg>
  );
}

export default BoxCreated;
