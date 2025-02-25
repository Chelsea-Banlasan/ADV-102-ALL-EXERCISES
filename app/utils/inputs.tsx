

export function inputsFn(
    emailValue: any,
    setEmailValue: any,
    passValue: any,
    setPassValue: any,
) {
    return [
        {id: 1, label: "Email", placeholder: "Enter your email", value: emailValue, onChange: setEmailValue},
        {id: 2, label: "Password", placeholder: "Enter your password", value: passValue, onChange: setPassValue, secure: true},
    ]
}

export function registerInputsFn(
    nameValue: string,
    setNameValue: any,
    emailValue: string,
    setEmailValue: any,
    passValue: string,
    setPassValue: any,
) {
    return [
        {id: 1, label: "Name", placeholder: "Enter your name", value: nameValue, onChange: setNameValue},
        {id: 2, label: "Email", placeholder: "Enter your email", value: emailValue, onChange: setEmailValue},
        {id: 3, label: "Password", placeholder: "Enter your password", value: passValue, onChange: setPassValue, secure: true},
    ]
}
