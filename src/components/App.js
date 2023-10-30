import React from "react";
import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Container header="Example header" direction="horizontal">
        {/* <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div>
        <div>This is an example!</div> */}

        <ExampleElement message='This is an example!' />
        <ExampleElement message='This is an example!' />
        <ExampleElement message='This is an example!' />
        <ExampleElement message='This is an example!' />
        <ExampleElement message='This is an example!' />
      </Container>
      <Container header="Example header" textPosition="center">
        {/* <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        />
        <img
          alt="turtle"
          src="https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg"
        /> */}

        <ExampleImg alt={'turtle'} src={'https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg'} />
        <ExampleImg alt={'turtle'} src={'https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg'} />
        <ExampleImg alt={'turtle'} src={'https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg'} />
        <ExampleImg alt={'turtle'} src={'https://pbs.twimg.com/profile_images/3022993403/fdae67d800527328cee7a222f048dbbd.jpeg'} />
      </Container>
    </div>
  );
}

function ExampleElement({message}) {
  return <>{message}</>
}

function ExampleImg({alt, src}) {
  return <img alt={alt} src={src}></img>
}

export default App;
