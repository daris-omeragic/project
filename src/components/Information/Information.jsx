import React from 'react'
import SimplifiedDiv from '../SimplifiedDiv/SimplifiedDiv';
import Text from '../Text/Text';
import { colors, fontSize } from '../../util/theme';
import { getScreenWidth } from '../../util/helpers';




const Information = () => {
  const screenWidth = getScreenWidth();
  const display = screenWidth === 'SM' ? 'block' : 'flex';
  const marginLeft = screenWidth === 'SM' ? '0px' : '25px';
  const marginTop = screenWidth === 'SM' ? '5px' : '0px';
  const marginTopSecondContainer = screenWidth === 'SM' ? '30px' : '0px';
  
  const styles = {
    container: {
      padding: "5% 10%",
      display: display,
    },
    couponCodeLabelStyle: {
      fontSize: fontSize.small,
      color: colors.gray,
      marginLeft: "5px",
    },
    ul: {
      listStyleType: "none",
      margin: "0px",
      padding: "30px",
    },
    li: {
      background: colors.secondColor,
      color: colors.gray,
      fontSize: fontSize.optimal,
      padding: "5px",
      marginTop: "10px",
      display: display,
      justifyContent: "space-between",
    },
    liSpan: {
      textAlign: "right",
      padding: "0px 5px",
    },
    button: {
      color: colors.white,
      background: colors.accentColor,
      border: "none",
      padding: "5px 10px",
      fontSize: fontSize.small,
      cursor: "pointer",
      marginTop: "15px",
    },
    countrySelectStyle: {
      width: "130px",
      color: colors.gray,
      fontSize: fontSize.small,
      padding: "3px",
      background: colors.secondColor,
      marginTop: marginTop
    },
    text: {
      marginBottom: "5px",
      color: colors.gray,
      fontSize: fontSize.optimal,
      marginTop: marginTop
    },
    firstContainer: {
      width: screenWidth === 'SM' ? '81%' : '70%',
      height: "30vh",
      border: "0.5px solid lightGray",
      padding: "30px",
      lineHeight: "10px",
    },
    secondContainer: {
      width: screenWidth === 'SM' ? '100%' : '70%',
      height: "40vh",
      border: "0.5px solid lightGray",
      marginLeft: screenWidth === 'SM' ? '0px' : '25px',
      marginTop : marginTopSecondContainer,
    },
  };

  return (
    <>
      <SimplifiedDiv style={styles.container}>
        <SimplifiedDiv style={styles.firstContainer}>
          <label>
            <input type="checkbox" />
            <span style={styles.couponCodeLabelStyle}> Use Coupon Code</span>
          </label>
          <br />
          <label>
            <input type="checkbox" />
            <span style={styles.couponCodeLabelStyle}> Use Gift Voucher</span>
          </label>
          <br />
          <label>
            <input type="checkbox" />
            <span style={styles.couponCodeLabelStyle}> Estimate Shipping & Taxes</span>
          </label>
          <SimplifiedDiv style={{ display: display, margin: "25px 0px" }}>
            <SimplifiedDiv style={{ display: display, flexDirection: "column" }}>
              <Text style={styles.text}>Country:</Text>
              <select name="drzava" style={styles.countrySelectStyle}>
                <option value="United States">United Sates</option>
                <option value="UK">UK</option>
                <option value="Serbia">Serbia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Dubai">Dubai</option>
                <option value="Canada">Canada</option>
              </select>
            </SimplifiedDiv>
            <SimplifiedDiv style={{ display: display, flexDirection: "column", marginLeft: marginLeft }}>
              <Text style={styles.text}>Region / State:</Text>
              <select name="Select" style={styles.countrySelectStyle}>
                <option value="Select">Select</option>
                <option value="Dhaka">Dhaka</option>
                <option value="London">London</option>
                <option value="Dubai">Dubai</option>
                <option value="Alaska">Alaska</option>
                <option value="Canada">Canada</option>
              </select>
            </SimplifiedDiv>
            <SimplifiedDiv style={{ display: display, flexDirection: "column", marginLeft: marginLeft }}>
              <Text style={styles.text}>Zip Code :</Text>
              <input style={{ ...styles.countrySelectStyle, background: "white", border: `1px solid ${colors.lightGray}` }}></input>
            </SimplifiedDiv>
          </SimplifiedDiv>
          <button style={{ ...styles.button, marginTop: "0px" }}>Get Quotes</button>
          <span><button style={{ ...styles.button, marginLeft: "20px", marginTop: "0px" }}>Continue</button></span>
        </SimplifiedDiv>
        <SimplifiedDiv style={styles.secondContainer}>
          <ul style={styles.ul}>
            <li style={styles.li}>Sub container <span style={styles.liSpan}>59$</span></li>
            <li style={styles.li}>Eco Tax <span style={styles.liSpan}>2$</span></li>
            <li style={styles.li}>Shipping Cost <span style={styles.liSpan}>Free</span></li>
            <li style={styles.li}>Total <span style={styles.liSpan}>61$</span></li>
            <button style={styles.button}>Update</button>
            <span><button style={{ ...styles.button, marginLeft: "20px" }}>Check Out</button></span>
          </ul>
        </SimplifiedDiv>
      </SimplifiedDiv>
    </>
  );
};

export default Information;