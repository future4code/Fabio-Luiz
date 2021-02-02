import React from "react";
import AppBar from "@material-ui/core/AppBar";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { Content, Button, Title } from "./styled";
import { useHistory } from "react-router-dom";
import { goToLogin, goToHomePage } from "./../../pages/Router/Coordinator";

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Header = (props) => {
  const history = useHistory();
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar color="transparent">
          <Content>
            <Title onClick={() => goToHomePage(history)}>LabeX</Title>
            <hr />
            <Button>
              <img
                onClick={() => goToLogin(history)}
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSI0LjQyODgzOGUtMDA0IiB5MT0iMjU4IiB4Mj0iNTExLjk5OTUiIHkyPSIyNTgiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoMSAwIDAgLTEgMCA1MTQpIj4NCgk8c3RvcCAgb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojMDBGMkZFIi8+DQoJPHN0b3AgIG9mZnNldD0iMC4wMjEiIHN0eWxlPSJzdG9wLWNvbG9yOiMwM0VGRkUiLz4NCgk8c3RvcCAgb2Zmc2V0PSIwLjI5MyIgc3R5bGU9InN0b3AtY29sb3I6IzI0RDJGRSIvPg0KCTxzdG9wICBvZmZzZXQ9IjAuNTU0IiBzdHlsZT0ic3RvcC1jb2xvcjojM0NCREZFIi8+DQoJPHN0b3AgIG9mZnNldD0iMC43OTYiIHN0eWxlPSJzdG9wLWNvbG9yOiM0QUIwRkUiLz4NCgk8c3RvcCAgb2Zmc2V0PSIxIiBzdHlsZT0ic3RvcC1jb2xvcjojNEZBQ0ZFIi8+DQo8L2xpbmVhckdyYWRpZW50Pg0KPHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8xXyk7IiBkPSJNNDMxLDQzMmMtMTEuMDQ2LDAtMjAtOC45NTQtMjAtMjBzOC45NTQtMjAsMjAtMjBzMjAsOC45NTQsMjAsMjBTNDQyLjA0Niw0MzIsNDMxLDQzMnoNCgkgTTQ5Ni42ODksMzQ0LjYwN2MtOC41NjEtMTkuMTUtMjcuODQ1LTMxLjU1OC00OS4xNzYtMzEuNjA3aC02Mi4zNzJjLTAuMDQ1LDAtMC4wODcsMC0wLjEzMywwYy0yMi41LDAtNDIuMTMsMTMuMjYtNTAuMDI5LDMzLjgwNw0KCWMtMS4wNTEsMi43MzQtMi4zMzYsNi4xNzgtMy42NzcsMTAuMTkzSDIwMC4zNTZjLTUuNDA3LDAtMTAuNTgzLDIuMTg5LTE0LjM1LDYuMDY4bC0zNC4zNTYsMzUuMzg4DQoJYy03LjU2Nyw3Ljc5NC03LjUyOSwyMC4yMDMsMC4wODUsMjcuOTVsMzUsMzUuNjEyYzMuNzYsMy44MjYsOC45LDUuOTgxLDE0LjI2NCw1Ljk4MWg2NWMxMS4wNDYsMCwyMC04Ljk1NCwyMC0yMHMtOC45NTQtMjAtMjAtMjANCgloLTU2LjYxNGwtMTUuNDI4LTE1LjY5OEwyMDguODE0LDM5N2gxMzcuNDkxYzkuMjE0LDAsMTcuMjM1LTYuMjk1LDE5LjQyNi0xNS4yNDRjMS42MTgtNi42MDcsMy42NDgtMTIuOTU5LDYuNTg0LTIwLjU5Ng0KCWMxLjkzNi01LjAzNiw2Ljc5OC04LjE2LDEyLjc0MS04LjE2YzAuMDEzLDAsMC4wMjYsMCwwLjAzOSwwaDYyLjM3MWM1LjY1NiwwLjAxMywxMC41MjQsMy4wNTMsMTIuNzA1LDcuOTMyDQoJYzUuMzY5LDEyLjAxMiwxMS43OCwzMC42MDgsMTEuODI4LDUwLjk4NmMwLjA0OCwyMC41MjktNi4zNTYsMzkuNTUxLTExLjczOSw1MS44OTRjLTIuMTcsNC45NzgtNy4wNzksOC4xODgtMTIuNTYsOC4xODgNCgljLTAuMDExLDAtMC4wMjIsMC0wLjAzMywwaC02My4xMjVjLTUuNTMzLTAuMDEzLTEwLjcxNi0zLjU3My0xMi44OTYtOC44NThjLTIuMzM5LTUuNjcxLTQuMzY2LTEyLjE0Ni02LjE5Ny0xOS43OTcNCgljLTIuNTcxLTEwLjc0Mi0xMy4zNjctMTcuMzY2LTI0LjEwNS0xNC43OTZjLTEwLjc0MywyLjU3MS0xNy4zNjcsMTMuMzY0LTE0Ljc5NiwyNC4xMDZjMi4zMjEsOS42OTksNC45NzgsMTguMTE4LDguMTIxLDI1LjczOA0KCWM4LjM5OSwyMC4zNjQsMjcuOTM5LDMzLjU1NSw0OS44MjcsMzMuNjA2aDYzLjEyNWMwLjA0MywwLDAuMDgzLDAsMC4xMjYsMGMyMS4zNTEtMC4wMDEsNDAuNjQ3LTEyLjYzLDQ5LjE4LTMyLjIwMQ0KCWM2LjkxMi0xNS44NTEsMTUuMTM3LTQwLjUxMSwxNS4wNzItNjcuOTc1QzUxMS45MzUsMzg0LjQzNCw1MDMuNjM4LDM2MC4xNTMsNDk2LjY4OSwzNDQuNjA3eiBNMTUxLjUsNDkyYzAsMTEuMDQ2LTguOTU0LDIwLTIwLDIwDQoJSDYwLjY5M2MtMTguMzI5LDAtMzUuNDcyLTguMTUzLTQ3LjAzMi0yMi4zNjlDMi4wNDIsNDc1LjM0NS0yLjQ2NCw0NTYuNzg5LDEuMjk4LDQzOC43MjMNCgljMTIuMDAzLTU3LjY1Nyw0My44LTExMC4xMjYsODkuNTMyLTE0Ny43NDNjMjQuOTQyLTIwLjUxNiw1My40NDItMzYuMDY0LDgzLjgxMy00Ni4wNjJDMTQxLjQ5MiwyMjAuMDkyLDEyMCwxODAuNTA5LDEyMCwxMzYNCglDMTIwLDYxLjAxLDE4MS4wMDksMCwyNTYsMHMxMzYsNjEuMDEsMTM2LDEzNmMwLDQ0LjQ2OS0yMS40NTUsODQuMDIxLTU0LjU1NiwxMDguODUxYzMuMzUsMS4xMDQsNi42ODQsMi4yNjgsOS45OTUsMy41MTINCgljMTAuMzQxLDMuODgzLDE1LjU3NiwxNS40MTQsMTEuNjkzLDI1Ljc1NGMtMy44ODMsMTAuMzQxLTE1LjQxNCwxNS41NzgtMjUuNzU0LDExLjY5M2MtMjMuMTA3LTguNjc3LTQ3LjM4My0xMy4zNS03Mi4yMzYtMTMuOTE3DQoJYy0xLjcwOCwwLjA2NC0zLjQyLDAuMTA3LTUuMTQyLDAuMTA3Yy0xLjcwNywwLTMuNDA0LTAuMDQyLTUuMDk3LTAuMTA1Yy0xMDEuNjM2LDIuMzY0LTE4OS42NzYsNzUuMjE5LTIxMC40NDUsMTc0Ljk4DQoJYy0xLjI5Nyw2LjIyOSwwLjI0OCwxMi42MTMsNC4yMzYsMTcuNTE5YzIuMzEsMi44NDEsNy40NjEsNy42MDYsMTUuOTk5LDcuNjA2SDEzMS41QzE0Mi41NDYsNDcyLDE1MS41LDQ4MC45NTQsMTUxLjUsNDkyeg0KCSBNMjUxLjMxMSwyMzEuODg0YzEuNTYyLTAuMDI4LDMuMTI1LTAuMDUxLDQuNjg5LTAuMDUxYzEuNTYsMCwzLjExNywwLjAyNCw0LjY3NCwwLjA1MkMzMTEuNDQ2LDIyOS40MzgsMzUyLDE4Ny4zNjcsMzUyLDEzNg0KCWMwLTUyLjkzNS00My4wNjUtOTYtOTYtOTZzLTk2LDQzLjA2NS05Niw5NkMxNjAsMTg3LjM2MiwyMDAuNTQ2LDIyOS40MywyNTEuMzExLDIzMS44ODR6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="
              />
            </Button>
          </Content>
        </AppBar>
      </HideOnScroll>
    </>
  );
};

export default Header;
