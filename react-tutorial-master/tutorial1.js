// Passing methods in a javascript object to React.createClass = creates new component
var CommentBox = React.createClass({
	render: function() {
		return (
			// Not actual DOM ndes; instantiations of react div components.
			// Markers / pieces of data that react knows how to handle.
			// Not generating HTML strings so XSS protection is the default.
			// You do not have to return basic HTML. You can return a tree of components instead = composability.
			<div className="CommentBox">
				Hello, world! I am a CommentBox.
			</div>
		);
	}
});
ReactDOM.render(
	<CommentBox />,
	document.getElementById('content')
);