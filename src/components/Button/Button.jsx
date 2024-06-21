export default function Button({ children, size, handler, isDisabled, type }) {
  const buttonSize = {
    xs: "w-9",
    s: "w-[81px]",
    m: "w-[100px]",
    l: "w-[150px]",
    xl: "W-44 md:w-48",
  };

  return (
    <button
    type={type ? type : "button"}
      onClick={handler}
      className={`rounded-lg text-white h-9 ${buttonSize[size]} bg-[#00AE1C] active:bg-[#0CD52B] disabled:bg-[#187727] disabled:text-[#B9B9B9] hover:border border-solid border-[#5CE171] flex justify-center items-center outline-none`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
}
