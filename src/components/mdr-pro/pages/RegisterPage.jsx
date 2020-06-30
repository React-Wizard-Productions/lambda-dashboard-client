import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  FormControlLabel,
  InputAdornment,
  Icon,
  Typography,
} from '@material-ui/core';
import Face from '@material-ui/icons/Face';
import LockOutlined from '@material-ui/icons/LockOutlined';
import SchoolIcon from '@material-ui/icons/School';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import {
  GridContainer,
  GridItem,
  Card,
  CardBody,
  InfoArea,
  RegularButton as Button,
  CustomInput,
} from '..';
import { useForm } from '../../../hooks/useForm';

const useStyles = makeStyles((theme) => ({
  cardTitle: {
    ...theme.dashboard.card.title,
    textAlign: 'center',
  },
  container: {
    ...theme.dashboard.container.default,
    position: 'relative',
    zIndex: 3,
  },
  cardSignUp: {
    borderRadius: 6,
    boxShadow: `0 16px 24px 2px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette.blackColor,
    )}, 0.14), 0 6px 30px 5px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette.blackColor,
    )}, 0.12), 0 8px 10px -5px rgba(${theme.dashboard.hexToRgb(
      theme.dashboard.palette.blackColor,
    )}, 0.2)`,
    marginBottom: 100,
    padding: '40px 0',
    marginTop: '15vh',
  },
  center: {
    textAlign: 'center',
  },
  right: {
    textAlign: 'right',
  },
  left: {
    textAlign: 'left',
  },
  form: {
    padding: '0 20px',
    position: 'relative',
  },
  socialTitle: {
    fontSize: 18,
  },
  inputAdornment: {
    marginRight: 18,
    position: 'relative',
  },
  inputAdornmentIcon: {
    color: theme.dashboard.palette.gray[6],
  },
  customFormControlClasses: {
    margin: '0 12px',
  },
}));

function RegisterPage() {
  const classes = useStyles();
  const [values, handleChange, handleSubmit] = useForm(
    {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    () => console.log(values),
  );

  return (
    <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} md={10}>
          <Card className={classes.cardSignUp}>
            <Typography variant="h2" className={classes.cardTitle}>
              Register
            </Typography>
            <CardBody>
              <GridContainer justify="center">
                <GridItem xs={12} md={5}>
                  <InfoArea
                    title="Pay nothing upfront"
                    description="You don't pay tuition until you land a job making at least $50k a year."
                    icon={AttachMoneyIcon}
                    iconColor="success"
                  />
                  <InfoArea
                    title="We help get you hired"
                    description="We'll help you hunt down jobs, nail interviews, and negotiate salary."
                    icon={DeveloperModeIcon}
                    iconColor="secondary"
                  />
                  <InfoArea
                    title="Rethink Learning"
                    description="Lambda is a different way to school.  Our 9 month, 40-hour-a-week online curriculum was created with input from hiring managers in the tech industry and pairs academic theory with real-world experience."
                    icon={SchoolIcon}
                    iconColor="primary"
                  />
                </GridItem>
                <GridItem xs={12} sm={8} md={5}>
                  <div className={classes.center}>
                    <Button justIcon round color="twitter">
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button justIcon round color="dribble">
                      <i className="fab fa-dribbble" />
                    </Button>
                    <Button justIcon round color="facebook">
                      <i className="fab fa-facebook-f" />
                    </Button>
                    <h4 className={classes.socialTitle}>or be classical</h4>
                  </div>
                  <form className={classes.form}>
                    <GridContainer>
                      <GridItem xs={12} md={6}>
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlProps,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: 'First Name...',
                            name: 'firstName',
                            value: values.firstName,
                            onChange: handleChange,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} md={6}>
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlProps,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: 'Last Name...',
                            name: 'lastName',
                            value: values.lastName,
                            onChange: handleChange,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12}>
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlProps,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <Face className={classes.inputAdornmentIcon} />
                              </InputAdornment>
                            ),
                            placeholder: 'Username...',
                            name: 'username',
                            value: values.username,
                            onChange: handleChange,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} md={6}>
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlProps,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <LockOutlined
                                  className={classes.inputAdornmentIcon}
                                />
                              </InputAdornment>
                            ),
                            placeholder: 'Password...',
                            type: 'password',
                            autoComplete: 'off',
                            name: 'password',
                            value: values.password,
                            onChange: handleChange,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} md={6}>
                        <CustomInput
                          formControlProps={{
                            fullWidth: true,
                            className: classes.customFormControlProps,
                          }}
                          inputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className={classes.inputAdornment}
                              >
                                <LockOutlined
                                  className={classes.inputAdornmentIcon}
                                />
                              </InputAdornment>
                            ),
                            placeholder: 'Confirm Password...',
                            type: 'password',
                            autoComplete: 'off',
                            name: 'confirmPassword',
                            value: values.confirmPassword,
                            onChange: handleChange,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12}>
                        <div className={classes.center}>
                          <Button
                            round
                            color="primary"
                            disabled={
                              values.password !== values.confirmPassword
                            }
                          >
                            Get Started
                          </Button>
                        </div>
                      </GridItem>
                    </GridContainer>
                  </form>
                </GridItem>
              </GridContainer>
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default RegisterPage;
