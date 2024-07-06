function Button(props: React.ComponentProps<'button'>) {
    return (
        <button className="rounded-md bg-sky-200 py-2 px-4 transition-colors hover:bg-sky-100" {...props}>
            {props.children}
        </button>
    )
}

export default Button