import React, {useEffect} from 'react';
import { useSelector} from "react-redux";

export const User=() => {
    const state=useSelector(((state)=>state))
    return <div>
      <p>
          name:{state.name}
      </p>
        <p>
            age:{state.age}
        </p>

    </div>
}
export default User
