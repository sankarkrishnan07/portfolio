import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";
import { StyleSheetManager } from "styled-components";
import emotionIsPropValid from "@emotion/is-prop-valid";
import GlobalStyles from "./ui/GlobalStyles";

function App() {
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <GlobalStyles />
      <AppLayout />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            fontFamily: "monospace",
            maxWidth: "600px",
            padding: "16px 24px",
            background: "#1f1f1f",
            color: "#fff",
          },
        }}
      />
    </StyleSheetManager>
  );
}

function shouldForwardProp(propName, target) {
  if (typeof target === "string") {
    // For HTML elements, forward the prop if it is a valid HTML attribute
    return emotionIsPropValid(propName);
  }
  // For other elements, forward all props
  return true;
}

export default App;
