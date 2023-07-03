import React, { useState } from 'react'
import { colors, fontFamily, fontSize } from '../../util/theme';
import { Grid, TextField } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useSelector, useDispatch } from 'react-redux';
import { updateContactForm, clearContactForm } from '../../redux/ContactSlice.js';
import styled from 'styled-components';
import SimplifiedDiv from '../SimplifiedDiv/SimplifiedDiv';
import Text from '../Text/Text';

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Icon = styled.div`
  font-size: 24px;
  margin: 0 10px;
  cursor: pointer;
  transition: color 0.3s ease;
  color: gray;

  &:hover {
    color: ${props => props.hoverColor};
    background-color: ${props => props.hoverBackground};
  }
`;


const Contact = () => {

  const styles = {
    containerStyle: {
      display: 'flex',
      alignItems: 'center',
      margin: ' 5% 10%',
    },

    lineStyle: {
      flex: '1',
      height: '0.1px',
      backgroundColor: colors.lightGray,
    },

    textStyle: {
      margin: '0 20px',
      textAlign: 'center',
      fontSize: "7px",
      color: colors.accentColor,
      fontFamaily: fontFamily.LatoRegular,
    },
    contactText: {
      fontSize: fontSize.optimal,
      color: colors.gray,
      margin: '7px 30px'
    }

  }


  const [submittedFormData, setSubmittedFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    nameError: '',
    emailError: '',
    subjectError: '',
    messageError: '',
  });

  const successMessage = useSelector(state => state.successMessage);
  const dispatch = useDispatch();
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormChange = e => {
    const { name, value } = e.target;
    setSubmittedFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { name, email, subject, message } = submittedFormData;
  
    if (!name || !email || !subject || !message) {
      setFormErrors({
        nameError: !name ? 'Popunite ovo polje.' : '',
        emailError: !email ? 'Popunite ovo polje.' : '',
        subjectError: !subject ? 'Popunite ovo polje.' : '',
        messageError: !message ? 'Popunite ovo polje.' : '',
      });
      return;
    }
  
    console.log(submittedFormData);
    dispatch(updateContactForm('Uspešno ste poslali poruku!'));
    resetForm();
  };

  const resetForm = () => {
    setSubmittedFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    setFormErrors({
      nameError: '',
      emailError: '',
      subjectError: '',
      messageError: '',
    });

    dispatch(clearContactForm());
    setIsFormSubmitted(true); // Set isFormSubmitted to true
  };

  return (
    <>
      <SimplifiedDiv style={styles.containerStyle}>
        <SimplifiedDiv style={styles.lineStyle} />
        <SimplifiedDiv style={styles.textStyle}>
          <h1>CONTACT US</h1>
        </SimplifiedDiv>
        <SimplifiedDiv style={styles.lineStyle} />
      </SimplifiedDiv>
      <Grid container direction="row" style={{ padding: '10%' }}>
        <Grid item xs={12} sm={12} md={8} lg={8}>
          <SimplifiedDiv style={{ ...styles.containerStyle, margin: '15px 3px' }}>
            <SimplifiedDiv style={styles.lineStyle} />
            <SimplifiedDiv style={styles.textStyle}>
              <h1>GET IN TOUCH</h1>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.lineStyle} />
          </SimplifiedDiv>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Name"
                fullWidth
                name="name"
                value={submittedFormData.name}
                onChange={handleFormChange}
                error={Boolean(formErrors.nameError)}
                helperText={formErrors.nameError}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                fullWidth
                required
                name="email"
                value={submittedFormData.email}
                onChange={handleFormChange}
                error={Boolean(formErrors.emailError)}
                helperText={formErrors.emailError}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Subject"
                fullWidth
                name="subject"
                value={submittedFormData.subject}
                onChange={handleFormChange}
                error={Boolean(formErrors.subjectError)}
                helperText={formErrors.subjectError}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                label="Your Message Here"
                fullWidth
                multiline
                name="message"
                inputProps={{ style: { height: '100px' } }}
                value={submittedFormData.message}
                onChange={handleFormChange}
                error={Boolean(formErrors.messageError)}
                helperText={formErrors.messageError}
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <button style={{ background: colors.accentColor, color: colors.white, border: 'none', padding: '10px' }} onClick={handleSubmit}>
                Submit
              </button>
              {isFormSubmitted && successMessage && (
                <SimplifiedDiv style={{ color: 'green', margin: '10px' }}>{successMessage}</SimplifiedDiv>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <SimplifiedDiv style={{ ...styles.containerStyle, margin: '15px 30px' }}>
            <SimplifiedDiv style={styles.lineStyle} />
            <SimplifiedDiv style={styles.textStyle}>
              <h1>CONTACT INFO</h1>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.lineStyle} />
          </SimplifiedDiv>
          <SimplifiedDiv>
            <Text style={styles.contactText}>E-Shopper Inc.</Text>
            <Text style={styles.contactText}>935 W. Webster Ave New Streets Chicago, IL</Text>
            <Text style={styles.contactText}>60614, NY</Text>
            <Text style={styles.contactText}>New York, USA</Text>
            <Text style={styles.contactText}>Mobile: +2346 17 38 93</Text>
            <Text style={styles.contactText}>Fax: 1-714-252-0026</Text>
            <Text style={styles.contactText}>Email: info@e-shopper.com</Text>
          </SimplifiedDiv>
          <SimplifiedDiv style={{ ...styles.containerStyle, margin: '15px 30px' }}>
            <SimplifiedDiv style={styles.lineStyle} />
            <SimplifiedDiv style={styles.textStyle}>
              <h1>SOCIAL NETWORKING</h1>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.lineStyle} />
          </SimplifiedDiv>
          <IconContainer>
            <Icon hoverColor ='blue'>
              <FacebookIcon />
            </Icon>
            <Icon hoverColor ='lightBlue'>
              <TwitterIcon />
            </Icon>
            <Icon hoverColor ='lightGreen'>
              <WhatsAppIcon />
            </Icon>
            <Icon hoverColor ='red'>
              <YouTubeIcon />
            </Icon>
          </IconContainer>
        </Grid>
      </Grid>
    </>
  );
};

export default Contact;