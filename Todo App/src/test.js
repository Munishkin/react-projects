const Note = ({title}) => (
  <div>{title}</div>
)

passProps({title: 'Hello'}, Note);

class passProps extends Component {
  render() {
    const {props, WrappedComponent} = this.props;
  return (
    <WrappedComponent {...props} />
  )
}
}