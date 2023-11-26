const Button = (props: {
    title: String;
    imgUrl: String;
    color: String;
  }) => {
    return (
        <button className={`${props.color} rounded-lg sm:w-auto w-[7rem] sm:h-auto h-[3rem] sm:py-2 py-[0.2] sm:px-[5rem] px-[0.5rem] flex text-sm  text-white `}>
            <img src={`${props.imgUrl}`} alt="" />
            {props.title}
        </button>
    )
}

export default Button;