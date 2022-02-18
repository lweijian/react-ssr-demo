export const ADD_AGE='ADD_AGE';
export const MODIFY_Info='MODIFY_Info';
export const addAgeAction = () => {
  return {
      type:ADD_AGE
  }
}
export const modifyUserAction=(name,age)=>{
    return {
        type:MODIFY_Info,
        payload:{
            name:name,
            age:age
        }
    }
}
