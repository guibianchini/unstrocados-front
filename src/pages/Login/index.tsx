import React from "react";
import { useForm } from "react-hook-form";
import logo from "../../assets/logo_full_brownbg.svg";
import loginBackground from "src/assets/login_background.webp";
import { Button, Label } from "reactstrap";
import TextComponent from "src/components/TextInput";

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it
  return (
    <div className="vw-100 d-flex flex-column justify-content-start align-items-center">
      <img
        src={loginBackground}
        height={175}
        alt="Login"
        className="w-100 object-fit-cover"
        loading="eager"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="h-100 d-flex flex-column align-items-center container px-5"
      >
        <div className="py-5">
          <img src={logo} alt="Logo" width={150} />
        </div>
        <div className="d-flex flex-column gap-4">
          <TextComponent
            register={register}
            required
            label="E-mail"
            name="email"
            placeholder="Digite seu e-mail"
            type="email"
            error={errors.email ? "E-mail inválido" : ""}
          />
          <TextComponent
            register={register}
            required
            label="Senha"
            name="password"
            placeholder="Digite sua senha"
            type="password"
            error={errors.password ? "E-mail inválido" : ""}
          />
          <Button
            color="secondary"
            className="text-white fw-bold my-3 px-5"
            type="submit"
          >
            Entrar
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
