import { useFormContext, Controller } from "react-hook-form";
import { cn } from "@root/lib/utils";
export default function RHFTextField({
  name,
  type,
  textInputCss,
  onBlurHandler = () => {},
  startEndadornment,
  outerDivStyle,
  onChange = () => {},
  endEndadornment,
  ref,
  errorStyle,
  ...other
}: any) {
  const { control, trigger } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className=" w-full items-center space-y-1 my-2">
          <div ref={ref} className={`relative flex items-center space-x-2`}>
            {startEndadornment && <div className="">{startEndadornment}</div>}

            <input
              className={cn(
                `border  rounded-[5px] w-full bg-[#F4F4F4]  focus-visible:outline-none text-f16 py-[10px] px-[20px] font-normal ${
                  !!error
                    ? "focus:border-error border-error"
                    : "focus:border-primary border-customGray"
                } ${textInputCss}`
              )}
              type={type}
              {...field}
              {...other}
              onBlur={(e) => {
                trigger(name);
                onBlurHandler();
              }}
              onChange={(e) => {
                field.onChange(e);
                trigger(name);
                onChange(e);
              }}
            />
            {endEndadornment && (
              <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                {endEndadornment}
              </div>
            )}
          </div>
          {!!error && (
            <h3 className={"text-f12 text-error"}>{error?.message}</h3>
          )}
        </div>
      )}
    />
  );
}
