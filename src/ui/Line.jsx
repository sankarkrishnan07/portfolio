import PropTypes from "prop-types";

function Line({ lineRef, isMoving }) {
  return (
    <svg
      width="100vw"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 9999,
        minHeight: "100vh",
      }}
    >
      <line
        ref={lineRef}
        x1={0}
        y1={0}
        x2={0}
        y2={0}
        stroke="#fff"
        strokeWidth="2"
        visibility={isMoving ? "hidden" : "visible"}
      ></line>
    </svg>
  );
}

Line.propTypes = {
  lineRef: PropTypes.any,
  isMoving: PropTypes.bool,
};

export default Line;
