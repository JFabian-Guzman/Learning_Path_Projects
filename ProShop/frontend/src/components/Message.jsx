import { Alert } from "react-bootstrap"

const Message = ({ variant, children }) => {
  return (
    <Alert variant={variant}>
        {children}
    </Alert>
  )
}

// Remember, variant means text color
Message.defaultProps = {
  variant: 'info',
};

export default Message