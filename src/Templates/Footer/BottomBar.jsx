import React from 'react'
import SimplifiedDiv from '../../components/SimplifiedDiv/SimplifiedDiv';
import { colors} from '../../util/theme';
import Text from '../../components/Text/Text';
import { getScreenWidth } from '../../util/helpers';

export const BottomBar = () => {
    const screenWidth = getScreenWidth();
  const padding = screenWidth === "SM" ? "0px 10px" : "10px 160px";
  const paragraphSize = screenWidth === "SM" ? '10px' : "12px" 
    const styles = {
        mainDiv: {
            backgroundColor: colors.lightGray,
            height: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            padding: padding,
            alignItems: 'center',
        },
        innerText: {
            color: colors.white,
            fontSize : paragraphSize,
        }
    }
    return (
        <SimplifiedDiv style={styles.mainDiv}>
            <Text style={styles.innerText}>Copyright 2023 CENATR NIT. All rights reserved</Text>
            <Text style={styles.innerText}>Made by NIT EKIPA</Text>
        </SimplifiedDiv>
    )
}


export default BottomBar;