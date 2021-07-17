import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems:'center',
        justifyContent: 'center',
      },
  
      main: {
        top:-80,
         textAlign:"center",
       },
      card:{
        width:"100%",
        height:"100%",
        alignItems:"center",
        backgroundColor:"#fff",
        overflow:"hidden",
        padding:"25px",
         height:"100%"
      },
  
      heading:{
         fontSize:"15px",
        flexDirection:"row"
  
      },
      headimg:{
        alignItems:"center",
        width: 30,
        height: 22,
        marginTop:"5px",
      
      },
      headh3:{
        fontWeight:"600",
        fontSize:"22px",
        lineHeight:"30px",
        marginLeft:"7px"
      },
        
    mainbuttonMobile:{
        marginTop:"40px",
        marginLeft:"20px",
         alignItems:"center"
       },
     
      touchButtonMobile:{
        borderRadius:"10px",
         marginLeft:"-40px",
         backgroundColor:"#fff",
        padding:"10px",
        alignItems:"center",
        border:"none",
        paddingBottom:3,
        paddingTop:3,
        paddingRight:10,
        paddingLeft:10,
        elevation:100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
      },
      touchButtonMail:{
        borderRadius:"10px",
        marginLeft:"10px",
        backgroundColor:"#fff",
        padding:"10px",
        alignItems:"center",
        paddingBottom:7,
        paddingTop:7,
        paddingRight:3,
        paddingLeft:3,
        elevation:100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
      },
      mobileactive:{
        borderRadius:"10px",
        marginLeft:"-40px",
        backgroundColor:"#DC143C",
       padding:"10px",
       alignItems:"center",
       border:"none",
       paddingBottom:3,
       paddingTop:3,
       paddingRight:10,
       paddingLeft:10,
       elevation:100,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 1 },
       shadowOpacity: 0.5,
       shadowRadius: 5,        
       },
     mailactive:{
       
      borderRadius:"10px",
      marginLeft:"10px",
      backgroundColor:"#DC143C",
      padding:"10px",
      alignItems:"center",
      paddingBottom:7,
      paddingTop:7,
      paddingRight:3,
      paddingLeft:3,
      elevation:100,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.5,
      shadowRadius: 5, 
     },
       inputIcon:{
        width:"100%",
        marginBottom:"35px",
        marginTop:"10px",
        textAlign:"center"
      },
      inputField:{
         width:"300px",
         marginTop:"20px",
 
         padding:"10px",
        paddingLeft:"30px",
        fontSize:"16px",
        borderWidth:"0px",
        outlineWidth: 0,
        borderColor:"#cccccc",
        backgroundColor:"#ffffff",
        color:"#000000",
        borderStyle:"solid",
        borderRadius:"23px",
        elevation:100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
  
      },
       
      inputIconOtp:{
        width:"100%",
        marginBottom:"50px",
        marginTop:"40px",
        marginLeft:"50px",
        textAlign:"center",
        flexDirection:"row"
      },
      inputOtp:{
          width:50,
          height:50,
          marginLeft:20,
          fontSize:30,
          textAlign:'center',
          outlineWidth: 0,
          borderColor:"#cccccc",
          backgroundColor:"#ffffff",
          color:"#000000",
            borderStyle:"solid",
          borderRadius:"10px",
          elevation:100,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.5,
          shadowRadius: 5, 
      

      },
      inputFieldMobile:{
        width:"300px",
        padding:"10px",
        paddingLeft:"50px",
        fontSize:"16px",
        borderWidth:"0px",
        outlineWidth: 0,
        borderColor:"#cccccc",
        backgroundColor:"#ffffff",
        color:"#000000",
        borderStyle:"solid",
        borderRadius:"23px",
        elevation:100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 5, 
    
      },
       
      mainButton:{
      width:"300px",
      color:"#ffffff",
      textAlign:"center",
      fontSize:"18px",
      borderRadius:50,
      backgroundColor:"#DC143C",
      paddingTop:"7px",
      paddingBottom:"7px",
      paddingLeft:"20px",
      paddingRight:"20px",
      border:"none",
    }
     
  });
