import { Avatar, Box, Heading, Text } from "gestalt";
import { useSelector } from "react-redux";
import Page from "../Components/Page";
import ProfilePost from "../Components/ProfilePost";

const Profile = () => {
  const login = useSelector((state) => state.login);
  const { loginLoading, err, loggedIn, loginDetails } = login;
  
  return (
    <Page title="Profile" id="WPC_Profile">
      <Box display="flex" direction="row" justifyContent="center">
      <center>
        <Box justifyContent="center">
          
            <Avatar
              name="James Jones"
              src="https://i.ibb.co/2Fc00R3/james.jpg"
              size="xl"
            />
          
          <Heading size="lg" align="center">
            <strong>{loggedIn && loginDetails.name}</strong>
          </Heading>
          <Text align="center">@zainrafay12</Text>
          {/* <Text align="center">0 Followers . 0 Following</Text> */}
        </Box>
        </center>
      </Box>
      <Box id="Posts" padding={6} marginTop={4}>
        <Heading size="md">
          <strong>Post Feeds</strong>
        </Heading>
        <div id="ProfilePosts" className="mt-4">
          <Box display="flex" direction="row">
            <ProfilePost />
          </Box>
        </div>
      </Box>
    </Page>
  );
};

export default Profile;
