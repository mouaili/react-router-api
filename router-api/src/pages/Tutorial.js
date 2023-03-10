import React from 'react';

const Tutorial = props => {
  console.log(props);

  setTimeout(() => {
    props.history.push('/');
  }, 3000);

  return (
    <div className="container">
      <h1 className="m-5 text-info">Tutorial: intro à React</h1>
      <div
        className="alert alert-info bg-alert text-center font-weight-bolder m-5"
        role="alert"
      >
        <button
          type="button"
          className="close"
          data-dismiss="alert"
          aria-label="Close"
        >
          <span aria-hidden="true">&times;</span>
        </button>

        <p>La page est en cours de construction...</p>
        <p>
          Vous allez être redirigés dans quelques instants vers la page
          d'accueil
        </p>
      </div>
      <div className="row col-lg-12">
        <h2>Avant de commencer le tutoriel </h2>
        <p>
          Nous allons construire un petit jeu pendant ce tutoriel.
          <strong>
            Vous pourriez être tenté·e de l’ignorer sous prétexte que vous ne
            construisez pas de jeux—mais donnez-lui sa chance
          </strong>
          . Les techniques que vous apprendrez dans ce tutoriel sont
          fondamentales pour la construction de n’importe quel type d’appli
          React, et les maîtriser vous apportera une compréhension profonde de
          React.
        </p>
      </div>
    </div>
  );
};

export default Tutorial;
