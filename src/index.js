import React from "react";
import ReactDOM from "react-dom";
import ProgressiveImage from "react-progressive-graceful-image";
import "./styles.css";

import background from "./images/Background.jpg";

class App extends React.Component {
  state = {
    mode: 0,
    idGame: 1,
    solution: false,
    textButtonSOL: "Voir la solution"
  };

  swapSolution = () => {
    if (this.state.solution) {
      this.setState({ solution: false, textButtonSOL: "Voir la solution" });
    } else {
      this.setState({ solution: true, textButtonSOL: "Voir le défi" });
    }
  };

  swapMode = (modeInput) => {
    this.setState({
      mode: modeInput,
      idGame: 1,
      solution: false,
      textButtonSOL: "Voir la solution"
    });
  };

  clickPrev = () => {
    if (this.state.idGame == 1) {
      this.setState({
        idGame: 20,
        solution: false,
        textButtonSOL: "Voir la solution"
      });
    } else {
      this.setState({
        idGame: this.state.idGame - 1,
        solution: false,
        textButtonSOL: "Voir la solution"
      });
    }
  };

  clickNext = () => {
    if (this.state.idGame == 20) {
      this.setState({
        idGame: 1,
        solution: false,
        textButtonSOL: "Voir la solution"
      });
    } else {
      this.setState({
        idGame: this.state.idGame + 1,
        solution: false,
        textButtonSOL: "Voir la solution"
      });
    }
  };

  render() {
    return (
      <div className="App">
        <table
          style={{
            backgroundImage: `url(${background})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        >
          <tr>
            <td colspan="3">
              <br />
            </td>
          </tr>
          <tr>
            <td>
              {this.state.mode == 0 ? (
                <input
                  class="buttonActive"
                  type="button"
                  value="FACILE"
                  width="20%"
                />
              ) : (
                <input
                  class="button"
                  type="button"
                  value="FACILE"
                  onClick={() => this.swapMode(0)}
                  width="20%"
                />
              )}
            </td>
            <td>
              {this.state.mode == 1 ? (
                <input
                  class="buttonActive"
                  type="button"
                  value="MOYEN"
                  width="20%"
                />
              ) : (
                <input
                  class="button"
                  type="button"
                  value="MOYEN"
                  onClick={() => this.swapMode(1)}
                  width="20%"
                />
              )}
            </td>
            <td>
              {this.state.mode == 2 ? (
                <input
                  class="buttonActive"
                  type="button"
                  value="DIFFICILE"
                  width="20%"
                />
              ) : (
                <input
                  class="button"
                  type="button"
                  value="DIFFICILE"
                  onClick={() => this.swapMode(2)}
                  width="20%"
                />
              )}
            </td>
          </tr>
          <tr>
            <td>
              <input
                class="button"
                type="button"
                value="Précédent"
                onClick={this.clickPrev}
                width="20%"
              />
            </td>
            <td>
              <h3>{this.state.idGame}/20</h3>

              {this.state.solution ? (
                <ProgressiveImage
                  src={
                    "https://www.pcspace.com/logicbirdschallenges/" +
                    this.state.mode +
                    this.state.idGame +
                    "_SOL.png"
                  }
                >
                  {(src, loading) => (
                    <img
                      style={{ opacity: loading ? 0.5 : 1 }}
                      src={src}
                      width="300"
                      height="300"
                    />
                  )}
                </ProgressiveImage>
              ) : (
                <ProgressiveImage
                  src={
                    "https://www.pcspace.com/logicbirdschallenges/" +
                    this.state.mode +
                    this.state.idGame +
                    ".png"
                  }
                >
                  {(src, loading) => (
                    <img
                      style={{ opacity: loading ? 0.5 : 1 }}
                      src={src}
                      width="300"
                      height="300"
                    />
                  )}
                </ProgressiveImage>
              )}
            </td>
            <td>
              <input
                class="button"
                type="button"
                value="Suivant"
                onClick={this.clickNext}
                width="20%"
              />
            </td>
          </tr>
          <tr>
            <td colspan="3">
              <br />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input
                class="button"
                type="button"
                value={this.state.textButtonSOL}
                onClick={this.swapSolution}
                width="20%"
              />
              <br />
            </td>
            <td></td>
          </tr>
          <tr>
            <td colspan="3">
              <br />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
