import { useGlobalContext } from "../context/GlobalContext";

const LikesButton = ({ id }) => {

    const { updateLikes } = useGlobalContext();


    return (
        <button
            className="heart-button z-3"
            onClick={() => updateLikes(id)}>
            <i className="fa-solid fa-heart"></i>
        </button>
    );
};

export default LikesButton;
