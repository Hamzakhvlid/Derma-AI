const Button = (props: {
    title: String;
    imgUrl: String;
    color: String;
  }) => {
    return (
        <button className={`${props.color}  rounded-lg py-2 px-[5rem] flex  text-white `}>
            <img src={`${props.imgUrl}`} alt="" />
            {props.title}
        </button>
    )
}

export default Button;