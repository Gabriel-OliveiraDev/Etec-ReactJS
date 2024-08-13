import HiddenButton from "./hiddenButton"

interface IHiddenBox {
  pass: string
}

export default function HiddenBox(props: IHiddenBox) {
  function handleHide() {
    return '*'.repeat(props.pass.length)
  }
  return (
    <h1>{[handleHide(), <HiddenButton />] }</h1>
  )
}