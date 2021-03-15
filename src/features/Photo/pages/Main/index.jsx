import Banner from "components/Banner";
import Images from "constants/images";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

MainPage.propTypes = {};

function MainPage(props) {
  // state.photos : state laf rootReducer nen state.photos la rootReducer.photos
  const photos = useSelector((state) => state.photos);
  console.log("list of photo: ", photos);
  return (
    <div className="photo-main">
      <Banner title="Your awesome photos 🎉" backgroundUrl={Images.PINK_BG} />
      <Container className="text-center">
        <Link to="/photos/add">Add new photo</Link>
      </Container>
    </div>
  );
}
export default MainPage;
