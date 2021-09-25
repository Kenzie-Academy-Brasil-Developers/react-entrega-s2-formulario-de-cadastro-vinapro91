import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { Container } from "@material-ui/core";
const Home = () => {
  const { id } = useParams();

  return (
    <div className="home">
      <Container
        sx={{
          border: "black solid 1px",
          backgroundColor: "rgba( 255, 255, 255, 0.55 )",
          backdropFilter: "blur( 8px )",
          color: "chartreuse",
          fontSize: "45px",
          texteAling: "center",
        }}
        color="primary"
      >
        <h1> Bem Vindo, {id} !</h1>
        <Link to="/">Voltar</Link>
      </Container>
    </div>
  );
};

export default Home;
