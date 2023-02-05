import React from 'react'

function Alert(props) {
  return (
    props.Alert && <div>
      <div className="alert alert-success d-flex align-items-center" role="alert">
  <div>
   <strong>{props.Alert.type}</strong>: {props.Alert.msg}
  </div>
</div>
    </div>
  )
}

export default Alert
