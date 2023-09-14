import ClipLoader from "react-spinners/ClipLoader";

export default function Loading() {
    return (
        <div>
            <ClipLoader
                color="#e53820"
                cssOverride={{}}
                loading
                size={25}
                speedMultiplier={2}
            />
        </div>
    )
}