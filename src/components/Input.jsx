function Input(props) {
    return (
        <input
        className="border border-violet-300 outline-violet-400 px-4 py-2 rounded-md"
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