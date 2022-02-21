import { AppBar, Box, Typography, Toolbar, Grid } from "@mui/material";
import type { InferGetServerSidePropsType, NextPage } from "next";
import { ReactNode, useCallback, useEffect, useRef, useState } from "react";
import APICall from "../../utils/ApiCall";
import EndPoints from "../../utils/Endpoint";
import { Color } from "../../utils/Color";
import ExhibitionCard from "../../components/Card";
import { useRouter } from "next/router";

const Exhibition = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const observer = useRef<any | null>();
  const router = useRouter();
  //state
  const [loading, setLoading] = useState<boolean>(false);
  const [exhibitionData, setExhibitionData] = useState<any[]>([]);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);

  interface ExhibitionItem {
    // id: number;
  }

  interface ExhibitionItem extends Array<ExhibitionItem> {}

  //Api
  const getExhibition = useCallback(async () => {
    try {
      setLoading(true);
      await APICall("get", EndPoints.exhibition + `?page=${page}`).then(
        (response) => {
          if (response.status === 200 && response.data) {
            let data = response?.data?.data;
            if (hasMore) {
              setExhibitionData([...exhibitionData, ...data]);
              setHasMore(response.data.data.length > 0);
            }
          }
        }
      );
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  }, [page]);

  //life Cycle method
  useEffect(() => {
    if (data) setExhibitionData(data);
  }, [data]);

  useEffect(() => {
    if (hasMore) {
      getExhibition();
    }
  }, [page, hasMore]);

  //function
  const lastBookElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current?.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const onClickCard = (id: number) => {
    router.push(`exhibition/${id}`);
  };

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
      <Grid
        container
        spacing={3}
        sx={{ textAlign: "-webkit-center", height: "90%" }}
      >
        {exhibitionData?.map((item, index) => {
          if (exhibitionData?.length === index + 1) {
            return (
              <Grid
                ref={lastBookElementRef}
                item
                xs={3}
                key={index}
                onClick={() => onClickCard(item.id)}
              >
                <ExhibitionCard data={item} />
              </Grid>
            );
          } else {
            return (
              <Grid
                item
                xs={3}
                key={index}
                onClick={() => onClickCard(item.id)}
              >
                <ExhibitionCard data={item} />
              </Grid>
            );
          }
        })}
      </Grid>
      {!loading ? (
        <Typography
          variant="h6"
          color="inherit"
          component="div"
          textAlign={"center"}
          sx={{ fontSize: 20, color: Color.black, width: "100%", pb: 2 }}
        >
          Loading more exhibition...
        </Typography>
      ) : null}
    </Box>
  );
};

export default Exhibition;

export async function getServerSideProps() {
  try {
    const response = await APICall("get", EndPoints.exhibition + `?page=1`);
    if (response.status === 200 && response.data) {
      let data = response.data.data;
      return { props: { data } };
    }
  } catch(error) {
    console.log("error", error);    
  }
}
