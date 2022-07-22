import {
  Avatar,
  Box,
  Button,
  Column,
  Flex,
  Heading,
  Text,
  TextArea,
  TextField,
} from "gestalt";
import { useEffect, useState } from "react";
import Page from "../Components/Page";

const Settings = ({ match, location }) => {
  const [firstName, setFirstName] = useState(
    localStorage.profileFields
      ? JSON.parse(localStorage.getItem("profileFields")).firstName
      : ""
  );
  const [lastName, setLastName] = useState(
    localStorage.profileFields
      ? JSON.parse(localStorage.getItem("profileFields")).lastName
      : ""
  );
  const [userName, setUserName] = useState(
    localStorage.profileFields
      ? JSON.parse(localStorage.getItem("profileFields")).userName
      : ""
  );
  const [profileDescr, setProfileDescr] = useState(
    localStorage.profileFields
      ? JSON.parse(localStorage.getItem("profileFields")).profileDescr
      : ""
  );
  const [usrLocation, setUsrLocation] = useState(
    localStorage.profileFields
      ? JSON.parse(localStorage.getItem("profileFields")).usrLocation
      : ""
  );
  const [fileValue, setFileValue] = useState('')
  const [isDisabled, setIsDisabled] = useState(true)
  const [primaryColor, setPrimaryColor] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault();
    const profileFields = {
      firstName,
      lastName,
      userName,
      profileDescr,
      usrLocation,
    };
    localStorage.setItem("profileFields", JSON.stringify(profileFields));
  };
  const resetForm = ({ event }) => {
    event.preventDefault();
    setFirstName(JSON.parse(localStorage.getItem("profileFields")).firstName);
    setLastName(JSON.parse(localStorage.getItem("profileFields")).lastName);
    setUserName(JSON.parse(localStorage.getItem("profileFields")).userName);
    setProfileDescr(JSON.parse(localStorage.getItem("profileFields")).profileDescr);
    setUsrLocation(JSON.parse(localStorage.getItem("profileFields")).usrLocation);
  };
  const fileUpload = () => {
    const fileInput = document.getElementById('changeImage')
    fileInput.click()
  }
  const compareObj = (obj1, obj2) => {
    // Checking If All Properties in Obj 1 is Equal to All Properties in Obj 2
    for(let i in obj1){
      if(obj1[i] !== obj2[i]){
        return false
      }
    }
    return true
  }
  const checkObjVal = (obj) =>{
    if(obj.firstName !== ''|| obj.lastName !== '' || obj.usrLocation !== '' || obj.userName !== '' || obj.profileDescr !== '' ){
      return false
    }
    return true
  }
  useEffect(()=>{
    var r = document.querySelector(':root');
    var rs = getComputedStyle(r)
    setPrimaryColor(rs.getPropertyValue('--primary'))
  },[])
  // @Running on any form state change 
  useEffect(()=>{
    // @Setting All States into one object
    const profileFields = {
      firstName,
      lastName,
      userName,
      profileDescr,
      usrLocation,
    };
    
    
    // @IF LocalStorage Has ProfileFields Object Then Object Will Return
    const localStorageProfileFields = localStorage.profileFields && JSON.parse(localStorage.getItem("profileFields"))
    if(localStorageProfileFields){
      // Setting Disabled Depending on @CheckingObj() function Value
      setIsDisabled(compareObj(profileFields, localStorageProfileFields))
    } else {
      // console.log(profileFields)
      setIsDisabled(checkObjVal(profileFields))
    } 
  },[firstName, lastName, usrLocation, profileDescr, userName])
  
  return (
    <Page title="Settings" id="Settings">
      <Box padding={3} marginTop={6}>
        <Box display="flex" direction="row">
          {/* <Column span="3">
                        <SettingsSidebar />
                    </Column> */}
          <form onSubmit={handleSubmit}>
            <Column span={12}>
              <Box>
                <Heading size="md">
                  <strong>Edit Profile</strong>
                </Heading>
                <Text>
                  People visiting your profile will see the following info
                </Text>
              </Box>
              <Box marginTop={4}>
                <Text size="sm">Photo</Text>
                <Box display="flex" direction="row" alignItems="center">
                  <Avatar
                    size="lg"
                    name={firstName ? firstName : "Profile Image"}
                    alt="Profile Image"
                    src={fileValue && ''}
                  />
                  <Box paddingX={4}>
                    <Button text="Change" onClick={fileUpload} size="md" inline />
                    <input type="file" value={fileValue} id='changeImage' onChange={(e) => setFileValue(e.target.value)} />
                  </Box>
                </Box>
              </Box>
              {/* Fields */}
              <div className="editProfile">
                <Flex wrap>
                  <Box column={6} paddingX={1} marginTop={3}>
                    <TextField
                      id="firstName"
                      onChange={({ value }) => setFirstName(value)}
                      placeholder="First name"
                      label="First name"
                      size="md"
                      value={firstName}
                      type="text"
                    />
                  </Box>
                  <Box column={6} paddingX={1} marginTop={3}>
                    <TextField
                      id="lastName"
                      onChange={({ value }) => setLastName(value)}
                      placeholder="Last name"
                      label="Last name"
                      size="md"
                      value={lastName}
                      type="text"
                    />
                  </Box>
                  <Box column={12} paddingX={1} marginTop={3}>
                    <TextField
                      id="userName"
                      onChange={({ value }) => setUserName(value)}
                      placeholder="User name"
                      label="User name"
                      size="md"
                      value={userName}
                      type="text"
                    />
                  </Box>
                  <Box column={12} paddingX={1} marginTop={3}>
                    <TextArea
                      id="ProfileDescription"
                      onChange={({ value }) => setProfileDescr(value)}
                      placeholder="Write a little about yourself here"
                      label="About your profile"
                      size="md"
                      value={profileDescr}
                      type="text"
                    />
                  </Box>
                  <Box column={12} paddingX={1} marginTop={3}>
                    <TextField
                      id="userLocation"
                      onChange={({ value }) => setUsrLocation(value)}
                      placeholder="Ex. San Fransisco, CA"
                      label="Location"
                      size="md"
                      value={usrLocation}
                      type="text"
                    />
                  </Box>
                </Flex>
              </div>
              {/* Fields */}
            </Column>
            <div className="fixed-bottom w-100 formSave">
              <Box
                display="flex"
                direction="row"
                paddingY={4}
                wrap
                justifyContent="center"
                alignItems="center"
              >
                <Box paddingX={2}>
                <Button text="Reset" disabled={isDisabled} onClick={resetForm} inline size="lg" />

                </Box>
                <Box paddingX={2}>
                  <Button text="Save" color={'blue'} disabled={isDisabled} type="submit" inline size="lg" />
                </Box>
              </Box>
            </div>
          </form>
        </Box>
      </Box>
    </Page>
  );
};

export default Settings;
