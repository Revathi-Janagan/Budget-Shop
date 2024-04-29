import React from "react";
import { AuthProvider } from "./Context/AuthContext";

import BaseRoutes from "./Routing/Routers";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BaseRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
