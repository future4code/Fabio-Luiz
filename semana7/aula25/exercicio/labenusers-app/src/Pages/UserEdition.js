import React from 'react';
import {
  DetailsBox,
  DetailsInfo,
  IconsContainer,
} from "../Styled";

export const UserEdition = (props) => {
    return (
      <DetailsBox>
        <DetailsInfo>
          <section>
            <label>Nome: </label>
            <input
              type="text"
              placeholder="Digite o novo nome"
              value={props.inputName}
              onChange={props.onChangeName}
            />
          </section>
          <section>
            <label>E-mail: </label>
            <input
              type="email"
              placeholder="Digite o novo e-mail"
              value={props.inputEmail}
              onChange={props.onChangeEmail}
            />
          </section>
        </DetailsInfo>
        <IconsContainer>
          <img
            id="saveIcon"
            onClick={() => props.editUser(props.details)}
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPHBhdGggc3R5bGU9ImZpbGw6IzcyQTNGQzsiIGQ9Ik01MDcuNjA2LDg0LjM5NGwtODAtODBDNDI0Ljc5MywxLjU4MSw0MjAuOTc4LDAsNDE3LDBIMTVDNi43MTYsMCwwLDYuNzE2LDAsMTV2NDgyDQoJYzAsOC4yODQsNi43MTYsMTUsMTUsMTVoNDgyYzguMjg0LDAsMTUtNi43MTYsMTUtMTVWOTVDNTEyLDkxLjAyMiw1MTAuNDE5LDg3LjIwNyw1MDcuNjA2LDg0LjM5NHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiMyODkyRkM7IiBkPSJNNTA3LjYwNiw4NC4zOTRsLTgwLTgwQzQyNC43OTMsMS41ODEsNDIwLjk3OCwwLDQxNywwSDI1NnY1MTJoMjQxYzguMjg0LDAsMTUtNi43MTYsMTUtMTVWOTUNCglDNTEyLDkxLjAyMiw1MTAuNDE5LDg3LjIwNyw1MDcuNjA2LDg0LjM5NHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGOUY5Rjk7IiBkPSJNNDA2LDI0MkgxMDZjLTguMjg0LDAtMTUsNi43MTYtMTUsMTV2MjU1aDMzMFYyNTdDNDIxLDI0OC43MTYsNDE0LjI4NCwyNDIsNDA2LDI0MnoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNERkU0RUE7IiBkPSJNNDIxLDI1N2MwLTguMjg0LTYuNzE2LTE1LTE1LTE1SDI1NnYyNzBoMTY1VjI1N3oiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGQUQ1NTc7IiBkPSJNMzQ2LDQ1MkgxNjZjLTguMjg0LDAtMTUtNi43MTYtMTUtMTVzNi43MTYtMTUsMTUtMTVoMTgwYzguMjg0LDAsMTUsNi43MTYsMTUsMTUNCgkJUzM1NC4yODQsNDUyLDM0Niw0NTJ6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6I0ZBRDU1NzsiIGQ9Ik0zNDYsMzMySDE2NmMtOC4yODQsMC0xNS02LjcxNi0xNS0xNXM2LjcxNi0xNSwxNS0xNWgxODBjOC4yODQsMCwxNSw2LjcxNiwxNSwxNQ0KCQlTMzU0LjI4NCwzMzIsMzQ2LDMzMnoiLz4NCgk8cGF0aCBzdHlsZT0iZmlsbDojRkFENTU3OyIgZD0iTTM0NiwzOTJIMTY2Yy04LjI4NCwwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1LDE1LTE1aDE4MGM4LjI4NCwwLDE1LDYuNzE2LDE1LDE1DQoJCVMzNTQuMjg0LDM5MiwzNDYsMzkyeiIvPg0KPC9nPg0KPHBhdGggc3R5bGU9ImZpbGw6IzU0NThFQTsiIGQ9Ik0zNjEsMEg5MXYxNDVjMCw4LjI4NCw2LjcxNiwxNSwxNSwxNWgyNDBjOC4yODQsMCwxNS02LjcxNiwxNS0xNVYweiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6IzM1NDVFMzsiIGQ9Ik0yNTYsMHYxNjBoOTBjOC4yODQsMCwxNS02LjcxNiwxNS0xNVYwSDI1NnoiLz4NCjxnPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGQ0IxMkI7IiBkPSJNMzQ2LDQyMmgtOTB2MzBoOTBjOC4yODQsMCwxNS02LjcxNiwxNS0xNVMzNTQuMjg0LDQyMiwzNDYsNDIyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGQ0IxMkI7IiBkPSJNMzQ2LDMwMmgtOTB2MzBoOTBjOC4yODQsMCwxNS02LjcxNiwxNS0xNVMzNTQuMjg0LDMwMiwzNDYsMzAyeiIvPg0KCTxwYXRoIHN0eWxlPSJmaWxsOiNGQ0IxMkI7IiBkPSJNMzQ2LDM2MmgtOTB2MzBoOTBjOC4yODQsMCwxNS02LjcxNiwxNS0xNVMzNTQuMjg0LDM2MiwzNDYsMzYyeiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo="
          />
        </IconsContainer>
      </DetailsBox>
    );
}
