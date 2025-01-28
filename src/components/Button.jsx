function Button(props) {
    return (
        <button {...props} className="bg-slate-400 p-2 rounded-md text-white">
            {props.children}
        </button>
        /*
        {...props} recebe todas as props do elemento
        {props.children} recebe tudo que está dentro do elemento
        */
    )
}

export default Button