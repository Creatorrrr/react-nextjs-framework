import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginForm({ loginId, onLoginIdChanged, password, onPasswordChanged, keepLoginId, onKeepLoginIdChanged, onLoginSubmit }) {
  const classes = useStyles();
  const { t } = useTranslation("loginForm");

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            onLoginSubmit();
          }}
          className={classes.form}
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="LoginId"
            name="loginId"
            autoFocus
            value={loginId}
            onChange={(event) => onLoginIdChanged(event.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => onPasswordChanged(event.target.value)}
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={keepLoginId} onChange={(event) => onKeepLoginIdChanged(event.target.checked)} />}
            label={t("KEEP_LOGIN_ID")}
          />
          <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
            {t("LOGIN")}
          </Button>
        </form>
      </div>
    </Container>
  );
}
