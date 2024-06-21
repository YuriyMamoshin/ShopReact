import { useField } from "formik";

export default function CustomInput({ label, ...props }) {
  const [ field, meta]  = useField(props);

  function defineBorderStyle() {
    return meta.touched && meta.error ? "border-[#FF5620]" : "border-[#737373]";
  }
  return (
    <article className="flex flex-col mt-4 mr-[14px] lg:mt-0 md:mr-[44px] relative">
      <label className="text-[10px] font-bold">{label}</label>
      <input
        {...field}
        {...props}
        className={`${defineBorderStyle()} active:border-[#243573] border-solid border-b w-[300px] outline-none`}
      />
       {meta.touched && meta.error && <p className="text-[#FF5620] text-[10px] absolute bottom-[-20px]">{meta.error}</p>}
    </article>
  );
}
