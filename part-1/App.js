const App = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name={'Marie'} />
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById("root"));
