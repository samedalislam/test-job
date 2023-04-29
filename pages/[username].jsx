import View from "../components/View";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useRouter } from "next/router";

const UserDetails = ({ user }) => {
    const router = useRouter();
    return (
        <div className="user-details">
            <View
                name={user.user?.name}
                sector={user.user?.sector}
                agree={user.user?.agree}
            />
            <button className="btn back-btn" onClick={() => router.push("/")}>
                Back to Home
            </button>
        </div>
    );
};
export default UserDetails;

export async function getServerSideProps({ params }) {
    const userRef = doc(db, "users", params.username);
    const userSnap = await getDoc(userRef);

    return {
        props: {
            user: userSnap.data(),
        },
    };
}
