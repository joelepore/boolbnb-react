import { useGlobalContext } from "../context/GlobalContext";

const LikesButton = ({ id, callback }) => {

    const { updateLikes } = useGlobalContext();


    return (
        <button
            className="heart-button z-3"
            onClick={(e) => {
                e.stopPropagation()
                updateLikes(id)
                if (callback) {
                    callback()
                }
            }
            } >
            <div className="position-relative">
                <i className="fa-solid fa-heart cuore-sotto"></i>
                <i className="fa-regular fa-heart cuore-sopra"></i>
            </div>
        </button>
    );
};

export default LikesButton;