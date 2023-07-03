import React, { useContext } from 'react'
import { colors, fontSize, fontWeight } from '../../util/theme'
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import { CartContext } from '../../context/CartContext';
import { getScreenWidth } from '../../util/helpers';





const CartPage = () => {
  const screenWidth = getScreenWidth();
  const isMobile = screenWidth === "SM";

  const desktopStyles = {
    div: {
      width: "100%",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "40px 0px",
    },
    tableContainer: {
      width: "80%",
      overflowX: "auto",
      margin: "20px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      color: colors.accentColor,
      tableLayout: "fixed",
    },
    th: {
      backgroundColor: colors.accentColor,
      color: colors.white,
      padding: "12px 20px",
      textAlign: "center",
    },
    td: {
      padding: "12px 20px",
      borderBottom: `1px solid ${colors.black}`,
      fontSize: fontSize.normal,
      verticalAlign: "middle",
      textAlign: "center",
    },
    img: {
      width: "80px",
      display: "block",
      margin: "auto",
    },
    totalRow: {
      fontWeight: "bold",
    },
    buttonStyle: {
      backgroundColor: colors.accentColor,
      border: 0,
      padding: "8px 12px",
      color: colors.white,
      fontWeight: fontWeight.boldPlus,
      cursor: "pointer",
    },
    inputStyle: {
      width: "25px",
      padding: "5px",
    },
    removeButton: {
      backgroundColor: colors.accentColor,
      border: 0,
      padding: "8px 12px",
      color: colors.white,
      fontWeight: fontWeight.boldPlus,
      cursor: "pointer",
    },
  };

  const mobileStyles = {
    container: {
      padding: "0 5%",
      margin : '20px 0px'
    },
    item: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "20px",
      border: "1px solid #ccc",
      padding: "10px",
      borderRadius: "5px",
      color : colors.accentColor
    },
    img: {
      width: "80px",
      display: "block",
      margin: "auto",
    },
    price: {
      textAlign: "center",
      marginTop: "10px",
      color : colors.accentColor,
    },
    quantity: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10px",
      textAlign : 'center',
    },
    buttonContainer: {
      display: "flex",
      justifyContent: "center",
      marginBottom: "20px",
    },
    buttonStyle: {
      backgroundColor: colors.accentColor,
      border: 0,
      padding: "3px 12px",
      color: "#fff",
      fontWeight: "bold",
      cursor: "pointer",
      margin: "0px 10px",
    },
    removeButton: {
      backgroundColor: colors.accentColor,
      marginTop: '5px'
    },
    totalRow: {
      fontWeight: "bold",
      marginTop: "20px",
      textAlign: "center",
      color : colors.accentColor,
    },
    inputStyle: {
      width: "45px",
      padding: "5px",
      textAlign : 'center'
    },
  };

  const styles = isMobile ? mobileStyles : desktopStyles;

  const { items, setItems } = useContext(CartContext);

  const handleIncrement = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const handleRemove = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  return (
    <SimplifiedDiv style={styles.div}>
      {isMobile ? (
        <SimplifiedDiv style={styles.container}>
          {items?.map((item) => (
            <SimplifiedDiv key={item.id} style={styles.item}>
              <img src={item.image} alt={item.name} style={styles.img} />
              <SimplifiedDiv>{item.id}</SimplifiedDiv>
              <SimplifiedDiv style={styles.price}>{item.price + "$"}</SimplifiedDiv>
              <SimplifiedDiv style={styles.quantity}>
                <button
                  style={styles.buttonStyle}
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.qty}
                  style={styles.inputStyle}
                  onChange={() => {}}
                />
                <button
                  style={styles.buttonStyle}
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
              </SimplifiedDiv>
              <button
                style={{ ...styles.buttonStyle, ...styles.removeButton }}
                onClick={() => handleRemove(item.id)}
              >
                Remove
              </button>
            </SimplifiedDiv>
          ))}
          <SimplifiedDiv style={styles.totalRow}>
            Total:{" "}
            {items?.reduce((total, item) => total + item.price * item.qty, 0).toFixed(2) + "$"}
          </SimplifiedDiv>
        </SimplifiedDiv>
      ) : (
        <SimplifiedDiv style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Item</th>
                <th style={styles.th}>Price</th>
                <th style={styles.th}>Quantity</th>
                <th style={styles.th}>Total</th>
                <th style={styles.th}>Action</th>
              </tr>
            </thead>
            <tbody>
              {items?.map((item) => (
                <tr key={item.id}>
                  <td style={styles.td}>
                    <img src={item.image} alt={item.name} style={styles.img} />
                    <div>{item.id}</div>
                  </td>
                  <td style={styles.td}>{item.price + "$"}</td>
                  <td style={styles.td}>
                    <button
                      style={styles.buttonStyle}
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.qty}
                      style={styles.inputStyle}
                      onChange={() => {}}
                    />
                    <button
                      style={styles.buttonStyle}
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button>
                  </td>
                  <td style={styles.td}>
                    {(item.price * item.qty).toFixed(2) + "$"}
                  </td>
                  <td style={styles.td}>
                    <button
                      style={styles.removeButton}
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr style={styles.totalRow}>
                <td colSpan="4" style={styles.td}>
                  Total
                </td>
                <td style={styles.td}>
                  {items?.reduce(
                    (total, item) => total + item.price * item.qty,
                    0
                  ).toFixed(2) + "$"}
                </td>
              </tr>
            </tfoot>
          </table>
        </SimplifiedDiv>
      )}
    </SimplifiedDiv>
  );
};

export default CartPage;