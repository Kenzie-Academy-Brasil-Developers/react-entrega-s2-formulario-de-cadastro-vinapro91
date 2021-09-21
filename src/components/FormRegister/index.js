import { Container, TextField, Button } from "@material-ui/core";
import { Box } from "@material-ui/system";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useHistory } from "react-router";
import YupPassword from "yup-password";
import * as yup from "yup";
YupPassword(yup);
const FormRegister = ({ setIsLogeed }) => {
  const [registerData, setRegisterData] = useState([]);

  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nome de usuário obrigatorio")
      .matches(/^[aA-zZ\s]+$/, "Somente Letras"),
    email: yup.string().email().required("E-mail Obrigatorio"),
    password: yup.string().password().required("Senha Obrigatoria"),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Confirmação de senha invalida"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const apiRequest = (registerData) => {
    console.log(registerData);
  };
  registerData && apiRequest(registerData);

  const onSubmit = (data) => {
    setRegisterData(data);
    setIsLogeed(true);
    history.push(`/home/${data.username}`);
  };
  return (
    <Container
      maxWidth="xs"
      sx={{
        border: "black solid 1px",
        backgroundColor: "rgba( 255, 255, 255, 0.55 )",
        backdropFilter: "blur( 10px )",
      }}
      color="primary"
    >
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p>Cadastrar-se</p>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <TextField
              variant="outlined"
              margin="normal"
              label="Usuário"
              type="name"
              helperText={errors.username?.message}
              error={!!errors.username}
              {...register("username")}
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              margin="normal"
              label="E-mail"
              type="email"
              error={!!errors.email}
              helperText={errors.email?.message}
              {...register("email")}
            />
          </div>

          <div>
            <TextField
              variant="outlined"
              margin="normal"
              label="Senha"
              type="password"
              helperText={errors.password?.message}
              error={!!errors.password}
              {...register("password")}
            />
          </div>
          <div>
            <TextField
              variant="outlined"
              margin="normal"
              label="Confirmar Senha"
              type="password"
              helperText={errors.passwordConfirm?.message}
              error={!!errors.passwordConfirm}
              {...register("passwordConfirm")}
            />
          </div>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              color="primary"
              type="submit"
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
export default FormRegister;
