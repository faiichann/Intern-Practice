import { useAppContext } from 'contexts/AppContext';
import { memo, useCallback, useContext} from 'react';

type Student ={
    id: number | string,
    name: string 
}


const StudentBoard = (() =>{

    const {studentList, setStudentList,removeStudent}= useAppContext();
    return (
        <div> 
            {studentList.map(( {id,name}: Student ) => {
                return<div>
                    <div>Id: {id}</div>
                    <div>Name: {name}</div>
                    <div><button onClick={()=>{removeStudent(id)}}>-</button> </div>
                </div>
            })}
        </div>
)
})

export default StudentBoard