const throttle = (time, func) => {
  let inThrottle

  return function() {
    const args = arguments
    const context = this

    if(!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, time)
    }
  }
}

export default throttle