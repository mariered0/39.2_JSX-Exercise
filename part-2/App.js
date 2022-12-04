const App = () => (
    <div>
        <Tweet 
            name="Marie"
            username="marie"
            date={new Date().toDateString()}
            message="Hello" />
        <Tweet 
            name="Steven"
            username="steven"
            date={new Date().toDateString()}
            message="I'm going to Mexico!" />
        <Tweet 
            name="Marie"
            username="marie"
            date={new Date().toDateString()}
            message="So excited!" />

    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));