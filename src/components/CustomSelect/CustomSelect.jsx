import { useField } from "formik";

export default function CustomSelect({ label, ...props }) {
  const [ field, meta]  = useField(props);

  function defineBorderStyle() {
    return meta.touched && meta.error ? "border-[#FF5620]" : "border-[#737373]";
  }
  return (
    <article className="flex flex-col mt-4 lg:mt-0 mr-[44px] relative">
      <label className="text-[10px] font-bold">{label}</label>
      <select
        {...field}
        {...props}
        className={`${defineBorderStyle()} active:border-[#243573] border-solid border-b w-[250px] outline-none`}
      />
       {meta.touched && meta.error && <p className="text-[#FF5620] text-[10px] absolute bottom-[-20px]">{meta.error}</p>}
    </article>
  );
}
