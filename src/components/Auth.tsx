import React, { ReactNode } from "react";
import {
  Authenticator,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

interface AuthProps {
  children: ReactNode;
}

const Auth: React.FC<AuthProps> = ({ children }) => {
  return (
    <Authenticator>
      {({ signOut }) => (
        <div>
          <div className="header">
            <h1>AWS CDK, S3, Cognito, Amplify - File Storage</h1>
            <button onClick={signOut}>Ausloggen</button>
          </div>
          {children}
        </div>
      )}
    </Authenticator>
  );
};

export default Auth;

//stellt den Auth bereit um sich zu authentifizieren und auszuloggen