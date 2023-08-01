import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./rtk/store";
import { ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import { SnackbarProvider } from "notistack";
import SnackBar from "./components/common/snackBar/";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={3} autoHideDuration={1000}>
        <SnackBar/>
        <App />
      </SnackbarProvider>
    </ThemeProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
