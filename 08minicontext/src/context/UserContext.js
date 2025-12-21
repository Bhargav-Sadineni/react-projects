import React from "react";

const UserContext = React.createContext()

export default UserContext;

/* UserContext is a provider is made
<UserContext>
    <Login/>
    <Card>
        <Data/>
    </Card>
</UserContext>
*/