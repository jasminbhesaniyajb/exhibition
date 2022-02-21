import { AppBar, Box, Typography, Toolbar, Grid } from "@mui/material";
import type { InferGetServerSidePropsType, NextPage } from "next";
import { useEffect, useState } from "react";
import APICall from "../../utils/ApiCall";
import EndPoints from "../../utils/Endpoint";
import { Color } from "../../utils/Color";
import moment from "moment";
import Image from "next/image";

const Exhibition = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [exhibitionData, setExhibitionData] = useState<any | null>();
  const [loading, setLoading] = useState<Boolean>(false);

  //life Cycle method
  useEffect(() => {
    if (data) setExhibitionData(data);
  }, [data]);

  //function

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: Color.grey, mb: 2 }}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            color="inherit"
            component="div"
            sx={{ fontSize: 35, color: Color.white }}
          >
            Exhibition!
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{ marginLeft: 10, display: "flex" }}>
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          sx={{ fontSize: 30, color: Color.black }}
        >
          {exhibitionData?.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ display: "flex", alignItems: "center", ml: 3 }}
        >
          {moment(exhibitionData?.aic_start_at).format("DD.MM.YYYY") +
            " - " +
            moment(exhibitionData?.aic_end_at).format("DD.MM.YYYY")}
        </Typography>
      </div>

      <div style={{ marginLeft: 10, display: "-webkit-box" }}>
        <Image
          src={
            exhibitionData?.image_url ??
            "https://static.vecteezy.com/packs/media/components/global/search-explore-nav/img/vectors/term-bg-1-666de2d941529c25aa511dc18d727160.jpg"
          }
          alt="Landscape picture"
          width={300}
          height={300}
        />
        <Typography
          variant="h6"
          color="inherit"
          component="h6"
          sx={{ fontSize: 16, color: Color.black, width: 1000, ml: 4 }}
        >
          {exhibitionData?.description}
        </Typography>
      </div>
    </Box>
  );
};

export default Exhibition;

export async function getServerSideProps(context: any) {
  try {
    const response = await APICall(
      "get",
      EndPoints.exhibition + `/${context.query.id}`
    );
    if (response.status === 200 && response.data) {
      let data = response.data.data;
      return { props: { data } };
    }
  } catch(error) {
    console.log("error", error);
  }
}
