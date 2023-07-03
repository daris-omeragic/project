import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors, fontFamily, fontSize } from "../../util/theme";
import { getScreenWidth } from "../../util/helpers.js";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";






const LinkBar = () => {
  const screenWidth = getScreenWidth();
  const padding = screenWidth === "SM" ? "4px 41px" : "0px 10px";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedPage, setSelectedPage] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleBlogClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMenuToggle = () => {
    console.log('Menu toggled');
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    console.log('Menu closed');
    setIsOpen(false);
  };

  const mobileStyles = {
    navBar: {
      display: "flex",
      padding: padding,
      width: "100%",
      borderRadius: "0px",
    },
    hamburgerButton: {
      display: "grid",
      border: "1px solid",
      borderColor: colors.accentColor,
      borderRadius: "5px",
      width: "38px",
      height: "38px",
      alignContent: "center",
      placeContent: "center",
      backgroundColor: "white",
    },
    linkMenu: {
      backgroundColor: colors.gray,
      textAlign: "left",
      padding: "10px 20px",
      margin: "15px 0px",
      display: 'flex',
      flexDirection: 'column',
      borderRadius: "10px",
    },
    links: {
      padding: "10px 0px",
      fontSize: fontSize.normal,
      color: colors.white,
      fontFamily: fontFamily.LatoItalic,
    },
    linksLG: {
      fontFamily: fontFamily.LatoRegular,
      fontSize: fontSize.normal,
      color: colors.gray,
    },
  };

  const desktopStyles = {
    navBar: {
      display: "flex",
      gap: "30px",
      height: "40px",
      alignItems: "center",
    },
    linkMenu: {
      backgroundColor: colors.gray,
      textAlign: "left",
      padding: "10px 20px",
      margin: "15px 0px",
      position: "absolute",
      top: "100%",
      left: 0,
      zIndex: 1,
      opacity: '0.7',
      width: '180px'
    },
    links: {
      padding: "10px 0px",
      fontSize: fontSize.smallPlus,
      color: colors.white,
      fontFamily: 'sans-serif',
      display: 'flex',
      flexDirection: 'column'
    },
    linksLG: {
      fontFamily: fontFamily.LatoRegular,
      fontSize: fontSize.normal,
      color: colors.gray,
      position: "relative",
      zIndex: 1,
    },
  };

  const LinkBarLG = () => (
    // Desktop stilovi
    <CustomDiv display="flex" padding="0px 10%" width="100%">
      <Grid container direction="row">
        <Grid item sm={6} md={6} lg={6}>
          <SimplifiedDiv style={desktopStyles.navBar}>
            <Link
              to="/"
              style={selectedPage === "Home" ? { ...desktopStyles.linksLG, fontWeight: 'bold' } : desktopStyles.linksLG}
              onClick={() => setSelectedPage("Home")}
            >
              Home
            </Link>
            <Link
              to="/shop"
              style={selectedPage === "Shop" ? { ...desktopStyles.linksLG, fontWeight: 'bold' } : desktopStyles.linksLG}
              onClick={() => setSelectedPage("Shop")}
            >
              Shop
            </Link>
            <Link
              to="/about"
              style={selectedPage === "404" ? { ...desktopStyles.linksLG, fontWeight: 'bold' } : desktopStyles.linksLG}
              onClick={() => setSelectedPage("About")}
            >
              404
            </Link>
            <Link to='/blog' style={desktopStyles.linksLG} onClick={handleBlogClick}>
              Blog
            </Link>
            <Link
              to="/contact"
              style={selectedPage === "Contact" ? { ...desktopStyles.linksLG, fontWeight: 'bold' } : desktopStyles.linksLG}
              onClick={() => setSelectedPage("Contact")}
            >
              Contact
            </Link>
          </SimplifiedDiv>
        </Grid>
        <Grid item sm={6} md={6} lg={6}>
          <CustomDiv display="flex" alignItems="center" justifyContent="flex-end">
            <TextField
              size="small"
              label="Search"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </CustomDiv>
        </Grid>
      </Grid>
    </CustomDiv>
  );

  const LinkBarSM = () => (
    // Mobilni stilovi
    <SimplifiedDiv
      style={{
        display: "block",
        padding: padding,
        width: "100%",
      }}
    >
      <SimplifiedDiv
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid item xs={6} sm={6} md={6}>
          <TextField
            size="small"
            label="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <SimplifiedDiv
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <button
              style={mobileStyles.hamburgerButton}
              onClick={handleMenuToggle}

            >
              <MenuIcon
                style={{
                  color: colors.accentColor,
                }}
              />
            </button>
          </SimplifiedDiv>
        </Grid>
      </SimplifiedDiv>
      {isOpen && (
        <SimplifiedDiv style={mobileStyles.linkMenu}>
          <Link
            to="/"
            style={selectedPage === "Home" ? { ...mobileStyles.links, fontWeight: 'bold' } : mobileStyles.links}
            onClick={() => {
              setSelectedPage("Home");
              closeMenu();
            }}
          >
            Home
          </Link>
          <Link
            to="/shop"
            style={selectedPage === "Shop" ? { ...mobileStyles.links, fontWeight: 'bold' } : mobileStyles.links}
            onClick={() => {
              setSelectedPage("Shop");
              closeMenu();
            }}
          >Shop
          </Link>
          <Link
            to="/about"
            style={selectedPage === "404" ? { ...mobileStyles.links, fontWeight: 'bold' } : mobileStyles.links}
            onClick={() => {
              setSelectedPage("404");
              closeMenu();
            }}
          >
            404
          </Link>
          <SimplifiedDiv style={mobileStyles.links}>
            <Link
              to="/Blog"
              style={selectedPage === "Blog" ? { ...mobileStyles.links, fontWeight: 'bold' } : mobileStyles.links}
              onClick={() => setSelectedPage("Blog")}
            >
              Blog
            </Link>
          </SimplifiedDiv>
          <Link
            to="/contact"
            style={selectedPage === "Contact" ? { ...mobileStyles.links, fontWeight: 'bold' } : mobileStyles.links}
            onClick={() => {
              setSelectedPage("Contact");
              closeMenu();
            }}
          >
            Contact
          </Link>
        </SimplifiedDiv>
      )}
    </SimplifiedDiv>
  );

  return screenWidth === "SM" ? <LinkBarSM /> : <LinkBarLG />;
};

export default LinkBar;