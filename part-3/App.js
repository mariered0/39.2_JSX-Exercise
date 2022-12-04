const App = () => (
    <div>
        <Person name={'Marie'} age={35} hobbies={['movies', 'books', 'traveling']} />
        <Person name={'Lena'} age={15} hobbies={['shopping', 'music', 'guitar']} />
        <Person name={'Steven'} age={37} hobbies={['games', 'comics', 'cooking']} />
    </div>
);

ReactDOM.render(<App />, document.getElementById("root"));