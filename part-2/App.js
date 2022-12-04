const App = () => (
    <div>
        <Tweet 
            username="Marie"
            date="12/3/2022"
            message="Hello" />
        <Tweet 
            username="Steven"
            date="12/3/2022"
            message="I'm going to Mexico!" />
        <Tweet 
            username="Marie"
            date="12/3/2022"
            message="So excited!" />

    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));