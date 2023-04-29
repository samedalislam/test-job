import { useState } from "react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/router";

const Home = ({ sectors }) => {
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [select, setSelect] = useState({});
    const [agree, setAgree] = useState(false);
    const [userData, setUserData] = useState({});
    const [disable, setDisable] = useState(true);

    const router = useRouter();

    const handleChange = (e) => {
        const selected = e.target;
        const value = selected.value;
        const text = selected.selectedOptions[0].text;

        setSelect({
            ...select,
            id: value,
            text: text,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setUser({
            ...user,
            name,
            sector: select,
            agree,
        });

        // Add a new document in collection "users"
        await setDoc(doc(db, "users", name), { user });
    };

    return (
        <div className="home">
            <h2 className="title">
                Please enter your name and pick the Sectors you are currently
                involved in.
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <span>Name</span>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter Your Name"
                        required
                    />
                </div>
                <span>Sector</span>
                <select multiple="" size="5" onChange={handleChange}>
                    {sectors.map((sec) => (
                        <option key={sec.value} value={sec.value}>
                            {sec.sector}
                        </option>
                    ))}
                </select>
                <div className="agreement">
                    <input
                        type="checkbox"
                        id="checkbox"
                        onChange={(e) => setAgree(!agree)}
                    />
                    <label htmlFor="checkbox">Agree to terms</label>
                </div>
                <button type="submit" className="btn submit-btn">
                    Save
                </button>
            </form>
            <div className="btns">
                <button
                    onClick={() => (name ? router.push(`${name}`) : "")}
                    className="btn view-btn"
                >
                    View
                </button>
            </div>
        </div>
    );
};
export default Home;

export async function getStaticProps() {
    const res = await fetch("https://test-job-five.vercel.app/api/sectors");
    const data = await res.json();

    return {
        props: { sectors: data },
    };
}
