function Input(props) {
    return (
        <input
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        {...props} // mesmo que passar todas as props uma por uma
        /*
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        */
        />
    )
}

export default Input