"use client";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/material";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { setCookie } from "cookies-next";

import LoadingButton from "@/components/common/Loading";
import { SignInType } from "@/types/common";
import { SignInAPI } from "@/services/auth";
import { statusApiReducer } from "@/stores/reducers/statusAPI";
import { useAppDispatch } from "@/stores/hook";
import { CookiesStorage } from "@/shared/config/cookie";
import { usersReducer } from "@/stores/reducers/user";
import { LocalStorage } from "@/shared/config/localStorage";

const SignInPage = () => {
  const { register, handleSubmit } = useForm();
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  //variable
  const dispatch = useAppDispatch();
  const router = useRouter();

  //Function
  const onSubmit = async (values: SignInType | any) => {
    setIsSubmit(true);
    try {
      const { data } = await SignInAPI(values);
      setIsSubmit(false);
      const roleName = data?.data?.user.role.roleName;
      if (roleName === "CUSTOMER") router.push("/");
      if (roleName === "ADMIN") router.push("/admin");
      LocalStorage.add("user", JSON.stringify(data?.data?.user));
      CookiesStorage.setCookieData("token", data?.data?.tokens?.accessToken);
      setCookie("role", data?.data?.user.role.roleName);
      dispatch(
        statusApiReducer.actions.setMessageSuccess("Đăng nhập thành công!")
      );
      dispatch(usersReducer.actions.setUserInfo(data?.data?.user));
    } catch (e: any) {
      dispatch(statusApiReducer.actions.setMessageError("Đăng nhập thất bại!"));
    } finally {
      setIsSubmit(false);
    }
  };

  return (
    <Container component="main" maxWidth="lg">
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Grid container>
          <CssBaseline/>
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage:
                "url(https://media.mia.vn/uploads/blog-du-lich/sky-view-restaurant-nha-hang-lang-man-ly-tuong-cho-cac-cap-doi-tai-da-nang-2-1636459839.jpg)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t: any) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography component="h1" variant="h5">
                ĐĂNG NHẬP
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  {...register("email")}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  {...register("password")}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary"/>}
                  label="Nhớ mật khẩu"
                  sx={{ color: "var(--clr-gray-500)", fontSize: "13px" }}
                />
                <Button
                  startIcon={isSubmit && <LoadingButton/>}
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="bg-blue-500 tẽt-[14px] font-[600]"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Đăng nhập
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/register  " variant="body2">
                      Quên mật khẩu?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/dang-ky" variant="body2">
                      {"Chưa có tài khoản ? Đăng ký"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};
export default SignInPage;
