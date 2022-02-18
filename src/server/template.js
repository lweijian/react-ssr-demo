import {renderToString} from "react-dom/server";
import {Provider} from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import App from "../containers/App";
import React from "react";


export function getTemplate(url,store) {
    const content = renderToString(
        <Provider store={store}>
            <StaticRouter  location={url}>
                <App/>
            </StaticRouter>
        </Provider>
    );
    return `
   <html>
     <head>
       <title>hello</title>
     </head>
     <body>
      <div id="root">${content}</div>
     </body>
     <script>
        window.context = {
            state: ${JSON.stringify(store.getState())}
          } 
    </script>
     <script  src="./client.js"></script>
   </html>
 `;
}
