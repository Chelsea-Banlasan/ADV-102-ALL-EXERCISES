
export const directs = [
    {id: 1, title: "Exercise"},
    {id: 2, title: "Exercise"},
    {id: 3, title: "Exercise",
     desc: "Login screen and Login Fields",
     fields: ["Email", "Password"],
     direct: "/screens/loginScreen" as const
    },
    {id: 4, title: "Exercise",
     desc: "Screens for useState and useEffect",
     fields: ["Email", "Password"],
     direct: "/screens/hooks" as const
    },
    {id: 5, title: "Exercise",
     desc: "Register screen and Register Fields",
     fields: ["Image Picker", "Name", "Password", "Register Button"],
     direct: "/screens/registerScreen" as const
    },
    {id: 6, title: "Exercise",
     desc: "Simple CRUD",
     direct: "/screens/crudScreen" as const
    },
]