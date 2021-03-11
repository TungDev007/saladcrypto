import React from "react";
import {
  Box,
  Chip,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import headerImage from "../images/salad_crypto.png";
import placeholderImage from "../images/placeholder.png";

const useStyles = makeStyles(() => {
  return {
    headerImage: {
      margin: 0,
      padding: 0,

      "& img": {
        width: "100%",
      },

      "& figcaption": {
        textAlign: "right",
        fontFamily: ["Montserrat", "sans-serif"],
        fontSize: 12,
      },
    },
    chipCustom: {
      borderColor: "#0A2133",
      color: "#0A2133",
    },
  };
});

const BlogTitle = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={9} md={6}>
        <Typography variant="h1">
          <Box fontWeight={600}>How Does Mining With Salad Affect Your PC?</Box>
        </Typography>
      </Grid>
    </Grid>
  );
};

const BlogImage = () => {
  const classes = useStyles();
  return (
    <Box mt={3} mb={2}>
      <figure className={classes.headerImage}>
        <img src={headerImage} alt="Salad crypto" />
        <figcaption>Caption text here</figcaption>
      </figure>
    </Box>
  );
};

const BlogContent = () => {
  const classes = useStyles();
  return (
    <Box mt={3}>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Grid container>
            <Grid item xs={6} sm={12}>
              <Typography variant="h1">
                <Box fontSize={12} fontWeight={700} pb={{ xs: 3, sm: 1 }}>
                  JARED
                </Box>
              </Typography>
              <Typography variant="h1">
                <Box fontSize={12} fontWeight={700}>
                  10 DECEMBER 2019
                </Box>
              </Typography>
            </Grid>
            <Grid item xs={6} sm={12}>
              <Box mt={{ xs: 0, sm: 3 }} mb={1}>
                <Chip
                  classes={{ root: classes.chipCustom }}
                  variant="outlined"
                  size="small"
                  label="Category 1"
                />
              </Box>
              <Box>
                <Chip
                  classes={{ root: classes.chipCustom }}
                  variant="outlined"
                  size="small"
                  label="Keyword 2"
                />
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={8}>
          <Box mt={{ xs: 3, sm: 0 }}>
            <Typography>
              <Box>
                The world of cryptomining can daunt newcomers, after all — those
                of us with hardware capable of mining have invested a lot of
                time, money, and love into our rigs, and wouldn’t dare risk our
                PC’s health for anything, even extra income.{" "}
                <span style={{ textDecoration: "underline" }}>
                  Our mission at Salad
                </span>{" "}
                is to demystify and simplify mining for would-be adopters. We
                see crypto as critical to web 3.0, and we think we can help jump
                start the generation of users who make a decentralized internet
                possible.
              </Box>
            </Typography>
          </Box>
          <Box mt={3}>
            <Typography>
              <Box>
                With all the <em>rumors swirling about scams</em>, hardware
                degradation, and profitability (or the lack thereof), we wanted
                to clear the waters and make a definitive guide to the impact
                mining has on your PC, from electricity costs to wear and tear.
                That way on-the-fence miners can make an informed decision about
                whether to jump in the blockchain headfirst or stick to the
                sidelines.
              </Box>
            </Typography>
          </Box>
          <Box mt={3}>
            <Typography variant="h2">
              <Box>Will Mining Damage, Degrade, Or Otherwise Harm My PC?</Box>
            </Typography>
          </Box>
          <Box mt={3}>
            <Typography>
              <Box>
                This is where most potential adopters get stuck. A lot of ink
                has been spilled on the subject, and misunderstandings abound.
                Luckily,{" "}
                <strong>
                  there’s <em>tons</em> of great resources
                </strong>{" "}
                from level-headed figures in the tech space, plus this
                handy-dandy article I wrote a couple of months ago.
              </Box>
            </Typography>
          </Box>
          <Box mt={4}>
            <img style={{ width: "100%" }} src={placeholderImage} />
          </Box>
          <Box mt={2}>
            <Typography variant="body2">
              <Box>
                We promise, mining (shouldn’t) set your computer on fire, Matt
                Mets achieved this in photoshop.
              </Box>
            </Typography>
          </Box>
          <Box mt={4}>
            <ul style={{ margin: 0, paddingLeft: 16 }}>
              <li>
                <Typography variant="body1">Bullet Point #1</Typography>
              </li>
              <li>
                <Typography variant="body1">Bullet Point #2</Typography>
              </li>
              <li>
                <Typography variant="body1">Bullet Point #3</Typography>
              </li>
            </ul>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export const Blog = () => {
  return (
    <Container>
      <BlogTitle />
      <BlogImage />
      <BlogContent />
    </Container>
  );
};
