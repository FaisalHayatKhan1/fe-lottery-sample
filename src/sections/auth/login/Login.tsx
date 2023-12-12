import Link from "next/link";
import React from "react";
import { useEffect, useState } from "react";
import { enqueueSnackbar } from "notistack";
import FormProvider from "@root/components/hook-form/FormProvider";
import { EyeOff, Eye } from "lucide-react";
import LoadingComponent from "@root/components/Loading";
// form
import { LoginFormSchema, defaultValues } from ".";
import { useLoginMutation } from "@root/services/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RHFTextField } from "@root/components/hook-form";
import ErrorMessage from "@root/components/ErrorMessage";
import useAuth from "@root/hooks/useAuth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginTrigger, { isLoading }] = useLoginMutation();
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null);
  const { login } = useAuth();

  const methods: any = useForm({
    resolver: yupResolver(LoginFormSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
    reset,
  } = methods;

  const onSubmit = async (credentials: any) => {
    // const res: any = await loginTrigger(credentials);
    // const { data, error } = res;
    if (
      credentials.email === "tempmail@dev.com" &&
      credentials.password === "TEMP_pw1234"
    ) {
      login({
        data: {
          authToken: "71851f095aa751da1c58f8995570d69fc277b925d1c746a1",
          refreshToken: "1f095aa751da1c58f8995570d69fc277b925d1c746a1",
          user: { email: credentials?.email, password: credentials?.password },
        },
      });
    } else {
      setErrorMessage("Email or Password is Incorrect");
      return;
    }
    // if (error) {
    //   setErrorMessage("Email or Password is Incorrect");
    // } else {
    //   reset();
    // }
  };
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {isLoading && <LoadingComponent primaryLoading />}
        <h2 className="text-f37 font-medium text-center">Lottery</h2>
        <div className="rounded-[18px] min-w-[450px] p-8 mt-5 space-y-3 ">
          <RHFTextField
            label="Email"
            type="email"
            name="email"
            placeholder="Username or Email"
            startEndadornment={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.0081 31.75C18.1589 31.75 20.1854 31.3339 22.0876 30.5017C23.9898 29.6803 25.6651 28.5454 27.1134 27.0971C28.5616 25.6489 29.6965 23.979 30.5179 22.0876C31.3393 20.1854 31.75 18.1535 31.75 15.9919C31.75 13.8411 31.3339 11.8146 30.5017 9.91238C29.6803 8.01016 28.5454 6.33492 27.0971 4.88664C25.6489 3.43837 23.9736 2.30353 22.0714 1.48212C20.1692 0.660705 18.1427 0.25 15.9919 0.25C13.8411 0.25 11.8146 0.660705 9.91238 1.48212C8.02097 2.30353 6.34573 3.43837 4.88664 4.88664C3.43837 6.33492 2.30353 8.01016 1.48212 9.91238C0.660705 11.8146 0.25 13.8411 0.25 15.9919C0.25 18.1535 0.660705 20.1854 1.48212 22.0876C2.31433 23.979 3.45458 25.6489 4.90286 27.0971C6.35113 28.5454 8.02097 29.6803 9.91238 30.5017C11.8146 31.3339 13.8465 31.75 16.0081 31.75ZM16.0081 28.8643C14.2248 28.8643 12.5549 28.5292 10.9986 27.8591C9.44223 27.1998 8.07501 26.2811 6.89694 25.1031C5.71886 23.925 4.80018 22.5578 4.14089 21.0014C3.4816 19.4451 3.15196 17.7752 3.15196 15.9919C3.15196 14.2086 3.4816 12.5387 4.14089 10.9824C4.80018 9.42602 5.71886 8.0588 6.89694 6.88073C8.07501 5.70265 9.43682 4.78397 10.9824 4.12468C12.5387 3.46539 14.2086 3.13574 15.9919 3.13574C17.7752 3.13574 19.4451 3.46539 21.0014 4.12468C22.5578 4.78397 23.925 5.70265 25.1031 6.88073C26.2811 8.0588 27.1998 9.42602 27.8591 10.9824C28.5292 12.5387 28.8643 14.2086 28.8643 15.9919C28.8751 17.7752 28.5454 19.4451 27.8753 21.0014C27.216 22.5578 26.2973 23.925 25.1193 25.1031C23.952 26.2811 22.5848 27.1998 21.0176 27.8591C19.4613 28.5292 17.7914 28.8643 16.0081 28.8643ZM26.3352 26.092L26.2865 25.8975C26.0055 25.1409 25.4003 24.4059 24.4708 23.6926C23.5413 22.9793 22.3524 22.3957 20.9041 21.9417C19.4559 21.477 17.8184 21.2446 15.9919 21.2446C14.1761 21.2446 12.5441 21.477 11.0959 21.9417C9.65839 22.3957 8.47491 22.9793 7.54542 23.6926C6.61593 24.4059 5.99987 25.1355 5.69725 25.8812L5.64861 26.092C6.58891 26.9891 7.67512 27.751 8.90723 28.3779C10.1502 29.0156 11.3931 29.4965 12.636 29.8208C13.8897 30.1558 15.0084 30.3233 15.9919 30.3233C16.9862 30.3233 18.1049 30.1558 19.3478 29.8208C20.5907 29.4965 21.8282 29.021 23.0603 28.3941C24.2925 27.7672 25.3841 26.9999 26.3352 26.092ZM15.9919 18.6831C16.9862 18.6939 17.8779 18.4453 18.6669 17.9373C19.4667 17.4294 20.0989 16.7376 20.5637 15.8622C21.0392 14.9867 21.277 13.9978 21.277 12.8954C21.277 11.8578 21.0392 10.9121 20.5637 10.0583C20.0989 9.19364 19.4667 8.50193 18.6669 7.98314C17.8671 7.46436 16.9754 7.20497 15.9919 7.20497C15.0192 7.20497 14.1329 7.46436 13.3331 7.98314C12.5333 8.50193 11.8957 9.19364 11.4201 10.0583C10.9554 10.9121 10.723 11.8578 10.723 12.8954C10.723 13.9978 10.9608 14.9813 11.4363 15.846C11.9119 16.7106 12.5441 17.3969 13.3331 17.9049C14.1221 18.4129 15.0084 18.6723 15.9919 18.6831Z"
                  fill="#656565"
                />
              </svg>
            }
          />
          <RHFTextField
            label="Password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Input Your Password"
            startEndadornment={
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.07379 31.75H19.9262C21.2397 31.75 22.2158 31.4356 22.8545 30.8067C23.4932 30.189 23.8125 29.2233 23.8125 27.9094V16.7412C23.8125 15.4385 23.4932 14.4783 22.8545 13.8607C22.2158 13.243 21.2397 12.9342 19.9262 12.9342H4.07379C2.78438 12.9342 1.81432 13.243 1.16359 13.8607C0.512863 14.4783 0.1875 15.4385 0.1875 16.7412V27.9094C0.1875 29.2233 0.512863 30.189 1.16359 30.8067C1.81432 31.4356 2.78438 31.75 4.07379 31.75ZM4.39915 29.1222C4.01353 29.1222 3.72432 29.0267 3.53151 28.8358C3.33871 28.6561 3.2423 28.3529 3.2423 27.9262V16.7243C3.2423 16.2976 3.33871 16 3.53151 15.8315C3.72432 15.6519 4.01353 15.562 4.39915 15.562H19.637C20.0226 15.562 20.3058 15.6519 20.4866 15.8315C20.6794 16 20.7758 16.2976 20.7758 16.7243V27.9262C20.7758 28.3529 20.6794 28.6561 20.4866 28.8358C20.3058 29.0267 20.0226 29.1222 19.637 29.1222H4.39915ZM3.22423 14.2481H6.2248V8.8746C6.2248 7.58315 6.48991 6.49946 7.02013 5.62353C7.55035 4.73636 8.25531 4.06818 9.13499 3.61898C10.0147 3.16979 10.9727 2.94519 12.009 2.94519C13.0574 2.94519 14.0154 3.16979 14.8831 3.61898C15.7507 4.06818 16.4496 4.73636 16.9799 5.62353C17.5101 6.49946 17.7752 7.58315 17.7752 8.8746V14.2481H20.7938V9.19465C20.7938 7.68984 20.5468 6.37594 20.0527 5.25294C19.5707 4.12995 18.914 3.19786 18.0825 2.45668C17.251 1.71551 16.3111 1.16524 15.2627 0.805882C14.2143 0.435294 13.1297 0.25 12.009 0.25C10.8763 0.25 9.78572 0.435294 8.73733 0.805882C7.68893 1.16524 6.749 1.71551 5.91751 2.45668C5.09808 3.19786 4.44133 4.12995 3.94726 5.25294C3.46524 6.37594 3.22423 7.68984 3.22423 9.19465V14.2481Z"
                  fill="#656565"
                />
              </svg>
            }
            endEndadornment={
              <div
                className="cursor-pointer"
                onClick={() => setShowPassword((show) => !show)}
              >
                {showPassword ? (
                  <Eye
                    className="text-customGray"
                    size={"20px"}
                    strokeWidth={2}
                  />
                ) : (
                  <EyeOff
                    className="text-customGray"
                    size={"20px"}
                    strokeWidth={2}
                  />
                )}
              </div>
            }
          />
          <ErrorMessage
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
          <button
            className="bg-primary text-white w-full py-3 rounded-[12px]"
            type="submit"
          >
            Log in
          </button>
          <div className="flex justify-center">
            <Link className=" underline text-f16 font-normal" href={"#"}>
              Find Password
            </Link>
          </div>
        </div>
      </FormProvider>
    </div>
  );
};

export default Login;
