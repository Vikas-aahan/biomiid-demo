import { Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import Style from "../../Css/home.module.css";
import rightImg from "../../Images/verify.png";
import en from "../../lang/en";
import rf from "../../lang/rf";

export default function About() {
  const [lang, setLang] = React.useState("");
  
  React.useEffect(()=>{
   const lan = localStorage.getItem("language");
   setLang(lan);

  },[])
  return (
    <div className={Style.solution_outer_div} id="about">
      <Typography className={Style.solution_heading_dif}>
      {lang === "en"?en.section9_title:rf.section9_title}</Typography>
      <br />
      <br />
      <br />

      <Typography
        sx={{
          textAlign: "start",
          marginTop: "12px",
          fontSize: "20px",
          lineHeight: "24px",
        }}
      >
         {lang === "en"?en.section9_content1:rf.section9_content1}
      
      </Typography>
      <Typography
        sx={{
          textAlign: "start",
          marginTop: "20px",
          fontSize: "20px",
          lineHeight: "24px",
        }}
      >
         {lang === "en"?en.section9_content2:rf.section9_content2}
      
      </Typography>
      <Typography
        sx={{
          textAlign: "start",
          marginTop: "20px",
          fontSize: "20px",
          lineHeight: "24px",
        }}
      >
         {lang === "en"?en.section9_content23:rf.section9_content23}
        
      </Typography>
      <br />
      <br />
      <br />
      <br />
      <Typography className={Style.solution_heading_dif_head}>
      {lang === "en"?en.section9_subtitle1:rf.section9_subtitle1}
       
      </Typography>
      <br />
      <br />
      <Grid container className={Style.Individual_card_grid_outer}>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.about_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section9_effortless_label:rf.section9_effortless_label}
             
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            >
              {lang === "en"?en.section9_seffortless_content:rf.section9_seffortless_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.about_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section9_protection_label:rf.section9_protection_label}
              
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            >
              {lang === "en"?en.section9_protection_content:rf.section9_protection_content}
             
            </Typography>
          </Card>
        </Grid>
        <Grid lg={4} md={6} xs={12} className={Style.Individual_card_grid}>
          <Card variant="outlined" className={Style.about_card}>
            <img style={{ width: "35%" }} src={rightImg} />
            <Typography className={Style.Industries_card_head}>
            {lang === "en"?en.section9_everyone_label:rf.section9_everyone_label}
             
            </Typography>
            <Typography
              sx={{ textAlign: "start", marginTop: "12px", fontSize: "20px" }}
            >
               {lang === "en"?en.section9_everyone_content:rf.section9_everyone_content}
            
            </Typography>
          </Card>
        </Grid>
      </Grid>

      <Typography
        sx={{
          textAlign: "start",
          marginTop: "",
          fontSize: "20px",
          lineHeight: "21px",
        }}
      >
         {lang === "en"?en.section9_content24:rf.section9_content24}
       
      </Typography>
      <Typography
        sx={{
          textAlign: "start",
          marginTop: "20px",
          fontSize: "18px",
          lineHeight: "21px",
        }}
      >
          {lang === "en"?en.section9_content3:rf.section9_content3}
       
      </Typography>
      <br />
      <br />
      <Typography className={Style.solution_heading_dif_head}>
      {lang === "en"?en.section9_subtitle2:rf.section9_subtitle2}
      
      </Typography>
      <Typography
        sx={{
          textAlign: "start",
          marginTop: "28px",
          fontSize: "20px",
          lineHeight: "26px",
          marginBottom: "5rem",
        }}
      >
         {lang === "en"?en.section9_content4:rf.section9_content4}
       
      </Typography>
      <Button variant="contained" size="large" className={Style.About_button}>
      {lang === "en"?en.section9_careers_button_text:rf.section9_careers_button_text}
       
      </Button>
      <br />
      <br />
    </div>
  );
}
