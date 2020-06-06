//--> babel src/playground/visible-toggle.js --out-file=public/scripts/app.js --presets=env,react --watch

const app = {
  text : ''
}

const toggleDetail = () => {
  if (app.text){
    app.text = '';
  } else { 
    app.text = 'some text';
  }
  render();
}

const appRoot = document.getElementById('app');

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetail}>Show details</button>
      <p>{app.text}</p>
    </div>
  );
  ReactDOM.render(template, appRoot);
}

render();