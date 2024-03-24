import Link from "next/link";

const Button = (props: {
    title: String;
    color: String;
    href: String;
  }) => {
    return (
        <Link href={`${props.href}`} className={`${props.color} rounded-lg px-4 py-2 text-center text-sm  text-white `}>
            {props.title}
        </Link>
    )
}

export default Button;