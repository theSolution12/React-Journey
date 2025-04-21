const Move = () => {
    const onMove = () => console.log('Move event triggered!');

    return (
        <p onMouseMove={onMove}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ex architecto consequuntur, et exercitationem earum repellat autem praesentium iure. Commodi, illo. Blanditiis, consequatur. Omnis esse obcaecati necessitatibus maxime ea laudantium.</p>
    )
}

export default Move;