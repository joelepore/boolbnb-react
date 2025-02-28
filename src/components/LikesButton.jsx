import { useGlobalContext } from "../context/GlobalContext";

const LikesButton = ({ id, callback }) => {

    const { updateLikes } = useGlobalContext();


    return (
        <button
            className="heart-button z-3"
            onClick={(e) => {
                e.stopPropagation()
                updateLikes(id)
                callback()
            }
            } >
            <i className="fa-solid fa-heart"></i>
        </button>
    );
};

export default LikesButton;