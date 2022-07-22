import { useEffect, useRef, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Dropdown,
  Icon,
  IconButton,
  SearchField,
} from "gestalt";
import { Link } from "react-router-dom";
import { logout } from "../actions/UserAction";
import { useDispatch } from "react-redux";
const LoggedInNavbar = ({match, location}) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);
  //   const [selected, setSelected] = useState([]);
  const anchorRef = useRef(null);
  const [searchShow, setSearchShow] = useState(false)
  const showSearch = () =>{
    setSearchShow(!searchShow)
  }
  useEffect(()=>{
    if(searchShow){
      const searchField = document.querySelector('.responsiveSearchField input')
      searchField.focus()
    }
  },[searchShow])
  //   const handleSelect = ({ item }) => {
  //     if (selected.some((selectedItem) => selectedItem.value === item.value)) {
  //       setSelected((selected) =>
  //         selected.filter((selectedItem) => selectedItem.value != item.value)
  //       );
  //     } else {
  //       setSelected((selected) => [...selected, item]);
  //     }
  //   };

  return (
    <div id="WPC_Navbar">
      <Box
        color="white"
        rounding={2}
        padding={3}
        display="flex"
        alignItems="center"
      >
        <Box padding={3}>
          <Icon
            icon="pinterest"
            color="red"
            size={22}
            accessibilityLabel="Pinterest"
          />
        </Box>
        <div className="navbarLg">
          <Box paddingX={2}>
            <Button text="Home" href='/' color="transparent" role="link" size="lg" />
          </Box>
          <Box paddingX={2}>
            <Button text="Events" href='/events' color="transparent" role="link" size="lg" />
          </Box>
        </div>
        <div className="clNavbar">
          <Box paddingX={2}>
              <Button text="Home" href='/' color="transparent" role="link" size="lg" />
          </Box>
        </div>
        <div className="searchFieldButton">
          {!searchShow ? <Box>
          <IconButton
            accessibilityLabel="More Options"
            icon="search"
            onClick={showSearch}
          />
          </Box> : ''}
        </div>
        <div className="responsiveSearchField">
          {searchShow ? 
          <Box flex="grow" paddingX={2}>
              <SearchField
                accessibilityLabel="Demo Search Field"
                id="searchField"
                color="gray"
                autofocus
                onBlur={()=> setSearchShow(!searchShow)}
                onChange={({ value }) => setValue(value)}
                placeholder="Search and explore"
                value={value}
              />
            </Box> 
            : ''}
        </div>
        <div className="searchField">
          <Box paddingX={2}>
            <SearchField
              accessibilityLabel="Demo Search Field"
              id="searchField"
              color="gray"
              size="lg"
              onChange={({ value }) => setValue(value)}
              placeholder="Search and explore"
              value={value}
            />
          </Box> 
        </div> 
        <Box paddingX={2}>
          <Link to="/profile">
            <Avatar
              name="James Jones"
              src="https://i.ibb.co/2Fc00R3/james.jpg"
              size="sm"
            />
          </Link>
        </Box>
        <Box paddingX={2}>
          <IconButton
            accessibilityControls="sections-dropdown-example"
            accessibilityHaspopup
            accessibilityExpanded={open}
            accessibilityLabel="More Options"
            icon="arrow-down"
            selected={open}
            onClick={() => setOpen((prevVal) => !prevVal)}
            ref={anchorRef}
          />
          {open && (
            <Dropdown
              id="sections-dropdown-example"
              anchor={anchorRef.current}
              onDismiss={() => {
                setOpen(false);
              }}
            >
              <Dropdown.Section label="Options">
                {/* <Dropdown.Item option={{ value: "item 1", label: "Item 1" }} /> */}
                <Dropdown.Item option={{ value: "item 1", label: "Item 1" }}>
                  <Link to="/profile" className="w-100 btn text-left p-0"><strong>Profile</strong></Link>
                </Dropdown.Item>
                <Dropdown.Item option={{ value: "item 1", label: "Item 1" }}>
                  <Link to="/settings" className="w-100 btn text-left p-0"><strong>Settings</strong></Link>
                </Dropdown.Item>
                <Dropdown.Item handleSelect={()=> dispatch(logout())} option={{ value: "Logout", label: "Logout" }} />
              </Dropdown.Section>
              {/* <Dropdown.Section label="View options">
                <Dropdown.Item
                  isExternal
                  href="https://pinterest.com"
                  option={{
                    value: "item 3",
                    label: "Item 3 with a really long, detailed, complex name",
                  }}
                />
                <Dropdown.Item
                  badgeText="New"
                  option={{ value: "item 4", label: "Item 4" }}
                />
                <Dropdown.Item
                  isExternal
                  href="https://pinterest.com"
                  badgeText="New"
                  option={{
                    value: "item 5",
                    label: "Item 5 with a really long name is a new item!",
                  }}
                />
              </Dropdown.Section> */}
            </Dropdown>
          )}
        </Box>
      </Box>
    </div>
  );
};

export default LoggedInNavbar;
