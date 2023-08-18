const HEAD = (
  <div
    style={{
      width: "50px",
      aspectRatio: 1,
      borderRadius: "50%",
      border: "10px solid black",
      position: "absolute",
      right: "-30px",
      top: "50px",
    }}
  />
);

const BODY = (
  <div
    style={{
      height: "120px",
      width: "10px",
      position: "absolute",
      right: 0,
      top: "110px",
      background: "black",
    }}
  />
);

const LEFT_ARM = (
  <div
    style={{
      height: "75px",
      width: "10px",
      position: "absolute",
      right: "30px",
      top: "90px",
      rotate: "-50deg",
      background: "black",
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      height: "75px",
      width: "10px",
      position: "absolute",
      right: "-30px",
      top: "90px",
      rotate: "50deg",
      background: "black",
    }}
  />
);

const LEFT_LEG = (
  <div
    style={{
      height: "75px",
      width: "10px",
      position: "absolute",
      right: "30px",
      top: "210px",
      rotate: "230deg",
      background: "black",
    }}
  />
);

const RIGHT_LEG = (
  <div
    style={{
      height: "75px",
      width: "10px",
      position: "absolute",
      right: "-30px",
      top: "210px",
      rotate: "-230deg",
      background: "black",
    }}
  />
);

const DRAWING = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG];

type DrawingProps = {
  numberOfGuesses: number;
};

const HangmanDrawing = ({ numberOfGuesses }: DrawingProps) => {
  return (
    <div style={{ position: "relative" }}>
      {DRAWING.slice(0, numberOfGuesses)}
      <div
        style={{
          width: "10px",
          height: "50px",
          background: "black",
          marginLeft: "120px",
          position: "absolute",
          right: 0,
        }}
      />
      <div
        style={{
          width: "200px",
          height: "10px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div
        style={{
          width: "10px",
          height: "400px",
          background: "black",
          marginLeft: "120px",
        }}
      />
      <div style={{ width: "250px", height: "10px", background: "black" }} />
    </div>
  );
};

export default HangmanDrawing;
