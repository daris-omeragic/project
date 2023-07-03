import React, { useContext, useEffect, useState } from 'react'
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import Text from '../../components/Text/Text';
import { Grid } from '@mui/material';
import { colors } from '../../util/theme';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import { UserContext } from '../../context/UserContext';
import { fetchAllUsers } from '../../api/userApi';
import { getScreenWidth } from '../../util/helpers';

const Login = () => {
  const screenWidth = getScreenWidth();
  const marginTop = screenWidth === "SM" ? "20px" : "40px";
  const marginLeft = screenWidth === "SM" ? "0px" : "60px";
  const fontSize = screenWidth === "SM" ? "15px" : "16px";
  const marginTopRoundDiv = screenWidth === "SM" ? "40px" : "80px";

  
  const styles = {
    mainDiv: {
      padding: "5% 10%",
    },
    textStyle: {
      fontSize: fontSize.medium,
      marginBottom: "20px",
      color: colors.gray,
      marginTop: marginTop,
    },
    inputStyle: {
      padding: "10px 5px",
      marginBottom: "15px",
      border: 'none',
      background: colors.secondColor,
      fontSize: fontSize,
    },
    checkboxWrapper: {
      display: "flex",
      marginBottom: "20px",
      alignItems: "center",
      gap: "5px",
    },
    buttonStyle: {
      width: "80px",
      display: "flex",
      cursor: "pointer",
      justifyContent: "center",
      fontSize: fontSize.optimal,
      border: "none",
      color: colors.white,
      backgroundColor: colors.accentColor,
      height: '10px',
      borderRadius: '0px'
    },
    roundDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.accentColor,
      borderRadius: "50%",
      color: colors.white,
      width: "60px",
      height: "60px",
      marginTop: marginTopRoundDiv,
      marginLeft: marginLeft,
    },
    formStyle: {
      display: "flex",
      flexDirection: "column",
    },
  };

  const [users, setUsers] = useState([]);
  const { user, setUser } = useContext(UserContext);                        
  const submitHandler = (e) => {
    e.preventDefault();
    setUser({
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
    });
  };
  // Fetch all users
  useEffect(() => {
    let mount = true;

    fetchAllUsers().then((allUsers) => {
      if (mount) {
        setUsers(allUsers);
      }
    });

    return () => {
      mount = false;
    };
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();

    const enteredName = e.target[0].value;
    const enteredEmail = e.target[1].value;

    const loggedInUser = users.find((user) => user.name === enteredName && user.email === enteredEmail);

    if (loggedInUser) {
      setUser({
        name: loggedInUser.name,
        email: loggedInUser.email,
      });

      console.log('Logged in!');
    } else {
      console.log('Invalid credentials!');
    }
  };
console.log(users)
  const logoutHandler = () => {
    setUser({ name: '', email: '' });
    console.log('Logged out!');
  };

  return (
    <Grid item xs={12} sm={12} md={12} lg={12} style={styles.mainDiv} container>
      <Grid item lg={5} md={5} display="flex" flexDirection="column" width="100%">
        {user.name ? (
          <>
            <Text style={styles.textStyle}>Logged in as: {user.name}</Text>
            <PrimaryButton style={styles.buttonStyle} onClick={logoutHandler}>
              Logout
            </PrimaryButton>
          </>
        ) : (
          <form onSubmit={loginHandler} style={styles.formStyle}>
            <Text style={styles.textStyle}>Login to your account</Text>
            <input style={styles.inputStyle} type="text" placeholder="Name" required />
            <input style={styles.inputStyle} type="email" placeholder="Email" required />
            <SimplifiedDiv style={styles.checkboxWrapper}>
              <input type="checkbox" />
              <Text>Keep me signed in</Text>
            </SimplifiedDiv>
            <PrimaryButton style={styles.buttonStyle}>Login</PrimaryButton>
          </form>
        )}
      </Grid>
      <Grid item lg={2} display="flex">
        <SimplifiedDiv style={styles.roundDiv}>OR</SimplifiedDiv>
      </Grid>
      <Grid item lg={5} display="flex" flexDirection="column" width="100%">
        <Text style={styles.textStyle}>New User Signup!</Text>
        <form onSubmit={submitHandler} style={styles.formStyle}>
          <input style={styles.inputStyle} type="text" placeholder="Name" required />
          <input style={styles.inputStyle} type="email" placeholder="Email Address" required />
          <input style={styles.inputStyle} type="password" placeholder="Password" required />
          <PrimaryButton style={styles.buttonStyle}>Signup</PrimaryButton>
        </form>
      </Grid>
    </Grid>
  );
};
export default Login;

