import React from "react";
import { Avatar, Box, Column, Icon, Link, Text } from "gestalt";

const ProfilePost = () => {
  return (
    <Column span={2}>
      <div>
        <div className="postImage brdrRadius15 mb-3">
          <img
            className="img-fluid mx250 w-100 objCover brdrRadius15"
            alt="James Jones"
            src="https://i.ibb.co/2Fc00R3/james.jpg"
          />
        </div>
        <Box display="flex" alignItems="center">
          <Avatar
            name="James Jones"
            src="https://i.ibb.co/2Fc00R3/james.jpg"
            size="sm"
          />
          <Text align="left" weight="bold">
            <Link href="https://pinterest.com">
              <Box paddingX={2}>James Jones</Box>
            </Link>
          </Text>
        </Box>
        <Box alignItems="center" display="flex" marginTop={2}>
          <Box marginEnd={1} padding={1}>
            <Icon
              icon="story-pin"
              size={12}
              accessibilityLabel="Pin"
              color="gray"
            />
          </Box>
          <Text align="center" size="sm" color="gray">
            Category
          </Text>
        </Box>

        {/* <Button
          accessibilityLabel="Follow James Jones"
          color="red"
          text="Follow"
        /> */}
      </div>
    </Column>
  );
};

export default ProfilePost;
