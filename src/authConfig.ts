import { Configuration, PopupRequest } from "@azure/msal-browser";

// Config object to be passed to Msal on creation
export const msalConfig: Configuration = {
	auth: {
		clientId: "9aa18f30-b98c-4944-b51c-0d6a1eee0352",
		authority: "https://login.microsoftonline.com/consumers",
		redirectUri: "http://localhost:3000/profile",
		postLogoutRedirectUri: "http://localhost:3000",
	},
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
	scopes: ["User.Read"],
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
	graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};
