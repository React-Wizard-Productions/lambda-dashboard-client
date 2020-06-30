import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Icon, InputAdornment } from "@material-ui/core";
import Face from "@material-ui/icons/Face";
import Email from "@material-ui/icons/Email";

import {
  CustomInput,
  CardBody,
  GridContainer,
  Card,
  CardHeader,
  CardFooter,
  GridItem,
  RegularButton as Button,
} from "..";

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.dashboard.container.default,
    zIndex: 4,
    [theme.breakpoints.down("sm")]: {
      paddingBottom: 100,
    },
  },
  cardHidden: {
    opacity: 0,
    transform: "translate3d(0,-60px,0)",
  },
  cardHeader: { marginBottom: 20 },
  textCenter: { textAlign: "center" },
  cardTitle: {
    ...theme.dashboard.card.title,
    color: theme.dashboard.palette.whiteColor,
  },
  inputAdornment: {
    marginRight: 18,
  },
  inputAdornmentIcon: {
    color: theme.dashboard.palette.gray[6],
  },
  justifyContentCenter: { justifyContent: "center !important" },
  customButtonClass: {
    "&,&:focus,&:hover": {
      color: theme.dashboard.palette.whiteColor,
    },
    marginLeft: 5,
    marginRight: 5,
  },
  socialLine: {
    padding: "0.9375rem 0",
  },
}));
export function LoginPage() {
  const [cardAnimation, setCardAnimation] = useState("cardHidden");
  const classes = useStyles();

  useEffect(() => {
    const id = setTimeout(() => {
      setCardAnimation("");
    }, 700);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={6} md={4}>
          <form>
            <Card login className={classes[cardAnimation]}>
              <CardHeader
                className={`${classes.cardHeader} ${classes.textCenter}`}
                color="secondary"
              >
                <h4 className={classes.cardTitle}>Log In</h4>
                <div className={classes.socialLine}>
                  {[
                    "fab fa-facebook-square",
                    "fab fa-twitter",
                    "fab fa-google-plus",
                  ].map((icon, key) => {
                    return (
                      <Button
                        color="transparent"
                        justIcon
                        key={key}
                        className={classes.customButtonClass}
                      >
                        <i className={icon} />
                      </Button>
                    );
                  })}
                </div>
              </CardHeader>
              <CardBody>
                <CustomInput
                  labelText="Username..."
                  id="username"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Face className={classes.inputAdornmentIcon} />
                      </InputAdornment>
                    ),
                  }}
                />
                <CustomInput
                  labelText="Password"
                  id="password"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <Icon className={classes.inputAdornmentIcon}>
                          lock_outline
                        </Icon>
                      </InputAdornment>
                    ),
                    type: "password",
                    autoComplete: "off",
                  }}
                />
              </CardBody>
              <CardFooter className={classes.justifyContentCenter}>
                <Button color="secondary" simple size="lg" block>
                  Let ' s Go
                </Button>
              </CardFooter>
            </Card>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default LoginPage;
