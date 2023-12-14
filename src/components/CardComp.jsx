// import Card from "react-bootstrap/Card";
// import ButtonComp from "./ButtonComp";
import "../css/CardComp.css";

function BgColorExample() {
    return (
        <>
            {/* {["Info"].map((variant) => (
                <Card
                    bg={variant.toLowerCase()}
                    key={variant}
                    text={variant.toLowerCase() === "light" ? "dark" : "white"}
                    style={{ background: "black" }}
                    className="mb-2 CardColor"
                    border="dark"
                >
                    <Card.Header className="bg-dark ">
                        <h1 className="classDiscover">
                            Take your watching experience to the Next Level
                        </h1>
                    </Card.Header>
                    <Card.Body className="bg-dark">
                        <Card.Title></Card.Title>
                        <Card.Text className="text-center">
                            <ButtonComp />
                        </Card.Text>
                    </Card.Body>
                </Card>
            ))} */}
            <div className="slogan">
                Your Gateway to Cinematic Delight: Where Every Frame Tells a
                Story!
            </div>
        </>
    );
}

export default BgColorExample;
