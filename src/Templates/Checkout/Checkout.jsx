import { Grid } from '@mui/material';
import React, { useState } from 'react'
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import { colors, fontSize, fontWeight } from '../../util/theme';
import Text from '../../components/Text/Text';
import CloseIcon from '@mui/icons-material/Close';
import CartPage from '../../Pages/CartPage/CartPage';
import { useDispatch, useSelector } from 'react-redux';
import { setBillTo, setShippingOrder, setShopperInformation } from '../../redux/CheckoutSlice';
import { getScreenWidth } from '../../util/helpers';


const Checkout = () => {
  const screenWidth = getScreenWidth();
  const display = screenWidth === "SM" ? "block" : "flex";
  let selectedFontSize = screenWidth === 'SM' ? fontSize.xSmall :  fontSize.small;
  const justifyContent = screenWidth === 'SM' ? 'center' : 'start';
  const marginTop = screenWidth === 'SM' ? '13px' : '0px';




  const styles = {
    inputStyle: {
      padding: '7px',
      border: 'none',
      background: colors.secondColor,
      color: colors.gray,
    },
    textarea: {
      width: '245px',
      height: '300px',
      fontSize: fontSize.xSmall,
      resize: 'none'
    },
    text: {
      fontSize: fontSize.normal,
      color: colors.gray,
      marginBottom : '20px',
      marginTop : '20px'
    },
    formStyle: {
      display: 'flex',
      flexDirection: 'column',
      width: '200px',
      gap: '6px',
      marginTop : '20px'   
    },
    buttonStyle: {
      background: colors.accentColor,
      border: 'none',
      margin: '10px 5px',
      color: colors.white,
      padding: '7px 10px',
      marginTop : '20px'
    },
    cancelButton: {
      borderRadius: '50%',
      background: colors.accentColor,
      border: 'none',
      width: '20px',
      height: '20px',
      display: 'flex',
      justifyContent: 'center',
      marginLeft: '10px',
      alignItems : 'center',
      
      cursor : 'pointer'
    },
    divStyle: {
      background: '#f0f0e9',
      padding: '10px 12px',
      height: '25px',
      margin: '5px',
      display : 'flex',
      alignItems : 'center'
    },
  }

  const dispatch = useDispatch();
  const shippingOrder = useSelector((state) => state.checkout.shippingOrder);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [passwordError, setPasswordError] = useState(false);




  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the form values
    const shopperInfoForm = {
      displayName: formData[0]?.trim() || '',
      userName: formData[1]?.trim() || '',
      passwordInput: formData[2]?.trim() || '',
      confirmPassword: formData[3]?.trim() || '',
    };

    const billToForm = {
      companyName: formData[4]?.trim() || '',
      email: formData[5]?.trim() || '',
      title: formData[6]?.trim() || '',
      firstName: formData[7]?.trim() || '',
      middleName: formData[8]?.trim() || '',
      lastName: formData[9]?.trim() || '',
      address1: formData[10]?.trim() || '',
      address2: formData[11]?.trim() || '',
      zipCode: formData[12]?.trim() || '',
      mobilePhone: formData[13]?.trim() || '',
      phone: formData[14]?.trim() || '',
      fax: formData[15]?.trim() || '',
      country: selectedCountry,
      region: selectedRegion,
      passwordInput: formData[16]?.trim() || '',

    };

    const shippingOrderForm = {
      notesInput: document.getElementById('notesInput').value,
      // include other shipping order form fields...
    };

    

    // Check if all required fields are filled
    const requiredFields = [
      shopperInfoForm.displayName,
      shopperInfoForm.userName,
      shopperInfoForm.passwordInput,
      shopperInfoForm.confirmPassword,
      billToForm.companyName,
      billToForm.email,
      billToForm.firstName,
      billToForm.address1,
      billToForm.zipCode,
      billToForm.phone,
    ];

    const isFormValid = requiredFields.every((field) => field.trim() !== '');

    if (!isFormValid) {
      alert('Molimo popunite sva obavezna polja.');
      return;
    }
 

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(billToForm.email)) {
      alert('Unesite ispravnu adresu e-pošte.');
      return;
    }

    // Validate password length
    if (shopperInfoForm.passwordInput.length < 6) {
      alert('Lozinka mora sadržavati najmanje 6 znakova.');
      return;
    }

    // Validate phone number format
    const phoneRegex = /^\d{10}$/; // Assuming 10-digit phone number format
    if (!phoneRegex.test(billToForm.phone)) {
      alert('Unesite ispravan broj telefona.');
      return;
    }

    // Validate passwords
    if (shopperInfoForm.passwordInput !== shopperInfoForm.confirmPassword) {
      alert('Lozinke se ne podudaraju.');
      return;
    }

    // Dispatch actions to update the Redux store
    dispatch(setShopperInformation(shopperInfoForm));
    dispatch(setBillTo(billToForm));
    dispatch(setShippingOrder(shippingOrderForm));

    console.table('Shopper Information', shopperInfoForm);
    console.table('Bill To', billToForm);
    console.table('Shipping Order', shippingOrderForm);
  };


  const countryOptions = [
    { label: 'United States', value: 'United States' },
    { label: 'UK', value: 'UK' },
    { label: 'Serbia', value: 'Serbia' },
    { label: 'Ucrane', value: 'Ucrane' },
    { label: 'Dubai', value: 'Dubai' },
    { label: 'Bangladesh', value: 'Bangladesh' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Pakistan', value: 'Pakistan' },
  ];

  const regionOptions = [
    { label: 'United States', value: 'United States' },
    { label: 'UK', value: 'UK' },
    { label: 'Serbia', value: 'Serbia' },
    { label: 'Ucrane', value: 'Ucrane' },
    { label: 'Dubai', value: 'Dubai' },
    { label: 'Bangladesh', value: 'Bangladesh' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Pakistan', value: 'Pakistan' },
  ];

  const handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    setSelectedCountry(selectedCountry);
  };

  const handleRegionChange = (event) => {
    const selectedRegion = event.target.value;
    setSelectedRegion(selectedRegion);
  };

  const [formData, setFormData] = useState({
    displayName: '',
    userName: '',
    passwordInput: '',
    confirmPassword: '',
    companyName: '',
    email: '',
    title: '',
    firstName: '',
    middleName: '',
    lastName: '',
    address1: '',
    address2: '',
    zipCode: '',
    phone: '',
    fax: '',
    country: '',
    region: '',
    shippingOrder: '',
  });


  const handleCancel = () => {
    setFormData(['']);
  };
  

  const handleInputChange = (event, property) => {
    setFormData({ ...formData, [property]: event.target.value });
  };

  return (
    <Grid container direction="column" width="100%" minHeight="100vh" padding="5% 10%" display={display} justifyContent='center'>
    <Grid item xs={12} sm={12} md={2} lg={2}>
      <SimplifiedDiv style={styles.divStyle}>
        <Text style={{ fontSize: fontSize.normal, color: colors.black, fontWeight: fontWeight.bold }}>Step 1</Text>
      </SimplifiedDiv>
      <SimplifiedDiv style={{ background: '#ffffff', padding: '10px 12px', marginBottom: '25px' }}>
        <Text style={{ fontSize: fontSize.normal }}>New User</Text>
        <Text style={{ fontSize: '12px', color: colors.gray }}>Checkout options</Text>
        <SimplifiedDiv style={{ display: 'flex', alignItems: 'center', justifyContent: justifyContent, marginTop: '7px',flexWrap : 'wrap' }}>
          <SimplifiedDiv style={{ display: 'flex', alignItems: 'center' }}>
            <label style={{ display: 'flex', marginRight: '20px' ,alignItems : 'center' }}>
              <input type="checkbox" />
              <span style={{ color: colors.gray, fontSize: fontSize.optimal }}>Register Account</span>
            </label>
            <label style={{ display: 'flex', marginRight: '20px' ,alignItems : 'center' }}>
              <input type="checkbox" />
              <span style={{ color: colors.gray, fontSize: fontSize.optimal }}>Guest Checkout</span>
            </label>
          </SimplifiedDiv>
          <SimplifiedDiv style={{ display: 'flex', alignItems: 'center',marginTop : marginTop, }}>
            <button style={styles.cancelButton} onClick={handleCancel}>
              <span style={{ color: 'white' }}>
                <CloseIcon style={{ width: '12px', height: '10px' }} />
              </span>
            </button>
            <Text style={{ marginLeft: '10px', color: colors.accentColor }}>Cancel</Text>
          </SimplifiedDiv>
        </SimplifiedDiv>
      </SimplifiedDiv>
      <SimplifiedDiv style={{ background: '#f0f0e9', padding: '12px', marginBottom: '25px' }}>
        <Text style={{ color: colors.gray, fontSize: selectedFontSize }}>Please use Register And Checkout to easily get access to your order history, or use Checkout as Guest</Text>
      </SimplifiedDiv>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} display={display}flexDirection="row" gap="40px">
        <SimplifiedDiv>
          <Text style={styles.text}>Shopper Information</Text>
          <form style={styles.formStyle}>

            <input
              style={styles.inputStyle}
              id="displayName"
              placeholder="Display Name"
              value={formData[0] || ''}
              onChange={(event) => handleInputChange(event, 0)}
            />

            <input
              style={styles.inputStyle}
              type="text"
              id="userName"
              placeholder="User Name"
              value={formData[1] || ''}
              onChange={(event) => handleInputChange(event, 1)}

            />

            <input
              style={styles.inputStyle}
              type="password"
              id="passwordInput"
              placeholder="Password"
              value={formData[2] || ''}
              onChange={(event) => handleInputChange(event, 2)}
            />

            <input
              style={styles.inputStyle}
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={formData[3] || ''}
              onChange={(event) => handleInputChange(event, 3)}
            />
            {passwordError && <Text style={styles.errorText}>Passwords do not match</Text>}

          </form>

          <button style={styles.buttonStyle}>Get Quotes</button>
          <button style={styles.buttonStyle} type="submit" onClick={handleSubmit}>Continue</button>

        </SimplifiedDiv>
        <SimplifiedDiv>
          <Text style={styles.text}>Bill To</Text>

          <form style={styles.formStyle}>

            <input
              style={styles.inputStyle}
              type="text"
              id="companyName"
              placeholder="Company Name"
              value={formData[4] || ''}
              onChange={(event) => handleInputChange(event, 4)}
            />
            <input
              style={styles.inputStyle}
              type="email"
              id="email"
              placeholder="Email*"
              value={formData[5] || ''}
              onChange={(event) => handleInputChange(event, 5)}
            />
            <input
              type="text"
              id="title"
              placeholder="Title"
              value={formData[6] || ''}
              onChange={(event) => handleInputChange(event, 6)}
              style={styles.inputStyle} />
            <input type="text"
              id="firstName"
              placeholder="FirstName"
              value={formData[7] || ''}
              onChange={(event) => handleInputChange(event, 7)}
              style={styles.inputStyle} />

            <input type="text"
              id="middleName"
              placeholder="Middle Name"
              value={formData[8] || ''}
              onChange={(event) => handleInputChange(event, 8)}
              style={styles.inputStyle} />
              
            <input type="text"
              id="lastName"
              placeholder="Last Name"
              value={formData[9] || ''}
              onChange={(event) => handleInputChange(event, 9)}
              style={styles.inputStyle} />

            <input type="text" id="address1"
              placeholder="Address 1*"
              value={formData[10] || ''}
              onChange={(event) => handleInputChange(event, 10)}
              style={styles.inputStyle} />

            <input type="text" id="address2"
              placeholder="Address 2"
              value={formData[11] || ''}
              onChange={(event) => handleInputChange(event, 11)}
              style={styles.inputStyle} />
          </form>
        </SimplifiedDiv>
        <SimplifiedDiv style={{marginTop : '20px'}}>
          <br />
          <form style={styles.formStyle}>

            <input type="text"
              id="zip-input"
              placeholder="Zip /Postal Code *"
              value={formData[12] || ''}
              onChange={(event) => handleInputChange(event, 12)}
              style={styles.inputStyle} />

            <select name="country" style={styles.inputStyle} onChange={handleCountryChange}>
              <option value="">-- Odaberite državu --</option>
              {countryOptions.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <select name="region" style={styles.inputStyle} onChange={handleRegionChange}>
              <option value="">-- Odaberite region --</option>
              {regionOptions.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
            </select>


            <input type="password"
              id="confirmPassword2"
              placeholder="Confirm Password"
              value={formData[16] || ''}
              onChange={(event) => handleInputChange(event, 16)}
              style={styles.inputStyle} />
            {passwordError && <Text style={styles.errorText}>Passwords do not match</Text>}

            <input
              style={styles.inputStyle}
              type="text" id="phone"
              placeholder="Phone *"
              value={formData[14] || ''}
              onChange={(event) => handleInputChange(event, 14)} />

            <input
              style={styles.inputStyle}
              type="text" id="phone2"
              placeholder="Mobil Phone *"
              value={formData[13] || ''}
              onChange={(event) => handleInputChange(event, 13)} />

            <input
              style={styles.inputStyle}
              type="text" id="faxInput"
              placeholder="Fax"
              value={formData[15] || ''}
              onChange={(event) => handleInputChange(event, 15)} />
          </form>
        </SimplifiedDiv>

        <SimplifiedDiv>
          <Text style={styles.text}>Shipping Order</Text>
          <form style={styles.formStyle}>
            <label htmlFor="notesInput"></label>
            <textarea
              style={styles.textarea}
              id="notesInput"
              placeholder="Notes about your order, Special Notes for Delivery"
              value={shippingOrder.notesInput}
              onChange={(event) => setShippingOrder({ ...shippingOrder, notesInput: event.target.value })}
            >
            </textarea>
          </form>
        </SimplifiedDiv>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} >
        <CartPage />
      </Grid>
    </Grid>
  )
}
export default Checkout;
