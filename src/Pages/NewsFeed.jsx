import { Box, Heading } from "gestalt";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPosts } from "../actions/postAction";
import Page from "../Components/Page";
import ProfilePost from "../Components/ProfilePost";

const NewsFeed = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllPosts())
  },[])

  
  return (
    <Page title="News Feed" id="NeewFeed">
      <Box id="Posts" padding={6} marginTop={4}>
        {/* <Heading size="md">
          <strong>Post Feeds</strong>
        </Heading> */}
        <div id="ProfilePosts" className="mt-4">
          <Box display="flex" direction="row">
            <ProfilePost />
          </Box>
        </div>
      </Box>
    </Page>
  );
};

export default NewsFeed;
