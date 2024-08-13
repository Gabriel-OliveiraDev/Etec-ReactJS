import HiddenBox from "./hiddenBox"

interface IBox {
  name: string
  email: string
  password: string
  show: boolean
}

export default function Box(props: IBox) {
  return (
    <div
      className="border border-blue-700 mt-4">
      <h1>{props.name}</h1>
      <h1>{props.email}</h1>
      {props.show ?
          <HiddenBox pass={props.password} /> : <h1>{props.password}</h1>
      }
    </div>
  )
}