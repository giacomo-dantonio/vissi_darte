export default function Title(props: {children: React.ReactNode}) {
    return <h1 className="dark-blue f4 mt0 lh-title tl">
        {props.children}
    </h1>;
}