import { Children, createContext, useCallback, useEffect, useState, useContext } from "react"

interface IContextProps {
    children: any 
}

type Student = {
    id: number;
    name: string;
}

type StudentList = Array<Student> | [];


const AppContext = createContext<any>(null);

const AppProvider = (({children}: IContextProps) =>{

    const [studentList, setStudentList] = useState<StudentList>([]);

    const addStudent = useCallback(
        ({id, name}: Student) => {
            setStudentList((prev: StudentList) =>{
                const newData = [...prev];
                newData.push({id,name});
                return newData;
            })
        },
        [],
    )

    const removeStudent = useCallback(
        (id) => {
            setStudentList((prev) => {
                const newData = prev.filter(Student =>
                    Student.id !== id
                    )
                return newData;
            })
        },
        [],
    )

    const resetStudent = useCallback(
        () => {
            setStudentList([])
        },
        [],
    )

    const value ={
        studentList, 
        setStudentList,
        addStudent,
        removeStudent,
        resetStudent
    }
    useEffect(() => {
       console.log('StudentList', studentList)
    }, [studentList])

    return<AppContext.Provider value={value}>
        {children}
        </AppContext.Provider>
})

const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error(" error contect")
    }
    return context
}

export { AppContext, AppProvider, useAppContext  }